---
layout: post 
search_exclude: true
show_reading_time: false
permalink: /prism/mcqpage
---

<header class="heading">
    <h1>Daily Multiple Choice Questions</h1>
    <p>Enjoy! We have plenty of topics to choose from!</p>
</header>

<div class="container">
    <!-- Dynamic Question Header -->
    <h2 id="dynamic-question">Choose a topic to begin.</h2>

    <!-- Dropdown Menu for Topics -->
    <div class="dropdown">
        <button class="dropdown-button">Pick a Topic</button>
        <div class="dropdown-content">
            <a href="#" class="topic-link">Technology</a>
            <a href="#" class="topic-link">Health</a>
            <a href="#" class="topic-link">Environment</a>
            <a href="#" class="topic-link">ComputerScience</a>
            <a href="#" class="topic-link">History</a>
            <a href="#" class="topic-link">Science</a>
            <a href="#" class="topic-link">Literature</a>
        </div>
    </div>

    <!-- Quiz Container -->
    <div id="quiz-container"></div>
</div>

<footer class="copyright">
    <p>© 2023 Prism. All rights reserved.</p>
</footer>

<script>
document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const questionHeader = document.getElementById("dynamic-question");
    const topicLinks = document.querySelectorAll(".topic-link");
    let score = 0;
    let timer;

const topics = {
    Technology: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Management Language"], correctAnswer: 0 },
        { question: "What is the function of RAM in a computer?", options: ["Permanent storage", "Temporary storage", "Data transfer"], correctAnswer: 1 },
        { question: "Which programming language is used for Android development?", options: ["Swift", "Java", "Python"], correctAnswer: 1 },
        { question: "What is 1 GB equal to?", options: ["1024 MB", "1000 MB", "512 MB"], correctAnswer: 0 },
        { question: "Which company created the iPhone?", options: ["Samsung", "Apple", "Microsoft"], correctAnswer: 1 },
        { question: "What does CPU stand for?", options: ["Central Processing Unit", "Central Power Unit", "Computer Processing Unit"], correctAnswer: 0 },
        { question: "What is the shortcut key for copying on Windows?", options: ["Ctrl + X", "Ctrl + C", "Ctrl + V"], correctAnswer: 1 },
        { question: "What does Wi-Fi stand for?", options: ["Wireless Fidelity", "Wired Functionality", "Wide Fiber"], correctAnswer: 0 },
        { question: "Which of these is an input device?", options: ["Printer", "Monitor", "Keyboard"], correctAnswer: 2 },
        { question: "Which is a popular search engine?", options: ["Google", "Windows", "Linux"], correctAnswer: 0 },
    ],
    Health: [
        { question: "What is the recommended daily water intake?", options: ["1 liter", "2-3 liters", "5 liters"], correctAnswer: 1 },
        { question: "Which vitamin is essential for strong bones?", options: ["Vitamin A", "Vitamin D", "Vitamin C"], correctAnswer: 1 },
        { question: "What is the most common blood type?", options: ["A", "B", "O"], correctAnswer: 2 },
        { question: "What is the human body's largest organ?", options: ["Heart", "Liver", "Skin"], correctAnswer: 2 },
        { question: "What should you do for 30 minutes daily to stay healthy?", options: ["Exercise", "Sleep", "Eat snacks"], correctAnswer: 0 },
        { question: "What is the normal human body temperature?", options: ["36-37°C", "38-39°C", "34-35°C"], correctAnswer: 0 },
        { question: "What is an effective way to reduce stress?", options: ["Meditation", "Skipping meals", "Overthinking"], correctAnswer: 0 },
        { question: "What is the primary benefit of eating fruits?", options: ["High sugar content", "Source of vitamins", "Weight gain"], correctAnswer: 1 },
        { question: "Which nutrient helps build muscle?", options: ["Fat", "Protein", "Carbohydrate"], correctAnswer: 1 },
        { question: "What is a common symptom of dehydration?", options: ["Dry mouth", "High energy", "Clear skin"], correctAnswer: 0 },
    ],
    Environment: [
        { question: "What gas do plants produce during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen"], correctAnswer: 1 },
        { question: "What is a renewable energy source?", options: ["Coal", "Solar", "Oil"], correctAnswer: 1 },
        { question: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Pacific"], correctAnswer: 2 },
        { question: "Which is a greenhouse gas?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], correctAnswer: 1 },
        { question: "What do we call the cutting down of trees?", options: ["Afforestation", "Deforestation", "Cultivation"], correctAnswer: 1 },
        { question: "What is the color of the recycling symbol?", options: ["Red", "Blue", "Green"], correctAnswer: 2 },
        { question: "What material is biodegradable?", options: ["Plastic", "Glass", "Paper"], correctAnswer: 2 },
        { question: "Which layer of Earth contains the ozone?", options: ["Stratosphere", "Troposphere", "Mesosphere"], correctAnswer: 0 },
        { question: "What can you do to save water?", options: ["Leave taps open", "Fix leaks", "Use water freely"], correctAnswer: 1 },
        { question: "What type of energy comes from wind?", options: ["Thermal", "Nuclear", "Wind energy"], correctAnswer: 2 },
    ],
    ComputerScience: [
        { question: "What does CPU stand for?", options: ["Central Processing Unit", "Central Programming Unit", "Control Processing Unit"], correctAnswer: 0 },
        { question: "Which language is primarily used for web development?", options: ["Python", "JavaScript", "C++"], correctAnswer: 1 },
        { question: "What is the primary purpose of RAM in a computer?", options: ["Storage of data permanently", "Processing instructions", "Temporary data storage"], correctAnswer: 2 },
        { question: "Which data structure uses LIFO (Last In, First Out)?", options: ["Queue", "Stack", "Array"], correctAnswer: 1 },
        { question: "What does HTML stand for?", options: ["HyperText Markup Language", "High Transfer Machine Language", "HyperText Machine Language"], correctAnswer: 0 },
        { question: "Which protocol is used for transferring files over the Internet?", options: ["FTP", "HTTP", "SMTP"], correctAnswer: 0 },
        { question: "What is an example of an input device?", options: ["Monitor", "Keyboard", "Printer"], correctAnswer: 1 },
        { question: "Which part of a computer is considered its brain?", options: ["Hard Drive", "CPU", "RAM"], correctAnswer: 1 },
        { question: "Which is a widely used Operating System?", options: ["Linux", "C++", "MySQL"], correctAnswer: 0 },
        { question: "What is binary code primarily made of?", options: ["0s and 1s", "A to Z", "Numbers and Symbols"], correctAnswer: 0 },
    ],
    History: [
        { question: "Who was the first president of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"], correctAnswer: 1 },
        { question: "What year did World War II end?", options: ["1945", "1939", "1918"], correctAnswer: 0 },
        { question: "Which civilization built the pyramids?", options: ["Roman", "Greek", "Egyptian"], correctAnswer: 2 },
        { question: "Who was known as the 'Maid of Orléans'?", options: ["Joan of Arc", "Marie Antoinette", "Elizabeth I"], correctAnswer: 0 },
        { question: "What was the name of the ship on which the Pilgrims traveled to America?", options: ["Mayflower", "Santa Maria", "Beagle"], correctAnswer: 0 },
        { question: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Roman", "Byzantine"], correctAnswer: 1 },
        { question: "Who discovered America?", options: ["Christopher Columbus", "Leif Erikson", "James Cook"], correctAnswer: 0 },
        { question: "What was the name of the war between the North and South in the U.S.?", options: ["Civil War", "World War I", "Revolutionary War"], correctAnswer: 0 },
        { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso"], correctAnswer: 1 },
        { question: "What year did the Berlin Wall fall?", options: ["1989", "1975", "1991"], correctAnswer: 0 },
    ],
};


    function startTimer(duration, callback) {
        let timeRemaining = duration;
        const timerDisplay = document.createElement("div");
        timerDisplay.id = "timer";
        timerDisplay.textContent = `Time left: ${timeRemaining}s`;
        quizContainer.appendChild(timerDisplay);

        timer = setInterval(() => {
            timeRemaining--;
            timerDisplay.textContent = `Time left: ${timeRemaining}s`;
            if (timeRemaining <= 0) {
                clearInterval(timer);
                callback();
            }
        }, 1000);
    }

    function createQuiz(questions) {
        quizContainer.innerHTML = '';
        quizContainer.style.display = "block";
        const selectedQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
        score = 0;

        selectedQuestions.forEach((q, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.className = "question";

            questionDiv.innerHTML = `
                <div class="question-box">
                    <p>${index + 1}. ${q.question}</p>
                    ${q.options
                        .map((option, i) => `<label><input type="radio" name="question-${index}" value="${i}" /> ${option}</label>`)
                        .join("<br>")}
                </div>
            `;
            quizContainer.appendChild(questionDiv);
        });

        const submitButton = document.createElement("button");
        submitButton.textContent = "Submit Quiz";
        submitButton.classList.add("submit-button");
        submitButton.addEventListener("click", () => {
            selectedQuestions.forEach((q, index) => {
                const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
                if (selectedOption && parseInt(selectedOption.value) === q.correctAnswer) {
                    score++;
                }
            });
            alert(`Quiz Complete! Your score: ${score}/${selectedQuestions.length}`);
            resetContainers();
        });
        quizContainer.appendChild(submitButton);

        startTimer(60, () => resetContainers()); // 60 seconds timer for each quiz
    }

    function resetContainers() {
        quizContainer.innerHTML = '';
        quizContainer.style.display = "none";
        clearInterval(timer);
    }

    topicLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const topicName = event.target.textContent.trim();
            if (topics[topicName]) {
                questionHeader.textContent = `Quiz on: ${topicName}`;
                createQuiz(topics[topicName]);
            }
        });
    });
});
</script>

