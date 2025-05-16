---
layout: bootstrap
search_exclude: true
show_reading_time: false
permalink: /smartpark/netries
---

<!-- Animate.css -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
<!-- AOS Animation Library -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<style>
  :root {
    --primary: #6C63FF;
    --secondary: #536DFE;
    --accent: #00CFFD;
    --success: #00E676;
    --warning: #FFAB00;
    --danger: #FF5252;
    --dark-bg: #0F172A;
    --card-bg: #1E293B;
    --text-primary: #F8FAFC;
    --text-secondary: #CBD5E1;
    --gradient-primary: linear-gradient(135deg, #6C63FF 0%, #536DFE 100%);
    --gradient-secondary: linear-gradient(135deg, #536DFE 0%, #00CFFD 100%);
    --gradient-accent: linear-gradient(135deg, #00CFFD 0%, #00E676 100%);
  }
  
  body {
    background-color: var(--dark-bg);
    color: var(--text-primary);
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
  }
  
  .navbar {
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  
  .nav-link {
    font-weight: 500;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    position: relative;
  }
  
  .nav-link:hover {
    color: var(--accent);
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: var(--gradient-accent);
    transition: width 0.3s ease;
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  .active-nav {
    color: var(--accent) !important;
  }
  
  .active-nav::after {
    width: 100%;
  }
  
  .btn-primary {
    background: var(--gradient-primary);
    border: none;
    box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
    transition: all 0.3s ease;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(108, 99, 255, 0.5);
  }
  
  .btn-secondary {
    background: var(--gradient-secondary);
    border: none;
    box-shadow: 0 4px 15px rgba(83, 109, 254, 0.3);
    transition: all 0.3s ease;
  }
  
  .btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(83, 109, 254, 0.5);
  }
  
  .card {
    background: var(--card-bg);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    overflow: hidden;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.3);
  }
  
  .glass-card {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(10px);
  }
  
  .lesson-section {
    border-left: 3px solid var(--primary);
    padding-left: 20px;
    margin-bottom: 30px;
  }
  
  .popcorn-hack {
    background: rgba(0, 207, 253, 0.1);
    border-left: 3px solid var(--accent);
    border-radius: 0 8px 8px 0;
    padding: 20px;
    margin: 20px 0;
    transition: all 0.3s ease;
  }
  
  .popcorn-hack:hover {
    background: rgba(0, 207, 253, 0.15);
    box-shadow: 0 5px 15px rgba(0, 207, 253, 0.15);
  }
  
  .form-control {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255,255,255,0.1);
    color: var(--text-primary);
    border-radius: 8px;
    padding: 12px 16px;
    transition: all 0.3s ease;
  }
  
  .form-control:focus {
    background: rgba(15, 23, 42, 0.8);
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(0, 207, 253, 0.25);
  }
  
  .badge {
    padding: 6px 12px;
    border-radius: 50px;
    font-weight: 500;
  }
  
  .badge-primary {
    background: var(--gradient-primary);
  }
  
  .badge-accent {
    background: var(--gradient-accent);
  }
  
  /* Flashcard Styles */
  .flashcard {
    position: relative;
    width: 100%;
    height: 350px;
    perspective: 1500px;
    margin: 20px 0;
  }
  
  .flashcard-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
  }
  
  .flashcard.flipped .flashcard-inner {
    transform: rotateY(180deg);
  }
  
  .flashcard-front, .flashcard-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background: var(--card-bg);
    border-radius: 16px;
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
  
  .flashcard-back {
    transform: rotateY(180deg);
  }
  
  /* Quiz Game Styles */
  .quiz-option {
    background: var(--card-bg);
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
  }
  
  .quiz-option:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
  }
  
  .quiz-option.selected {
    background: rgba(108, 99, 255, 0.2);
    border-color: var(--primary);
  }
  
  .quiz-option.correct {
    background: rgba(0, 230, 118, 0.2);
    border-color: var(--success);
  }
  
  .quiz-option.wrong {
    background: rgba(255, 82, 82, 0.2);
    border-color: var(--danger);
  }
  
  /* Progress bar */
  .progress {
    height: 8px;
    background: rgba(255,255,255,0.1);
    border-radius: 50px;
    overflow: hidden;
  }
  
  .progress-bar {
    background: var(--gradient-primary);
    border-radius: 50px;
  }
  
  /* Custom animations */
  .fade-in-bottom {
    animation: fadeInBottom 0.5s ease forwards;
  }
  
  @keyframes fadeInBottom {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Nav pills for modules */
  .nav-pills .nav-link {
    color: var(--text-secondary);
    border-radius: 50px;
    padding: 10px 24px;
    margin: 0 5px;
    transition: all 0.3s ease;
  }
  
  .nav-pills .nav-link.active {
    background: var(--gradient-primary);
    color: white;
    box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
  }
  
  /* Glow effect for buttons and important elements */
  .glow-effect {
    position: relative;
    z-index: 1;
    overflow: hidden;
  }
  
  .glow-effect::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }
  
  .glow-effect:hover::after {
    opacity: 1;
  }
  
  /* Leaderboard styling */
  .leaderboard-item {
    background: rgba(30, 41, 59, 0.7);
    border-radius: 12px;
    padding: 12px 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
  }
  
  .leaderboard-item:hover {
    transform: translateX(5px);
    background: rgba(30, 41, 59, 0.9);
  }
  
  .leaderboard-rank {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--gradient-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 14px;
    margin-right: 15px;
  }
  
  /* Code snippet style for lessons */
  .code-snippet {
    background: rgba(15, 23, 42, 0.8);
    border-radius: 8px;
    padding: 20px;
    font-family: 'Fira Code', monospace;
    position: relative;
    margin: 20px 0;
  }
  
  .code-snippet pre {
    margin: 0;
    color: #e2e8f0;
  }
  
  .code-language {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 12px;
    color: rgba(255,255,255,0.5);
  }
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px; 
  }
  
  ::-webkit-scrollbar-track {
    background: var(--dark-bg);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary);
  }
  
  /* Logo styles */
  .logo {
    font-weight: 700;
    background: var(--gradient-accent);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 24px;
  }
