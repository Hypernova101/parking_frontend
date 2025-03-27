---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /manasfeatureblog
title: Manas's Project Feature Blog
categories: [Manas Final Retrospective]
---


# **Daily Question FRQ: Key Features & Implementation**

## **1. Full-Stack Implementation**

![Daily Question FRQ Architecture](https://github.com/user-attachments/assets/e4f1c0e7-d83a-4c9f-8b26-8e7a1f6fb0b9)

The **Daily Question FRQ** project is a full-stack web application that integrates the following technologies:

- **Backend:** Flask (Python) for API handling.
- **Frontend:** JavaScript for UI interaction.
- **Database:** SQLite3 with SQLAlchemy for structured data storage.

This project enables users to submit, update, and manage free response questions in an interactive manner.

---

## **2. Backend API (Flask)**

The backend provides a **REST API** using Flask-RESTful and secures requests using **JWT authentication**. It supports **CRUD (Create, Read, Update, Delete)** operations on free response question entries.

### **Endpoints Overview:**

| Method | Endpoint          | Description                       |
|--------|------------------|-----------------------------------|
| POST   | `/api/post`      | Create a new free response entry  |
| GET    | `/api/posts`     | Retrieve all free response entries|
| PUT    | `/api/post`      | Update an existing entry          |
| DELETE | `/api/post`      | Remove an entry from the database |

### **Example API Implementation (Post Method):**

```python
@token_required()
def post(self):
    """
    Add a new free response entry.
    """
    body = request.get_json()

    # Validate required fields
    title = body.get('title')
    comment = body.get('comment')

    if not title or not comment:
        return {'message': 'Title and comment are required'}, 400

    try:
        # Create a new free response entry
        new_entry = FreeResponse(title=title, comment=comment)
        new_entry.create()
        return jsonify({'message': 'Entry added successfully', 'entry': new_entry.read()})
    except Exception as e:
        return {'message': 'Failed to create entry', 'error': str(e)}, 500
```

---

## **3. Database Management (SQLAlchemy)**

The application uses **SQLAlchemy** to define and manage the relational database. Each free response entry consists of:

- `id`: Unique identifier (Primary Key).
- `title`: Title of the free response question.
- `comment`: User's response to the question.

### **Model Definition:**

```python
class FreeResponse(db.Model):
    """
    FreeResponse Model
    
    The FreeResponse class represents a free response question entry.
    
    Attributes:
        id (db.Column): The primary key, an integer representing the unique identifier for the record.
        title (db.Column): A string representing the title of the free response question.
        comment (db.Column): A string representing the user's response.
    """
    __tablename__ = 'free_responses'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    comment = db.Column(db.String(255), nullable=False)

    def __init__(self, title, comment):
        """
        Initializes the Object

        Arguments:
            title (str): The title of the free response question.
            comment (str): The user's response.
        """
        self.title = title
        self.comment = comment
```

### **Database Initialization:**

```python
def initFreeResponses():
    """
    The initFreeResponses function creates the FreeResponses table and adds tester data to the table.
    """
    with app.app_context():
        """Create database and tables"""
        db.create_all()
        """Tester data for table"""
        tester_data = [
            FreeResponse(title='What is the impact of technology on education?', comment='Technology has revolutionized education by providing access to a wealth of information and resources.'),
            FreeResponse(title='How does literature reflect society?', comment='Literature often mirrors societal values and issues, offering insights into cultural norms and human behavior.')
        ]
        
        for data in tester_data:
            try:
                db.session.add(data)
                db.session.commit()
                print(f"Record created: {repr(data)}")
            except Exception as e:
                db.session.rollback()
                print(f"Error creating record for entry {data.title}: {e}")
```

### **Restore Database from Backup:**

```python
@staticmethod
def restore(data):
    """
    Restore free responses from a list of dictionaries, replacing existing entries.

    Args:
        data (list): List of dictionaries containing free response data.
    
    Returns:
        dict: Dictionary of restored FreeResponse objects.
    """
    with app.app_context():
        # Clear the existing table
        db.session.query(FreeResponse).delete()
        db.session.commit()

        restored_entries = {}
        for entry_data in data:
            entry = FreeResponse(
                title=entry_data['title'],
                comment=entry_data['comment']
            )
            entry.create()
            restored_entries[entry_data['id']] = entry
        
        return restored_entries
```

---

## **4. Frontend (JavaScript & HTML)**

The frontend provides a **user-friendly interface** that enables users to interact with the database. It includes:

- **Form Fields:** Inputs for free response question details.
- **Buttons:** Create, Update, Delete, Fetch operations.
- **Dynamic UI Updates:** JavaScript updates the page without reloading.

### **Fetch API Example:**

```javascript
async function fetchFreeResponses() {
    const response = await fetch('/api/posts', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        }
    });
    const data = await response.json();
    document.getElementById('response-display').innerText = JSON.stringify(data, null, 2);
}
```

---

## **5. CPT Requirements & Key Concepts**

This project aligns with **CPT (Create Performance Task) requirements** by demonstrating:

### **CPT Requirements Table**

| CPT Requirement         | Feature Embodying the Requirement | How this feature fulfills the requirement |
|-------------------------|-----------------------------------|------------------------------------------|
| A list                 | Database stores multiple entries | The database stores and retrieves multiple free response entries as list items |
| A procedure            | `initFreeResponses()` function    | Initializes the database with test data, ensuring structured data setup |
| A call to the procedure | `fetchFreeResponses()` function  | Calls API endpoint to fetch data from the backend |
| Selection              | Conditional checks in API routes | Ensures valid data is processed before adding/updating database entries |
| Iteration              | `for` loops in Python & JavaScript | Loops iterate through database entries and frontend responses to process them |

---

## **Conclusion**

The **Daily Question FRQ** project effectively demonstrates full-stack development principles with a focus on **database management, RESTful APIs, and frontend integration**. It also adheres to **CPT guidelines**, making it a strong candidate for submission.