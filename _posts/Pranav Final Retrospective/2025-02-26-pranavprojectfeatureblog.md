---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /pranavfeatureblog
title: Pranav's Project Feature Blog
categories: [Pranav Final Retrospective]
---

# **Code Palette: Key Features & Implementation**

## **1. Full-Stack Implementation**

![Code Palette Architecture](https://github.com/user-attachments/assets/8651ea1e-9677-4009-afc5-244a61643384)

The **Code Palette** project is a full-stack web application that integrates the following technologies:

- **Backend:** Flask (Python) for API handling.
- **Frontend:** JavaScript for UI interaction.
- **Database:** SQLite3 with SQLAlchemy for structured data storage.

This project enables users to store, update, and manage a database of programming languages in an interactive manner.

---

## **2. Backend API (Flask)**

The backend provides a **REST API** using Flask-RESTful and secures requests using **JWT authentication**. It supports **CRUD (Create, Read, Update, Delete)** operations on code palette entries.

### **Endpoints Overview:**

| Method | Endpoint          | Description                       |
|--------|------------------|-----------------------------------|
| POST   | `/api/language`  | Create a new code palette entry  |
| GET    | `/api/language`  | Retrieve all code palettes       |
| PUT    | `/api/language`  | Update an existing entry         |
| DELETE | `/api/language`  | Remove an entry from the database |

### **Example API Implementation (Post Method):**

```python
@token_required()
        def post(self):
            """
            Add a new language entry.
            """
            body = request.get_json()

            # Validate required fields
            name = body.get('name')
            creator = body.get('creator')
            popularity = body.get('popularity', 0)  # Default popularity is 0

            if not name or not creator:
                return {'message': 'Name and creator are required'}, 400

            try:
                # Create a new language entry
                new_language = Language(name=name, creator=creator, popularity=popularity)
                new_language.create()
                return jsonify({'message': 'Language added successfully', 'language': new_language.read()})
            except Exception as e:
                return {'message': 'Failed to create language', 'error': str(e)}, 500
```

---

## **3. Database Management (SQLAlchemy)**

The application uses **SQLAlchemy** to define and manage the relational database. Each code palette entry consists of:

- `id`: Unique identifier (Primary Key).
- `name`: Name of the programming language.
- `creator`: Creator of the programming language.
- `popularity`: Popularity score (integer).

### **Model Definition:**

```python
class Language(db.Model):
    """
    Language Model
    
    The Language class represents a programming language.
    
    Attributes:
        id (db.Column): The primary key, an integer representing the unique identifier for the record.
        name (db.Column): A string representing the name of the programming language.
        creator (db.Column): A string representing the creator of the programming language.
        popularity (db.Column): An integer representing the popularity score of the programming language.
    """
    __tablename__ = 'languages'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    creator = db.Column(db.String(255), nullable=False)
    popularity = db.Column(db.Integer, default=0)  # New attribute with default value 0

    def __init__(self, name, creator, popularity=0):
        """
        Intializes the Object

        Arguements:
            name (str): The name of the programming language.
            creator (str): The creator of the programming language.
            popularity (int): The initial popularity score (default is 0).
        """
        self.name = name
        self.creator = creator
        self.popularity = popularity
```

### **Database Initialization:**

```python
def initLanguages():
    """
    The initLanguages function creates the Languages table and adds tester data to the table.
    """
    with app.app_context():
        """Create database and tables"""
        db.create_all()
        """Tester data for table"""
        tester_data = [
            Language(name='Python', creator='Guido van Rossum', popularity=500),
            Language(name='JavaScript', creator='Brendan Eich', popularity=400),
            Language(name='Java', creator='James Gosling', popularity=300)
        ]
        
        for data in tester_data:
            try:
                db.session.add(data)
                db.session.commit()
                print(f"Record created: {repr(data)}")
            except Exception as e:
                db.session.rollback()
                print(f"Error creating record for language {data.name}: {e}")
```

### **Restore Database from Backup:**

```python
    @staticmethod
    def restore(data):
        """
        Restore languages from a list of dictionaries, replacing existing entries.

        Args:
            data (list): List of dictionaries containing language data.
        
        Returns:
            dict: Dictionary of restored Language objects.
        """
        with app.app_context():
            # Clear the existing table
            db.session.query(Language).delete()
            db.session.commit()

            restored_classes = {}
            for language_data in data:
                language = Language(
                    name=language_data['name'],
                    creator=language_data['creator'],
                    popularity=language_data.get('popularity', 0)
                )
                language.create()
                restored_classes[language_data['id']] = language
            
            return restored_classes
```

---

## **4. Frontend (JavaScript & HTML)**

The frontend provides a **user-friendly interface** that enables users to interact with the database. It includes:

- **Form Fields:** Inputs for programming language details.
- **Buttons:** Create, Update, Delete, Fetch operations.
- **Dynamic UI Updates:** JavaScript updates the page without reloading.

### **Fetch API Example:**

```javascript
async function fetchLanguages() {
    const response = await fetch('/api/language', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        }
    });
    const data = await response.json();
    document.getElementById('language-display').innerText = JSON.stringify(data, null, 2);
}
```

---

## **5. CPT Requirements & Key Concepts**

This project aligns with **CPT (Create Performance Task) requirements** by demonstrating:

### **CPT Requirements Table**

| CPT Requirement         | Feature Embodying the Requirement | How this feature fulfills the requirement |
|-------------------------|-----------------------------------|------------------------------------------|
| A list                 | Database stores multiple entries | The database stores and retrieves multiple programming languages as list items |
| A procedure            | `initLanguages()` function    | Initializes the database with test data, ensuring structured data setup |
| A call to the procedure | `fetchLanguages()` function      | Calls API endpoint to fetch data from the backend |
| Selection              | Conditional checks in API routes | Ensures valid data is processed before adding/updating database entries |
| Iteration              | `for` loops in Python & JavaScript | Loops iterate through database entries and frontend responses to process them |

---

## **Conclusion**

The **Code Palette** project effectively demonstrates full-stack development principles with a focus on **database management, RESTful APIs, and frontend integration**. It also adheres to **CPT guidelines**, making it a strong candidate for submission.

| Category                          | Points | Description                                                                                                                                                       | Self Grade |
| --------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **Full Stack Project Demo**       | 2      | Demonstrate the project, highlight CPT requirements, and incorporate N@tM feedback. | 2          |
| **Project Feature Blog Write-up** | 1      | Use CPT/FRQ language to write a structured blog post on project features.                                                                                        | 0.92       |