</style>
<!-- Theme toggle button -->
<button id="theme-toggle" class="btn btn-sm rounded-circle">
  <i class="fas fa-moon"></i>
</button>
<!-- Navigation Bar -->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top py-3">
  <div class="container">
    <a class="navbar-brand logo" href="#">CodeQuest</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active-nav" href="#lesson-module">Lessons</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#flashcard-module">Flashcards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#quiz-module">Quiz Game</a>
        </li>
        <li class="nav-item ms-lg-3">
          <a class="btn btn-primary rounded-pill px-4" href="#"><i class="fas fa-user me-2"></i>My Dashboard</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Hero Section -->
<section id="hero" class="min-vh-100 d-flex align-items-center text-center position-relative overflow-hidden">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <h1 class="fw-bold display-3 mb-4 animate__animated animate__fadeInUp">
          Interactive Learning Platform <span class="d-block text-gradient">for Future Developers</span>
        </h1>
        <p class="lead mb-5 text-secondary animate__animated animate__fadeInUp animate__delay-1s">
          Learn by doing with our interactive lessons, flashcards, and game-based assessments
        </p>
        <div class="d-flex justify-content-center gap-3 animate__animated animate__fadeInUp animate__delay-2s">
          <a href="#lesson-module" class="btn btn-primary btn-lg px-4 py-3 rounded-pill">Start Learning</a>
          <a href="#quiz-module" class="btn btn-outline-light btn-lg px-4 py-3 rounded-pill">Join Quiz Game</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Animated background elements -->
  <div class="position-absolute top-50 start-0 translate-middle-y">
    <svg width="450" height="450" viewBox="0 0 200 200">
      <path fill="#6C63FF" fill-opacity="0.05" d="M45.1,-76.3C59.5,-69.8,72.8,-59.5,81.5,-45.9C90.3,-32.4,94.5,-16.2,94.7,0.1C94.9,16.5,90.9,32.9,82.2,46.3C73.4,59.6,59.8,70,45,76.5C30.2,83,15.1,85.6,-0.3,86.1C-15.8,86.6,-31.5,85,-45,78C-58.5,71,-69.9,58.7,-77.8,44.6C-85.7,30.4,-90.2,15.2,-90.6,-0.2C-91.1,-15.7,-87.4,-31.3,-78.7,-43.5C-70,-55.7,-56.3,-64.3,-42.2,-71.1C-28.1,-78,-14.1,-82.9,0.7,-84.2C15.5,-85.5,30.9,-82.8,45.1,-76.3Z" transform="translate(100 100)" />
    </svg>
  </div>
  <div class="position-absolute bottom-0 end-0">
    <svg width="400" height="400" viewBox="0 0 200 200">
      <path fill="#536DFE" fill-opacity="0.05" d="M38.5,-66.2C50.9,-60.1,62.3,-50.7,70.3,-38.8C78.4,-26.9,83.1,-13.4,83.7,0.3C84.3,14.1,80.8,28.2,72.6,39.2C64.5,50.2,51.8,58.1,38.7,65.9C25.7,73.7,12.8,81.4,-1.1,83.2C-15,85,-30,80.9,-42.6,73.1C-55.2,65.3,-65.3,53.8,-71.6,40.7C-77.9,27.6,-80.3,13.8,-81.6,-0.8C-83,-15.3,-83.3,-30.7,-76.3,-42.2C-69.3,-53.7,-55,-61.4,-41.1,-66.9C-27.3,-72.3,-13.6,-75.5,-0.2,-75.2C13.3,-74.9,26.5,-72.2,38.5,-66.2Z" transform="translate(100 100)" />
    </svg>
  </div>
