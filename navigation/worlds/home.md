---
layout: post 
title: Worlds
search_exclude: true
permalink: /prism/home
menu: nav/prism.html
---

<!-- Loading Screen -->
<div id="loading-screen" class="fixed inset-0 bg-gray-200 flex items-center justify-center z-50">
    <div class="text-center">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
        <h2 class="text-4xl font-semibold text-gray-900">Loading...</h2>
    </div>
</div>

<style>
    .loader {
        border-top-color: #ff5733;
        animation: spin 1s infinite linear;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background-color: #1a1a1a;
        color: #fff;
    }

    .bg-gradient {
        background: linear-gradient(135deg, #ff5733, #c70039);
    }

    .fade-in {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 1s ease-out, transform 1s ease-out;
    }

    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 10s ease infinite;
    }

    @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    .cta-button {
        background-color: #ff5733;
        color: #fff;
        padding: 15px 30px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s, transform 0.3s;
    }

    .cta-button:hover {
        background-color: #c70039;
        transform: scale(1.1);
    }

    .world-card {
        text-align: center;
        transition: transform 0.3s;
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        margin: 10px;
        color: #333;
    }

    .world-card:hover {
        transform: scale(1.05);
    }

    .testimonials {
        background-color: #333;
        color: #fff;
        padding: 50px 20px;
        text-align: center;
    }

    .testimonial {
        margin-bottom: 20px;
        font-style: italic;
    }

    @keyframes scroll {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50%);
        }
    }

    .animate-scroll {
        animation: scroll 45s linear infinite;
    }
</style>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const loadingScreen = document.getElementById('loading-screen');
        window.addEventListener('load', function() {
            loadingScreen.style.display = 'none';
        });
        window.addEventListener('beforeunload', function() {
            loadingScreen.style.display = 'flex';
        });

        const fadeInElements = document.querySelectorAll('.fade-in');

        const handleScroll = () => {
            fadeInElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                    el.classList.add('visible');
                } else {
                    el.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll);
    });
</script>

<!-- Background Animation -->
<div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
    <div class="bg-gradient-to-r from-gray-900 via-gray-800 to-black w-full h-full opacity-50 animate-gradient"></div>
</div>

<!-- Welcome Section -->
<section id="welcome" class="h-screen flex items-center justify-center text-center bg-gradient text-white">
    <h1 class="text-8xl font-extrabold fade-in">
        Welcome to <span class="text-rose-600">Prism Universe</span>
    </h1>
</section>
