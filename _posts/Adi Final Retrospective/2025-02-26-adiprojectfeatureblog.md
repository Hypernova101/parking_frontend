---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /adifeatureblog
title: Adi's Project Feature Blog
categories: [Adi Final Retrospective]
---

# The Prism Polls Feature

### What is the point of prism polls?
Prism polls allow users to engage with their community and learn about other people in their network and how they responded to certain polls.

## Frontend:
![frontpic](https://github.com/user-attachments/assets/76953752-57e7-4335-80fd-f40894848e3b)

This dedicated page for the polls feature has functionality to perform all for crud operations **only on the user you're logged in as** (for example, if you are logged in as hop you can't edit toby's posts). As you submit your poll questions, the prompt will automatically shift thru each of the questions (ex. what is your fav book? or what is your fav movie genre?). When you submit a response to the poll, it will automatically save the question as well as the response. And finally, you can edit and delete posts you have made and what you had written persists.

Code snippet of sending POST request from the frontend:
![Image](https://github.com/user-attachments/assets/3f3e567d-2bf5-45da-8389-c4d13c8729ee)

## Backend:

The backend contains a REST API and it uses a Flask as a web framework. It secures requests using a JWT token, and it supports each of the CRUD operations.

## Using postman to show raw API request and RESTful response

Create:
<img src="https://adik1025.github.io/adi_student/images/add.png">
Read:
<img src="https://adik1025.github.io/adi_student/images/read.png">
Update:
<img src="https://adik1025.github.io/adi_student/images/update.png">
Delete:
<img src="https://adik1025.github.io/adi_student/images/delete.png">

## Code snippet of GET and DELETE methods:

![Image](https://github.com/user-attachments/assets/705da168-24a0-4d2a-9984-e6e194d3cd58)

## DB Restore & Backup functions:

![Image](https://github.com/user-attachments/assets/8c872c68-2373-418d-b1d0-efd1ee9b1f03)
![Image](https://github.com/user-attachments/assets/ecbe4afc-5448-4363-9268-6b5643ad8470)