</section>
<!-- Tab Navigation for Modules -->
<section class="py-5 bg-dark">
  <div class="container">
    <ul class="nav nav-pills justify-content-center mb-5" id="modulesTabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="lessons-tab" data-bs-toggle="pill" data-bs-target="#lesson-module" type="button">
          <i class="fas fa-book-open me-2"></i>Lessons
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="flashcards-tab" data-bs-toggle="pill" data-bs-target="#flashcard-module" type="button">
          <i class="fas fa-layer-group me-2"></i>Flashcards
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="quiz-tab" data-bs-toggle="pill" data-bs-target="#quiz-module" type="button">
          <i class="fas fa-gamepad me-2"></i>Quiz Game
        </button>
      </li>
    </ul>
<div class="tab-content">
  <!-- 1. LESSON MODULE -->
  <div class="tab-pane fade show active" id="lesson-module">
    <div class="row">
      <div class="col-lg-8 mx-auto">
        <div class="card glass-card p-4 mb-5" data-aos="fade-up">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="m-0">Introduction to JavaScript</h2>
            <span class="badge badge-primary">Lesson 3 of 12</span>
          </div>
          
          <!-- Progress bar -->
          <div class="progress mb-4">
            <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          
          <!-- Lesson content -->
          <div class="lesson-content">
            <div class="lesson-section" data-aos="fade-up">
              <h4 class="mb-3">What is JavaScript?</h4>
              <p>JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.</p>
              <p>Originally designed as a scripting language for web browsers, JavaScript now also runs on the server-side with Node.js.</p>
            </div>
            
            <!-- Popcorn Hack 1 -->
            <div class="popcorn-hack" data-aos="fade-up">
              <div class="d-flex align-items-center mb-3">
                <div class="me-3">
                  <span class="badge badge-accent">Popcorn Hack</span>
                </div>
                <h5 class="m-0">Try running JavaScript in the console</h5>
              </div>
              <p>Open your browser's developer tools (F12 or right-click and select "Inspect") and navigate to the Console tab. Try running the following command:</p>
              
              <div class="code-snippet">
                <span class="code-language">javascript</span>
                <pre>console.log("Hello, World!");</pre>
              </div>
              
              <div class="form-group mt-3">
                <label for="popcorn1">What was the output? Type your answer here:</label>
                <input type="text" class="form-control mt-2" id="popcorn1" placeholder="Enter your answer">
              </div>
              <button class="btn btn-secondary mt-3 save-answer" data-target="popcorn1">
                <i class="fas fa-save me-2"></i>Save Answer
              </button>
            </div>
            
            <div class="lesson-section" data-aos="fade-up">
              <h4 class="mb-3">Variables in JavaScript</h4>
              <p>JavaScript has three ways to declare variables:</p>
              <ul>
                <li><code>var</code> - The old way of declaring variables (function-scoped)</li>
                <li><code>let</code> - The modern way to declare variables that can be reassigned (block-scoped)</li>
                <li><code>const</code> - For variables that should not be reassigned (block-scoped)</li>
              </ul>
              
              <div class="code-snippet">
                <span class="code-language">javascript</span>
                <pre>// Using let
