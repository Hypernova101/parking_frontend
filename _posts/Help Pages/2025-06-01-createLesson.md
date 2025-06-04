---
layout: post 
show_reading_time: false
permalink: /lessoncreation
title: How to Create a Lesson
---

# How to Build a Coding Lesson with Layouts

This guide walks you through how to design, build, and deploy an interactive coding lesson using `lesson.html` and `cover.html`. These layout templates are part of a modular system that makes it easy for teachers to assemble consistent, polished, and engaging lessons. The system supports multimedia, code execution, student input, live feedback, and collaborative tools.

---

## 📁 Step 1: Understand the Purpose of Each File

### 🧩 `lesson.html` (Base Layout)

This is the **core layout** used by all coding lessons. It defines the structure and style and includes embedded functionality such as localStorage, animations, and in-browser code execution. Think of this as the underlying skeleton.

> ✅ You **do not** need to modify this file. It automatically wraps your lesson content.

**Key Features Included:**

* Stylish code formatting and dark theme styling
* Popcorn Hack support for both JavaScript and Python
* Feedback poll integration for student input
* Smooth section animations
* Automatic saving of responses via local storage

### 🧪 `cover.html` (Lesson Template)

This file demonstrates how to use the `lesson.html` base layout and inject lesson-specific content. It contains the content area, lesson instructions, and references to interactive components.

At the top is a YAML frontmatter block that sets the lesson metadata:

```yaml
layout: lesson
title: Introduction to Functions
video_url: https://youtube.com/yourvideo
hack_prompt: Write a function that adds two numbers.
permalink: /functions
```

You’ll customize this file every time you create a new lesson.

---

## 🛠️ Step 2: Create a New Lesson File

1. **Duplicate `cover.html`**
   Rename it based on your lesson topic: `loops.html`, `arrays.html`, etc.

2. **Edit the Frontmatter**
   Update:

   * `title`: Displayed at the top of the lesson
   * `video_url`: YouTube video to support the topic
   * `hack_prompt`: Coding challenge or discussion question
   * `permalink`: The URL path for the lesson

3. **Write Your Lesson Content**
   Inside `<div id="lesson-content">`, add your instructions, code snippets, visuals, and explanations.

```html
<div id="lesson-content">
  <h2>What is a Loop?</h2>
  <p>Loops let you run the same block of code multiple times.</p>
  <pre><code>for (let i = 0; i < 5; i++) {
  console.log(i);
}</code></pre>
</div>
```

---

<img src="{{site.baseurl}}/images/featureflowchart.jpeg">

## 🧩 Step 3: Add Interactive Components

Pick the features that fit your lesson. All components are modular and easy to include:

| Feature              | Include Syntax                  | Description                                              |
| -------------------- | ------------------------------- | -------------------------------------------------------- |
| 📺 Video Player      | `include video.html`            | Shows a YouTube video defined in frontmatter             |
| ✍️ Whiteboard Viewer | `include whiteboard.html`       | Lets students see a live whiteboard via board code       |
| 🤖 AI Quiz Tool      | `include ai_comprehension.html` | Students can generate practice questions using AI        |
| 💻 Code Prompt       | `include hack.html`             | Lets students type, run, and save code responses         |
| 🃏 Flashcards        | `include flashcards.html`       | Pulls cards from YAML, allows flipping, review, tracking |
| 📝 Student Notes     | `include flashcard-notes.html`  | Students build and review their own flashcards           |
| 🎮 Quiz Game         | `include game.html`             | Multiplayer quiz game with leaderboard and timers        |
| 👍 Poll              | `include poll.html`             | Students rate the lesson and add comments                |
| 🧠 Sidebar           | `include slim_sidebar.html`     | Tools: dictionary, notes, read-aloud, highlights         |

These features enhance engagement and memory retention.

---

## 🔍 Step 4: Check and Deploy

1. ✅ **Verify Includes Exist**
   If you added `include game.html`, make sure that file exists in your project.

2. 🧪 **Test the Page**
   Open the file in a local preview environment. Interact with every component:

   * Click through flashcards
   * Enter and run code
   * Submit the poll
   * Try the AI comprehension checker

3. 🚀 **Deploy It**
   Once everything works, publish it to your lesson site or LMS.

---

## 👩‍🏫 Best Practices for Teachers

* **Keep Each Lesson Focused:** Target one concept per lesson (e.g., “while loops” or “if statements”).
* **Use Visuals Early:** Embed videos or show a whiteboard before diving into code.
* **Prompt Reflection:** Include polls, notes, or AI questions to get students thinking.
* **Encourage Review:** Use flashcards at the end to reinforce terminology.
* **Save Time with Reusables:** Once you build a tool like `whiteboard.html`, you can reuse it in all lessons.

---

## ✅ Summary Checklist

Here’s a quick reference when building a new lesson:

* [ ] Duplicate `cover.html`
* [ ] Fill in frontmatter (title, video, prompt, permalink)
* [ ] Add content inside `lesson-content`
* [ ] Choose and insert interactive components
* [ ] Confirm `include` files exist
* [ ] Preview and test locally
* [ ] Deploy when everything is working

With this layout system, you can build high-quality, interactive lessons that are modular, student-friendly, and easy to maintain. Whether you're teaching loops, functions, or arrays, these templates give you a powerful way to bring your content to life.


---

## 🔮 Future Vision

This layout system is already modular and easy to deploy, but it can evolve into a full-fledged interactive learning platform with deeper integration of backend and analytics.

### Goals for Expansion

**1. User Accounts**
- Add student and teacher login via a Flask backend
- Use sessions or JWT for secure access control

**2. Data Storage & Progress Tracking**
- Migrate all localStorage-based components (code input, flashcards, highlights, quiz answers) to a database (PostgreSQL or MongoDB)
- Track individual student progress, AI quiz performance, and code history

**3. Gamification**
- Teachers can award tokens, badges, or achievements stored in a user profile
- Completion of tasks like flashcards or code prompts could unlock new content or feedback

**4. Teacher Dashboard**
- View all student progress in one place
- Set deadlines, unlock features per student/class
- Review code submissions, flashcards created, and quiz attempts

**5. Shared Libraries**
- Enable students to share flashcard decks
- Create a gallery of teacher-curated lessons with import options

### Long-Term Vision

By layering backend support and real-time analytics on top of the existing modular system, this framework could become a lightweight LMS that is:
- Interactive and student-friendly
- Data-rich for teachers
- Easy to maintain and extend for developers
