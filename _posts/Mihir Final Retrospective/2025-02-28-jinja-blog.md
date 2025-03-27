---
layout: post 
search_exclude: false
show_reading_time: false
permalink: /mihir/jinja-blog
title: Transforming an API into a MVC API and Creating a Jinja Page
author: Mihir B
categories: [1Documentation]
---

**Transforming an API into a MVC API and Creating a Jinja Page**

### Introduction
APIs are the backbone of modern web applications, allowing communication between the frontend and backend services. When working with Flask-based applications, you will need to modify an API to fit different authentication mechanisms, such as moving from JWT-based authentication to Flask-Login (MVC API).

In this blog, we will explore how to transform a RESTful API into a MVC API and integrate it into a Jinja-powered server side webpage.

---

### Step 1: Understanding the Initial API
The initial API uses **JWT-based authentication** and is structured as follows for a chat message:

- **`POST /api/chat`**: Creates a chat message.
- **`GET /api/chat`**: Retrieves all chat messages for a given channel ID.
- **`PUT /api/chat`**: Updates an existing chat message.
- **`DELETE /api/chat`**: Deletes a chat message by ID.

#### Key Features:
1. **JWT Authentication**: Uses `@token_required()` for secured access.
2. **Channel-based Filtering**: Retrieves chat messages based on `channel_id`.
3. **RESTful CRUD Operations**: Implements create, read, update, and delete functionalities.

```python
from flask import Blueprint, request, jsonify, g
from flask_restful import Api, Resource
from api.jwt_authorize import token_required
from model.chat import Chat

chat_api = Blueprint('chat_api', __name__, url_prefix='/api')
api = Api(chat_api)

class ChatAPI:
    class _CRUD(Resource):
        @token_required()
        def post(self):
            current_user = g.current_user
            data = request.get_json()
            
            if not data or 'message' not in data or 'channel_id' not in data:
                return {'message': 'Message and Channel ID are required'}, 400
            
            chat = Chat(message=data['message'], user_id=current_user.id, channel_id=data['channel_id'])
            chat.create()
            return jsonify(chat.read())
```

### Step 2: Transforming the API into a MVC API
**MVC APIs** typically use **Flask-Login** for user authentication instead of JWT. The key differences include:

| Feature        | JWT API               | MVC API           |
|---------------|---------------------|-----------------|
| Authentication | `@token_required()` | `@login_required` |
| Session Mgmt  | Stateless JWT        | Flask session-based |
| Data Access   | Requires token in headers | Uses `g.current_user` |

To convert the API:
1. **Replace JWT authentication (`@token_required()`) with `@login_required`**.
2. **Use Flask-Login’s session-based authentication**.
3. **Modify request handling to support logged-in users properly**.

Updated API using Flask-Login:

```python
from flask import Blueprint, request, jsonify, g
from flask_restful import Api, Resource
from flask_login import login_required
from model.chat import Chat

chat_MVC_api = Blueprint('chat_MVC_api', __name__, url_prefix='/api')
api = Api(chat_MVC_api)

class ChatAPI:
    class _CRUD(Resource):
        @login_required
        def post(self):
            current_user = g.current_user
            data = request.get_json()
            
            if not data or 'message' not in data or 'channel_id' not in data:
                return {'message': 'Message and Channel ID are required'}, 400
            
            chat = Chat(message=data['message'], user_id=current_user.id, channel_id=data['channel_id'])
            chat.create()
            return jsonify(chat.read())
```

By making these changes, we session-based authentication is integrated instead of using Flask-Login while maintaining the core functionality.

---

### Step 3: Key Features of Jinja for Dynamic Web Pages
Jinja is a powerful templating engine used in Flask to dynamically render HTML content. Here are some key features:

- **Template Inheritance**:
  - Define a base template and extend it in other templates.

- **Variables**:
  - Pass data from Flask to Jinja and use `{ variable }` to display it.

- **Loops**:
  - Iterate over lists with `{ for item in items } {{ item }} { endfor }`.

- **Conditionals**:
  - Use `{ if condition } ... { elif condition2 } ... { else } ... { endif }` for logic.

- **Filters**:
  - Modify output using filters like `{{ name | upper }}` (uppercase) or `{{ list | length }}` (length of list).

- **Includes**:
  - Reuse components using `{ include "navbar.html" }`.

- **Forms and CSRF Protection**:
  - Use `{ form.hidden_tag() }` to include security tokens in forms.

---

### Conclusion
Transforming a RESTful API into a MVC API requires modifications in **authentication**, **session handling**, and **data retrieval MVChods**. By integrating Jinja, we can dynamically render data while maintaining a structured, reusable frontend.

By following this guide, you can:
- Convert an API from **JWT-based** authentication to **Flask-Login-based** authentication.
- Utilize session-based authentication for better security.
- Use Jinja for **dynamic rendering**, **loops**, **conditionals**, and **template inheritance**.

This transformation enhances both **security** and **usability**, ensuring an interactive and well-authenticated chat management system.