<style>
    body {
        margin: 0;
        font-family: 'Arial', sans-serif;
        background-color: #1a1a1a;
        color: #f4f4f4;
    }

    header.heading {
        background-color: #e74c3c;
        text-align: center;
        padding: 40px 0;
    }

    header h1 {
        font-size: 40px;
        margin-bottom: 10px;
    }

    header p {
        font-size: 24px;
    }

    .container {
        padding: 20px;
        max-width: 800px;
        margin: auto;
    }

    .dropdown {
        position: relative;
        display: inline-block;
        margin-bottom: 30px;
    }

    .dropdown-button {
        background-color: #e74c3c;
        color: white;
        padding: 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 18px;
        width: 100%;
        text-align: center;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #34495e;
        min-width: 160px;
        z-index: 1;
        border-radius: 5px;
    }

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown-content a {
        color: #f4f4f4;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {
        background-color: #e74c3c;
    }

    #quiz-container {
        display: none;
    }

    .question-box {
        background-color: #2c3e50;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    }

    .submit-button {
        background-color: #e74c3c;
        color: white;
        padding: 15px 25px;
        font-size: 18px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        display: block;
        margin: auto;
    }

    .submit-button:hover {
        background-color: #c0392b;
    }

    footer {
        background-color: #34495e;
        text-align: center;
        padding: 20px;
        font-size: 14px;
        color: #f4f4f4;
    }
</style>
