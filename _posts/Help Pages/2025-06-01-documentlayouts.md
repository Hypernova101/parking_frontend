---
layout: post 
show_reading_time: false
permalink: /layoutdocument
title: Layouts
categories: [Help Pages]
---

# Full Documentation: Interactive Lesson Platform

## Overview
This platform provides a modular, interactive web environment where teachers can create digital lessons enhanced by features such as flashcards, polls, videos, games, whiteboards, AI comprehension tools, and more. Teachers and students interact with different pages, each offering educational tools suited to different learning goals.

All content modules are injected into a layout called `cover.html`, which serves as the modular template shell. Teachers can decide which content widgets (e.g., flashcards, polls, games) to include on each lesson page by adjusting the YAML frontmatter and layout structure.

---

## Layout Architecture

### `layouts/lesson.html`
This is the base layout that defines the structure and design of a lesson. It is a wrapper template used by all lesson pages.

### `cover.html` (Navigation Shell)
`cover.html` is where the real lesson content and interactive tools are embedded using includes. It acts as the navigation-level HTML file that determines which modules are included for a specific lesson.

### Relationship Between Layouts
In any lesson markdown file (e.g., `revolution.md`), you specify:
```yaml
---
layout: cover
---
```
This will apply the `cover.html` file under `_layouts`, which internally uses `lesson.html` for the full layout rendering.

### How It Works:
- Every lesson page (e.g., flashcards.html, game.html) uses `layout: cover` in its frontmatter.
- This layout file includes modular blocks like:
  ```html
  {% if page.flashcards %}
    {% include flashcards.html %}
  {% endif %}
  ```
- If the frontmatter contains `flashcards: true`, the `flashcards.html` component is injected.

---

## How to Include or Exclude a Feature (Example)
To show flashcards and polls, but hide the game and AI module:
```yaml
---
layout: cover
title: Biology Review Lesson
flashcards: true
poll: true
game: false
ai: false
---
```
The `cover.html` layout will dynamically inject only the enabled modules.

---

## File Structure and Locations

| File | Description |
|------|-------------|
| `_layouts/lesson.html` | Base layout wrapper |
| `_layouts/cover.html` | Modular layout that composes lesson content and includes features |
| `_includes/flashcards.html` | Flashcard feature markup |
| `_includes/flashcard-notes.html` | Linked note-taking UI for flashcards |
| `_includes/game.html` | Multiplayer game feature |
| `_includes/hack.html` | Hack prompts interface |
| `_includes/poll.html` | Feedback poll module |
| `_includes/video.html` | Embedded YouTube video player |
| `_includes/ai_comprehension.html` | Gemini-based comprehension chatbot |
| `_includes/whiteboard.html` | Collaborative drawing board |
| `_includes/slim_sidebar.html` | Sidebar with dictionary, highlight, notes, and TTS |
| `_data/flashcards/<topic>.yml` | YAML source for flashcard content |
| `assets/js/` | JavaScript for local storage, AI, highlights, sockets, etc. |

---

## flashcards.html

Displays a teacher-created flashcard set for students to review and track their progress.

### YAML Setup in Lesson Markdown
```yaml
---
layout: cover
title: Civil War Review
flashcards: true
---
```

### Flashcard Content File (YAML)
Place a YAML file under `_data/flashcards/`:
File: `_data/flashcards/civil_war.yml`
```yaml
- front: "What year did the Civil War start?"
  back: "1861"
- front: "Who was president during the Civil War?"
  back: "Abraham Lincoln"
```

### How It Works
- Students click to flip each card.
- A progress bar shows how many they've reviewed.
- State is saved in localStorage.
- You can link flashcard-notes for personalized student notes.

---

## flashcard-notes.html
Linked to flashcards. Students can take notes as they study.

### Features:
- Inline notes per flashcard.
- Notes persist with localStorage.
- Download/export option available.

---

## game.html
Multiplayer game with leaderboard using Socket.IO

### YAML
```yaml
---
game: true
---
```

### Features
- Real-time buzzer game
- Socket-based connection to room
- Questions rendered per round
- Scores tracked in browser or server

---

## hack.html
Prompts students to submit creative solutions to open-ended challenges.

### YAML
```yaml
---
hack: true
---
```

### Features:
- Teacher enters prompt in YAML
- Students type and submit their ideas
- Responses stored in localStorage or backend

---

## poll.html
Allows teachers to gather feedback on the lesson.

### YAML
```yaml
---
poll: true
---
```

### Features:
- Emoji and rating selection
- Optional text feedback
- View class statistics if admin

---

## video.html
Embed YouTube videos for interactive viewing.

### YAML Example
```yaml
---
video: true
video_url: https://www.youtube.com/watch?v=abc123
---
```

### Features
- Lightbox pop-up
- Timestamp bookmarks (if supported)

---

## ai_comprehension.html
Chatbot powered by Gemini AI for follow-up comprehension questions

### YAML
```yaml
---
ai: true
---
```

### Features:
- Gemini answers based on context
- Students can rephrase questions
- Local logging for review

---

## whiteboard.html
Real-time collaborative sketchboard

### YAML
```yaml
---
whiteboard: true
---
```

### Features:
- Pencil tool
- Eraser
- Save image locally
- Room code for collaboration

---

## slim_sidebar.html
Universal sidebar that appears on all lesson pages

### Features:
- Dictionary lookup: Students enter any word to get definitions (via API or internal lookup)
- Highlight: Select text and assign highlight color (stored via localStorage)
- Note maker: Click on content to attach a sticky note that stays saved
- Read aloud: Text-to-speech feature that reads the current section aloud

### File: `_includes/slim_sidebar.html`
Included in all cover-based pages like so:
```html
{% include slim_sidebar.html %}
```

### Technical Details
- JavaScript files located in `assets/js/sidebar.js`, `highlight.js`, `tts.js`, and `notes.js`
- All tools use localStorage to persist student-specific state

---

## Example YAML for Full Lesson Page
```yaml
---
layout: cover
title: "The French Revolution"
flashcards: true
video: true
video_url: https://www.youtube.com/watch?v=xyz987
game: true
poll: true
ai: true
hack: true
whiteboard: false
---
```

This example enables all tools except whiteboard.

---

## Conclusion
This interactive lesson platform enables educators to mix and match features by adjusting simple YAML flags. The modular design in `cover.html` allows every tool to be optional and flexible. `lesson.html` handles overall layout structure, while `cover.html` defines specific module composition. Whether teachers want just flashcards and a video or a full suite of interactive tools, they can configure it all in one place.

Let me know if you want a sample template repository or a live exportable build.