let age = 25;
age = 26; // This is valid
// Using const
const PI = 3.14159;
// PI = 3; // This would cause an error</pre>
</div>
</div>
            <!-- Popcorn Hack 2 -->
            <div class="popcorn-hack" data-aos="fade-up">
              <div class="d-flex align-items-center mb-3">
                <div class="me-3">
                  <span class="badge badge-accent">Popcorn Hack</span>
                </div>
                <h5 class="m-0">Variable declaration practice</h5>
              </div>
              <p>Create a variable called <code>myName</code> using <code>const</code> and assign your name to it. Then create a variable called <code>myAge</code> using <code>let</code>.</p>
              
              <div class="form-group mt-3">
                <label for="popcorn2">Write your code here:</label>
                <textarea class="form-control mt-2" id="popcorn2" rows="3" placeholder="const myName = '...';"></textarea>
              </div>
              <button class="btn btn-secondary mt-3 save-answer" data-target="popcorn2">
                <i class="fas fa-save me-2"></i>Save Answer
              </button>
            </div>
            
            <div class="lesson-section" data-aos="fade-up">
              <h4 class="mb-3">Functions in JavaScript</h4>
              <p>Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return outputs.</p>
              
              <div class="code-snippet">
                <span class="code-language">javascript</span>
                <pre>// Function declaration
function greet(name) {
return Hello, ${name}!;
}
// Arrow function (ES6)
const multiply = (a, b) => a * b;</pre>
</div>
</div>
            <!-- Popcorn Hack 3 -->
            <div class="popcorn-hack" data-aos="fade-up">
              <div class="d-flex align-items-center mb-3">
                <div class="me-3">
                  <span class="badge badge-accent">Popcorn Hack</span>
                </div>
                <h5 class="m-0">Create your own function</h5>
              </div>
              <p>Write a function called <code>calculateArea</code> that calculates the area of a rectangle using length and width parameters.</p>
              
              <div class="form-group mt-3">
                <label for="popcorn3">Write your function here:</label>
                <textarea class="form-control mt-2" id="popcorn3" rows="5" placeholder="function calculateArea(length, width) {
// Your code here
}"></textarea>
</div>
<button class="btn btn-secondary mt-3 save-answer" data-target="popcorn3">
<i class="fas fa-save me-2"></i>Save Answer
</button>
</div>
            <!-- Lesson navigation -->
            <div class="d-flex justify-content-between mt-5" data-aos="fade-up">
              <a href="#" class="btn btn-outline-light px-4">
                <i class="fas fa-arrow-left me-2"></i>Previous Lesson
              </a>
              <a href="#" class="btn btn-primary px-4">
                Next Lesson<i class="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 2. FLASHCARD MODULE -->
  <div class="tab-pane fade" id="flashcard-module">
    <div class="row">
      <div class="col-lg-8 mx-auto mb-5">
        <div class="card glass-card p-4" data-aos="fade-up">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h2 class="m-0">JavaScript Fundamentals</h2>
            <div>
              <span class="badge badge-primary me-2">20 Cards</span>
              <button class="btn btn-sm btn-secondary">
                <i class="fas fa-random me-2"></i>Shuffle
              </button>
            </div>
          </div>
          
          <!-- Flashcard deck -->
          <div class="flashcard-deck">
            <div class="flashcard mb-4" id="card1">
              <div class="flashcard-inner">
                <div class="flashcard-front">
                  <div class="position-absolute top-0 end-0 m-3">
                    <span class="badge bg-light text-dark">1/20</span>
                  </div>
                  <h3 class="text-center mb-3">What is a closure in JavaScript?</h3>
                  <div class="text-center mt-4">
                    <button class="btn btn-primary btn-flip" data-target="card1">
                      <i class="fas fa-sync-alt me-2"></i>Flip Card
                    </button>
                  </div>
                </div>
                <div class="flashcard-back">
                  <div class="position-absolute top-0 end-0 m-3">
                    <span class="badge bg-light text-dark">1/20</span>
                  </div>
                  <h4 class="text-center mb-3">Answer:</h4>
                  <p>A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It remembers the environment in which it was created.</p>
                  <div class="code-snippet">
                    <span class="code-language">javascript</span>
                    <pre>function outer() {
const message = 'Hello';
function inner() {
console.log(message);
}
return inner;
}
const myFunc = outer();
myFunc(); // Logs: Hello</pre>
</div>
<div class="text-center mt-3">
<button class="btn btn-primary btn-flip" data-target="card1">
<i class="fas fa-sync-alt me-2"></i>Flip Back
</button>
</div>
</div>
</div>
</div>
            <!-- Flashcard controls -->
            <div class="d-flex justify-content-between mt-3" data-aos="fade-up">
              <button class="btn btn-outline-light px-4">
                <i class="fas fa-chevron-left me-2"></i>Previous
              </button>
              <div>
                <button class="btn btn-success me-2">
                  <i class="fas fa-check me-2"></i>I Know This
                </button>
                <button class="btn btn-warning">
                  <i class="fas fa-redo me-2"></i>Review Again
                </button>
              </div>
              <button class="btn btn-outline-light px-4">
                Next<i class="fas fa-chevron-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Add new flashcard -->
        <div class="card glass-card p-4 mt-4" data-aos="fade-up">
          <h4 class="mb-4">Create New Flashcard</h4>
          <div class="form-group mb-3">
            <label for="cardFront">Front (Question)</label>
            <textarea class="form-control mt-2" id="cardFront" rows="3" placeholder="Enter your question here..."></textarea>
          </div>
          <div class="form-group mb-3">
            <label for="cardBack">Back (Answer)</label>
            <textarea class="form-control mt-2" id="cardBack" rows="5" placeholder="Enter your answer here..."></textarea>
          </div>
          <div class="form-group mb-3">
            <label for="cardCategory">Category</label>
            <select class="form-select mt-2" id="cardCategory">
              <option value="js">JavaScript</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="react">React</option>
            </select>
          </div>
          <button class="btn btn-primary">
            <i class="fas fa-plus me-2"></i>Add Flashcard
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 3. QUIZ MODULE -->
  <div class="tab-pane fade" id="quiz-module">
    <div class="row">
      <!-- Quiz Game Login -->
      <div class="col-lg-6 mx-auto mb-5" id="quiz-login" data-aos="fade-up">
        <div class="card glass-card p-5 text-center">
          <h2 class="mb-4">Join Quiz Game</h2>
          <p class="text-secondary mb-4">Enter your name and the room code to join an in-class quiz game</p>
          
          <div class="form-group mb-4">
            <div class="input-group">
              <span class="input-group-text bg-transparent border-end-0">
                <i class="fas fa-user text-secondary"></i>
              </span>
              <input type="text" class="form-control border-start-0" id="playerName" placeholder="Your Name">
            </div>
          </div>
          
          <div class="form-group mb-5">
            <div class="input-group">
              <span class="input-group-text bg-transparent border-end-0">
                <i class="fas fa-hashtag text-secondary"></i>
              </span>
              <input type="text" class="form-control border-start-0" id="roomCode" placeholder="Room Code">
            </div>
          </div>
          
          <button class="btn btn-primary btn-lg w-100 py-3 mb-3" id="joinQuizBtn">
            <i class="fas fa-play-circle me-2"></i>Join Game
          </button>
          
          <p class="small text-secondary mt-4">
            <i class="fas fa-info-circle me-2"></i>
            Get the room code from your instructor to join the active quiz
          </p>
        </div>
      </div>
      
      <!-- Active Quiz Game (initially hidden) -->
      <div class="col-lg-8 mx-auto mb-5" id="active-quiz" style="display: none;">
        <div class="card glass-card p-4" data-aos="fade-up">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="m-0">JavaScript Basics Quiz</h3>
            <div>
              <span class="badge badge-primary">Question 3/10</span>
            </div>
          </div>
          
          <!-- Timer -->
          <div class="d-flex align-items-center justify-content-center mb-4">
            <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
              <span class="fw-bold fs-3" id="countdown">20</span>
            </div>
          </div>
          
          <!-- Question -->
          <div class="question-container text-center mb-5">
            <h3 class="mb-4">Which of the following is NOT a JavaScript data type?</h3>
          </div>
          
          <!-- Answer options -->
          <div class="answers-container">
            <div class="quiz-option" data-option="A">
              <div class="d-flex align-items-center">
                <div class="option-indicator me-3">A</div>
                <div>Boolean</div>
              </div>
            </div>
            <div class="quiz-option" data-option="B">
              <div class="d-flex align-items-center">
                <div class="option-indicator me-3">B</div>
                <div>String</div>
              </div>
            </div>
            <div class="quiz-option" data-option="C">
              <div class="d-flex align-items-center">
                <div class="option-indicator me-3">C</div>
                <div>Float</div>
              </div>
            </div>
            <div class="quiz-option" data-option="D">
              <div class="d-flex align-items-center">
                <div class="option-indicator me-3">D</div>
                <div>Undefined</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Leaderboard (initially hidden) -->
      <div class="col-lg-6 mx-auto mb-5" id="leaderboard" style="display: none;">
        <div class="card glass-card p-4" data-aos="fade-up">
          <div class="text-center mb-4">
            <h2 class="mb-3">Leaderboard</h2>
            <p class="text-secondary">Top players in this session</p>
          </div>
          
          <div class="leaderboard-container">
            <div class="leaderboard-item">
              <div class="leaderboard-rank">1</div>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold">Sophia Chen</div>
                <div>950 pts</div>
              </div>
            </div>
            <div class="leaderboard-item">
              <div class="leaderboard-rank">2</div>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold">Ethan Davis</div>
                <div>820 pts</div>
              </div>
            </div>
            <div class="leaderboard-item">
              <div class="leaderboard-rank">3</div>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold">Olivia Martinez</div>
                <div>750 pts</div>
              </div>
            </div>
            <div class="leaderboard-item">
              <div class="leaderboard-rank">4</div>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold">Noah Johnson</div>
                <div>720 pts</div>
              </div>
            </div>
            <div class="leaderboard-item">
              <div class="leaderboard-rank">5</div>
              <div class="d-flex justify-content-between align-items-center w-100">
                <div class="fw-bold">Emma Wilson</div>
                <div>690 pts</div>
              </div>
            </div>
          </div>
          
          <div class="mt-4 text-center">
            <button class="btn btn-primary">
              <i class="fas fa-trophy me-2"></i>View Full Results
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</section>
<!-- JavaScript for functionality -->
<script>
  // Initialize AOS animation library
  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    
    // Save Popcorn Hack answers to local storage
    const saveButtons = document.querySelectorAll('.save-answer');
    saveButtons.forEach(button => {
      const targetId = button.getAttribute('data-target');
      const input = document.getElementById(targetId);
      
      // Load saved answer if exists
      if (localStorage.getItem(targetId)) {
        input.value = localStorage.getItem(targetId);
      }
      
      button.addEventListener('click', function() {
        localStorage.setItem(targetId, input.value);
        
        // Show save confirmation
        button.innerHTML = '<i class="fas fa-check me-2"></i>Saved!';
        button.classList.remove('btn-secondary');
        button.classList.add('btn-success');
        
        setTimeout(() => {
          button.innerHTML = '<i class="fas fa-save me-2"></i>Save Answer';
          button.classList.remove('btn-success');
          button.classList.add('btn-secondary');
        }, 2000);
      });
    });
    
    // Flashcard flip functionality
    const flipButtons = document.querySelectorAll('.btn-flip');
    flipButtons.forEach(button => {
      const targetId = button.getAttribute('data-target');
      const card = document.getElementById(targetId);
      
      button.addEventListener('click', function() {
        card.classList.toggle('flipped');
      });
    });
    
    // Quiz game navigation
    const joinQuizBtn = document.getElementById('joinQuizBtn');
    if (joinQuizBtn) {
      joinQuizBtn.addEventListener('click', function() {
        const playerName = document.getElementById('playerName').value;
        const roomCode = document.getElementById('roomCode').value;
        
        if (playerName && roomCode) {
          document.getElementById('quiz-login').style.display = 'none';
          document.getElementById('active-quiz').style.display = 'block';
          
          // Start countdown timer
          let timeLeft = 20;
          const countdownEl = document.getElementById('countdown');
          
          const timer = setInterval(() => {
            timeLeft--;
            countdownEl.textContent = timeLeft;
            
            if (timeLeft <= 5) {
              countdownEl.classList.add('text-danger');
            }
            
            if (timeLeft <= 0) {
              clearInterval(timer);
              // Show leaderboard after timer ends
              document.getElementById('active-quiz').style.display = 'none';
              document.getElementById('leaderboard').style.display = 'block';
            }
          }, 1000);
        }
      });
    }
    
    // Quiz option selection
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Remove selected class from all options
        quizOptions.forEach(opt => opt.classList.remove('selected'));
        // Add selected class to clicked option
        this.classList.add('selected');
        
        // For demo purposes, mark option C as correct after a short delay
        setTimeout(() => {
          quizOptions.forEach(opt => {
            if (opt.getAttribute('data-option') === 'C') {
              opt.classList.add('correct');
            } else if (opt.classList.contains('selected') && opt.getAttribute('data-option') !== 'C') {
              opt.classList.add('wrong');
            }
            
            // Disable all options
            opt.style.pointerEvents = 'none';
          });
        }, 1000);
      });
    });
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  });
</script>
<!-- Additional style for text gradient effect -->
<style>
  .text-gradient {
    background: linear-gradient(90deg, var(--accent) 0%, var(--primary) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  
  /* Option indicator for quiz */
  .option-indicator {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }