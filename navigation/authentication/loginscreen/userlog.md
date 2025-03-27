---
layout: post
permalink: /userlog
search_exclude: true
show_reading_time: false
---

<div class="cutscene-container">
    <div class="cutscene">
        <!-- Welcome message animation -->
        <div class="welcome-message">
            <h1 id="welcome-text"></h1>
        </div>
        <!-- Additional animation elements -->
        <div class="animation-elements">
            <div class="circle"></div>
            <div class="triangle"></div>
            <div class="square"></div>
        </div>
    </div>
</div>

<script>
    // Typing animation for the welcome message
    const text = "Welcome to Prism";
    let index = 0;
    const speed = 50; 

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("welcome-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    // Redirect to index.md after the cutscene plays
    setTimeout(() => {
        window.location.href = "{{site.baseurl}}/index";
    }, 3000); // Adjust the timeout duration to match the length of your cutscene
</script>

<style>
    body, html {
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100%;
        width: 100%;
        background-color: #000;
        color: #fff;
    }

    .cutscene-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background-color: #000;
        border: 5px solid red;
        box-shadow: 0 0 10px black;
    }

    .cutscene {
        width: 100%;
        height: 100%;
        position: relative;
        }

        .welcome-message {
        position: absolute;
        top: 10%;
        width: 100%;
        text-align: center;
        font-size: 3rem;
        color: #fff;
        animation: fadeIn 1s ease-in-out;
        }

        .animation-elements {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        gap: 20px;
        }

        .circle, .triangle, .square {
        width: 50px;
        height: 50px;
        background-color: red;
        animation: rotate 2s linear infinite;
        }

        .circle {
        border-radius: 50%;
        }

        .triangle {
        width: 50px;
        height: 43.3px; /* Adjust height to maintain equilateral proportions */
        background-color: red;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transform-origin: 50% 50%;
        }

        .square {
        width: 50px;
        height: 50px;
        }

        @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        }

        @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }

