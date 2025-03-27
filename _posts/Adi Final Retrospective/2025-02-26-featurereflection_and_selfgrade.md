---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /adifeaturereflection
title: Adi's Feature Strengths/Weaknesses + Self Grade
categories: [Adi Final Retrospective]
---

# Features: Strengths, Weaknesses, and Next Steps

## 1. Poll Submission Feature
**Strengths:**
 - Allows users to submit poll responses smoothly and efficiently
 - Integrates well with the backend using pythonuri


**Weaknesses:**

 - The UI is boring
 - The page reloads whenever you press update or delete, causing the site to look clunky


**Next Steps:** 

 - Make good error messages, instead of sending errors to the console
 - Change so that page reload is not needed for update and delete functions
 - Make the UI more interesting with data visualizations (perhaps a bar chart)

## 2. Backend API Integration
**Strengths:**
 - Provides full CRUD operations to manage the DB
 - Uses JWT for security

**Weaknesses:**

 - There is no API documentation
 - Requires a learning curve to figure out how to use it

**Next Steps:**

 - Write API documentation so that people know how to use the APIs
 - Add analytics page in the admin panel for admins to track usage

## 3. Creation of system health API (made recently)

**Strengths:**

 - Works when run locally
 - outputs relevant data in a readable way

**Weaknesses:**

 - Was made very recently
 - May not work on deployed site sometimes

**Next Steps:**

 - Fix the API so that it uses the `htop -n 1` command to get data instead of using the builtin python functions that are likely not working due to AWS security settings.

# Self-Grade Table

| Category                       | Details                                                                                                                        | Self-Grade (Out of 1) |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| **Learning & Skill Growth**    | Learned a lot about API integration, and dynamic UI updates. More importantly, I learned how to avoid "throwing the baby"      | 0.20                  |
| **Commit Analytics**           | Have been steadily committing to the frontend and backend since the beginning, however frontend commits need to be more purpose driven. | 0.21                  |
| **Work Ethic & Collaboration** | Collaborated well and improved soft skills.                             | 0.15                  |
| **Areas for Improvement**      | Need to focus on enhancing UI/UX design & error handling.                                               | 0.14                  |
| **Total**                      | Overall, I learned a lot this tri and truly understood how to make an API instead of blindly copy-pasting from ChatGPT.| **0.90**              |

## Analytics Table

| Frontend Contributions | Backend Contributions   |
| ---------------------- | ----------------------- |
| ![Image](https://github.com/user-attachments/assets/537cff54-e290-419a-a6b7-4b5bc34dc022)                       | ![Image](https://github.com/user-attachments/assets/0348686d-493a-4a0d-8fe2-07c9664fb26d)                        |

## Summary

This feature reflection emphasizes the value of smooth poll submissions, secure backend API handling, and basic system health checks. Despite UI/UX and deployment concerns, focusing on improved documentation, error handling, and visual enhancements will help elevate overall usability in the next development cycle. I also learned a lot this tri, from knowing nothing about a REST API to building a fully functional one in a short amount of time.