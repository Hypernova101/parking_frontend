---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /mihirfeatureblog
title: Mihir's Project Feature Blog
categories: [Mihir Final Retrospective]
---

---

# Building Prism Chatroom

---

## Purpose of the Program

The Chatroom allows users to send, edit, and delete messages within different channels, which are actually random questions generated through the user interests. Users are allowed full CRUD functionality on their own chat messages. Otherwise, admins can edit and delete anyones messages, and regular users who have not partaken in the conversation cannot do anything.

### Individual Features

1. **Frontend**: User interactions like sending messages and fetching chat history.
2. **API Integration**: RESTful communication for CRUD operations.
3. **Backend Model**: Data storage and retrieval via SQLAlchemy models.

---

## CPT Requirement 1: User Input Handling with Input/Output Requests

### Live Input Example: Sending Messages

Here is how the User Messages are sent through the frontend. It calls the API endpoint, which will be covered later.

```javascript
async function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
        const postData = { message: message, channel_id: selectedChannelId };
        try {
            const response = await fetch(`${pythonURI}/api/chat`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
            if (!response.ok) throw new Error('Failed to add post');
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
}
```

This follows the CPT requirements, in that when the user clicks on send message button, the sendMessage function is called, which hits the chat API with a ``POST`` request.

### Retrieving Messages and DB Operations

Here’s how the frontend fetches messages in a specific channel using a GET request.

The outputted JSON is the interated through, the various output properties are then put into HTML objects, and then appended to the DOM.

```javascript
async function fetchData(channelId) {
    try {
        const response = await fetch(`${pythonURI}/api/chat?id=${channelId}`, {
            ...fetchOptions,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch chats: ' + response.statusText);
        }
        const chatData = await response.json();
        console.log(chatData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
```
For data management purposes, it is important to be able to initialize, backup, and restore data from a database. My feature meets these requirements, as evidenced by the code below.

**Initializing Code**

```python

#File Location: model/chat.py

def initChats():
    """
    Initializes the Chat table and adds tester data to the table.

    Uses:
        The db ORM methods to create the table.

    Instantiates:
        Chat objects with tester data.

    Raises:
        IntegrityError: An error occurred when adding the tester data to the table.
    """
    with app.app_context():
        """Create database and tables"""
        db.create_all()
        """Tester data for table"""
        chats = [
            Chat(message="Hello, world!", user_id=1, channel_id=1),
            Chat(message="How's everyone doing?", user_id=2, channel_id=1),
            Chat(message="Welcome to the new channel!", user_id=3, channel_id=2),
            Chat(message="Let's discuss the project.", user_id=1, channel_id=2),
            Chat(message="Testing the chat functionality.", user_id=4, channel_id=1),
            Chat(message="This is for general discussions.", user_id=2, channel_id=3),
        ]

        for chat in chats:
            try:
                chat.create()
                print(f"Record created: {repr(chat)}")
            except IntegrityError:
                db.session.remove()
                print(f"Record exists or error: {chat._message}")
```

**Backup Code**

For the purposes of length, I will only show code relevant to my feature.

```python

# File Location: main.py

def extract_data():
    data = {}
    with app.app_context():
        data['chat'] = [chat.read() for chat in Chat.query.all()]
    return data

def save_data_to_json(data, directory='backup'):
    if not os.path.exists(directory):
        os.makedirs(directory)
    for table, records in data.items():
        with open(os.path.join(directory, f'{table}.json'), 'w') as f:
            json.dump(records, f)
    print(f"Data backed up to {directory} directory.")

def backup_data():
    data = extract_data()
    save_data_to_json(data)
    backup_database(app.config['SQLALCHEMY_DATABASE_URI'], app.config['SQLALCHEMY_BACKUP_URI'])

```
The ```backup_data()``` function is called to backup the data.


**Restore Code**

For the purposes of length, I will only show code relevant to my feature.

```python

# File Location: model/chat.py

@staticmethod
def restore(data):
    """
    Restore chats from a list of dictionaries.
    Args:
        data (list): A list of dictionaries containing chat data.
    Returns:
        dict: A dictionary of restored chats keyed by message ID.
    """
    restored_chats = {}
    for chat_data in data:
        _ = chat_data.pop('id', None)  # Remove 'id' from chat_data if present
        message = chat_data.get("message", None)
        chat = Chat.query.filter_by(_message=message).first()
        if chat:
            chat.update(chat_data)
        else:
            chat = Chat(**chat_data)
            chat.create()
        restored_chats[message] = chat
    return restored_chats
```
```python

# File Location: main.py

def load_data_from_json(directory='backup'):
    data = {}
    for table in ['chat']:
        with open(os.path.join(directory, f'{table}.json'), 'r') as f:
            data[table] = json.load(f)
    return data

# Restore data to the new database
def restore_data(data):
    with app.app_context():
        _ = Chat.restore(data['chat'])
    print("Data restored to the new database.")

@custom_cli.command('restore_data')
def restore_data_command():
    data = load_data_from_json()
    restore_data(data)

```

The restore_data method is used to restore the JSON data back to the actual database, an important part of data management.

---

## CPT Requirement 2: List or Collection Usage
A list (or other collection type) must be used to manage data and simplify program complexity.


### Lists, Dictionaries, Database

**List/Rows**

In the chat application, database queries are executed to retrieve rows of data, representing multiple chat messages or entities. These rows are returned as Python lists. This functionality is done by third party tools such as SQLAlchemy, which allows us to use Python code to manage SQL Databases.

Example:
```python
chats = Chat.query.filter_by(_channel_id=channel_id).all()
```
Explanation:

 - Chat.query: Refers to the SQLAlchemy query interface tied to the Chat model.
 - filter_by(_channel_id=channel_id): Filters chat messages where the channel_id matches the input.
 - all(): Fetches all results as a list of Chat objects.

Result: This query returns a Python list of Chat objects, where each object represents a row in the database.

To convert rows to JSON format to be sent to the frontend, we use the jsonify method to transform it into a dictionary.

```python
return jsonify([chat.read() for chat in chats])
```

**CRUD Class for Columns and Dictionaries**

```python

# File Location: model/chat.py

def create(self):
    """
    Creates a new chat message in the database.

    Returns:
        Chat: The created chat object, or None on error.
    """
    try:
        db.session.add(self)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        logging.warning(f"IntegrityError: Could not create chat with message '{self._message}' due to {str(e)}.")
        return None
    return self

def read(self):
    """
    Retrieves chat message data as a dictionary.

    Returns:
        dict: A dictionary containing the chat message data, including user and channel names.
    """
    user = User.query.get(self._user_id)
    channel = Channel.query.get(self._channel_id)
    return {
        "id": self.id,
        "message": self._message,
        "user_name": user.name if user else None,
        "channel_name": channel.name if channel else None
    }

def update(self, data):
    """
    Updates the chat message object with new data.

    Args:
        data (dict): A dictionary containing the new data for the chat message.

    Returns:
        Chat: The updated chat message object, or None on error.
    """
    if 'message' in data:
        self._message = data['message']

    try:
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        logging.warning(f"IntegrityError: Could not update chat with ID '{self.id}' due to {str(e)}.")
        return None
    return self

def delete(self):
    """
    Deletes the chat message from the database.
    """
    try:
        db.session.delete(self)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        raise e

```

Through these four functions, CRUD funcionality is established. These 4 methods in the model can be called by importing the Chat model itself, and then calling the methods as you wish.

Overall, we can see that CPT Requirement 2 has been met, as both Lists and Dictionaries are used.


---

## CPT Requirement 3: Student Developed Procedure

To be honest, there are TONS of Student Developed Procedures in my project. The most prevelant is definitely CRUD features.


### **C: Create**
#### **Frontend Code: Handling Message Input**
The `sendMessage()` function allows users to type a message and send it to a specific chat channel. It sends a `POST` request to the backend to store the message in the database.

