---
layout: bootstrap
search_exclude: true
show_reading_time: false
permalink: /smartpark/home
---

<link rel="stylesheet" href="{{site.baseurl}}/assets/home/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

<style>
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
</style>

<section id="hero">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 hero-content">
                <h1 class="text-uppercase text-white fw-semibold display-1 animate__animated" id="hero-title">
                Welcome to SmartPark
                </h1>
                <h5 class="text-white mt-3 mb-4 animate__animated" id="hero-subtitle">
                Find. Park. Go.
                </h5>
                <div id="hero-buttons" class="animate__animated">
                    <a href="/parking_frontend/map/" class="btn btn-brand me-2">Route Planner</a>
                    <a href="/parking_frontend/titanic/" class="btn btn-light ms-2">Titanic Predictor</a>
                </div>
            </div>
        </div>
    </div>
</section>

<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script src="{{site.baseurl}}/assets/home/js/main.js"></script>