```javascript
async function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    if (message) {
        const postData = { message: message, channel_id: selectedChannelId };
        try {
            const response = await fetch(`${pythonURI}/api/chat`, {
                ...fetchOptions,
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
            if (!response.ok) throw new Error('Failed to add post');
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }
}
```

#### **Backend Code: Storing Messages in the Database**
The backend handles the **Create** operation by storing the message in the database when a `POST` request is received.

```python
@token_required()
def post(self):
    """
    Create a new chat message.
    """
    current_user = g.current_user
    data = request.get_json()

    if not data or 'message' not in data or 'channel_id' not in data:
        return {'message': 'Message and Channel ID are required'}, 400

    chat = Chat(message=data['message'], user_id=current_user.id, channel_id=data['channel_id'])
    chat.create()
    return jsonify(chat.read())
```

---

### **R: Read**
#### **Frontend Code: Fetching Messages**
The `fetchData()` function retrieves messages from a specific chat channel and updates the chat window dynamically.

```javascript
async function fetchData(channelId) {
    try {
        const response = await fetch(`${pythonURI}/api/chat?id=${channelId}`, {
            ...fetchOptions,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch chats: ' + response.statusText);
        }
        const chatData = await response.json();
        console.log(chatData);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
```

#### **Backend Code: Retrieving Messages**
The backend handles the **Read** operation by returning all messages in a specified channel when a `GET` request is received.

```python
@token_required()
def get(self):
    channel_id = request.args.get('id')
    if not channel_id:
        return {'message': 'Channel ID is required'}, 400
    chats = Chat.query.filter_by(_channel_id=channel_id).all()
    return jsonify([chat.read() for chat in chats])
```

---

### **U: Update**
#### **Frontend Code: Editing Messages**
The `editMessage()` function allows users to update an existing message by sending a `PUT` request to the backend.

```javascript
async function editMessage(postId) {
    const messageElement = document.querySelector(`#chat-${postId} .message-content p strong`);
    if (!messageElement) {
        alert("Message not found.");
        return;
    }
    const newComment = prompt("Edit your message:", messageElement.textContent);
    if (newComment) {
        const postData = { id: postId, message: newComment };
        try {
            const response = await fetch(`${pythonURI}/api/chat`, {
                ...fetchOptions,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
            if (!response.ok) throw new Error('Failed to update post');
            messageElement.textContent = newComment;
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }
}
```

#### **Backend Code: Updating Messages**
The backend processes `PUT` requests and updates the message content in the database.

```python
@token_required()
def put(self):
    data = request.get_json()
    if 'id' not in data or 'message' not in data:
        return {'message': 'Chat ID and message are required'}, 400

    chat = Chat.query.get(data['id'])
    if not chat:
        return {'message': 'Chat message not found'}, 404

    chat.update({'message': data['message']})
    return jsonify(chat.read())
```

---

### **D: Delete**
#### **Frontend Code: Deleting Messages**
The `deleteMessage()` function allows users to remove messages by sending a `DELETE` request to the backend.

```javascript
async function deleteMessage(postId) {
    const confirmDelete = confirm("Are you sure you want to delete this message?");
    if (confirmDelete) {
        const postData = { id: postId };
        try {
            const response = await fetch(`${pythonURI}/api/chat`, {
                ...fetchOptions,
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            });
            if (!response.ok) throw new Error('Failed to delete post');
            document.getElementById(`chat-${postId}`).remove();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    }
}
```

#### **Backend Code: Deleting Messages**
The backend handles `DELETE` requests by removing the specified message from the database.

```python
@token_required()
def delete(self):
    data = request.get_json()
    if 'id' not in data:
        return {'message': 'Chat ID is required'}, 400

    chat = Chat.query.get(data['id'])
    if not chat:
        return {'message': 'Chat message not found'}, 404

    chat.delete()
    return {'message': 'Chat message deleted'}, 200
```

Now, going into how it meets the granular CPT Requirements in this overarching Requirement 3, 

### **1. Must have a defined name and return type (if applicable)**  

In the backend, the functions in the API return json output for the function of the API.

#### **Backend**
- `post(self)` → **Defined function** that handles creating a new chat message, returning `jsonify(chat.read())` (a JSON object).  
- `get(self)` → **Defined function** that retrieves chat messages, returning `jsonify([chat.read() for chat in chats])` (a **list of JSON objects**).  
- `put(self)` → **Defined function** that updates a message, returning `jsonify(chat.read())` (updated JSON object).  
- `delete(self)` → **Defined function** that deletes a message, returning `{'message': 'Chat message deleted'}` (confirmation message).  

---

### **2. Must use at least one parameter that affects functionality**  

Each function **accepts parameters** that determine its behavior in the frontend

#### **Frontend**
- `fetchData(channelId)` → Uses `channelId` to fetch messages for a specific chatroom.  
- `editMessage(postId)` → Uses `postId` to determine which message should be edited.  
- `deleteMessage(postId)` → Uses `postId` to delete the correct message.  

Without these parameters, the whole functionality would change as it would prevent any real action from happening, which is why it meets this requirement too.

---

### **3. Must include an algorithm with sequencing, selection, and iteration**  

A more detailed approach is given below. As a more high level approach, the whole CRUD functionality can be considered as the feature. As an example, consider the following:

1. The User interacts with the project by typing a message and clicking send
2. A POST request is made to the backend using RESTful APIs
3. Backend Database is updated, and returns a response
4. Frontend updates UI

For selection, tons of if checks are made not only in the frontend to check for error handling or admin permissions, but also in the backend for the same purposes.

Iteration wise, when the backend returns code, the frontend has to iteratively go through all of them and display them, which uses a for loop.


## CPT Requirement 4: Algorithm Implementation


### **Must include an algorithm with sequencing, selection, and iteration**  

Each function contains **all three components**:

#### **Sequencing (Step-by-step execution)**
Each function **follows a clear order** of execution:
1. **Frontend function is called** when a user interacts (e.g., clicking Send, Edit, Delete, or Select)
2. **Fetch request is made** to the backend (POST, GET, PUT, DELETE)
3. **Backend processes the request**, interacts with the database, and returns a response
4. **Frontend updates the UI** based on the backend’s response

For example, `sendMessage()`:
1. Gets the user input from the text box
2. Sends a `POST` request with the message data
3. Waits for the backend response
4. Updates the UI dynamically

#### **Selection (If-statements, error handling, conditions)**
Each function **uses conditions to handle logic and errors**:
- **Frontend**
  - `if (message)` → Prevents empty messages from being sent  
  - `if (!response.ok)` → Catches API request failures  
- **Backend**
  - `if not data or 'message' not in data` → Ensures required fields exist before storing messages
  - `if not chat:` → Prevents updates/deletions on nonexistent messages

#### **Iteration (Loops, repeated execution)**
Iteration occurs when I have to process multiple chat messages:
- **Frontend**
  - `fetchData()` → Iterates through retrieved messages and dynamically adds them to the UI:
    ```javascript
    chatData.forEach(chatItem => {
        const messageElement = document.createElement('div');
        messageElement.className = 'chat-message';
        messageElement.innerHTML = `<p><strong>${chatItem.message}</strong></p>`;
        chatBox.appendChild(messageElement);
    });
    ```
- **Backend**
  - `get(self)` → Iterates through all messages retrieved from the database:
    ```python
    return jsonify([chat.read() for chat in chats])
    ```
---

## CPT Requirement 5: Program Output

The program must provide tactile, audible, visual, or textual output based on user interaction or data processing.

This can be seen, in a live demo.

The program gives visual output when the user sends, edits, or deletes messages, as these are updated not only in the backend, but also in the frontend in REAL TIME.

Also, when the user generates a new channel with the AI, that channel is also displayed in the dropdown, also showing the visual output.

---

## CPT Requirement 6: Commenting and Acknowledgment

Comments should be used to describe functionality.

My code is well documented through comments throughout the page.
