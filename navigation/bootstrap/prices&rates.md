---
layout: bootstrap
search_exclude: true
show_reading_time: false
permalink: /smartpark/pricing
---

<section id="hero" class="min-vh-100 d-flex align-items-center text-center">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-uppercase text-white fw-semibold display-3 animate__animated" id="hero-title">
          Parking Meter Pricing
        </h1>
        <h5 class="text-white mt-3 mb-4 animate__animated" id="hero-subtitle">
          Discover the best rates for parking meters around the city.
        </h5>
      </div>
    </div>
  </div>
</section>

<style>
  body {
    background: #f4f7fb;
    color: #333;
    font-family: 'Roboto', sans-serif;
    position: relative; /* Required for scrollspy */
    overflow-y: auto; /* Enable vertical scrolling */
    height: 100%; /* Ensure body takes full viewport height */
    margin: 0; /* Remove default body margins */
  }

  html {
    scroll-behavior: smooth; /* Enable smooth scrolling */
  }

  #hero {
    background: linear-gradient(135deg, #004e92, #00c6ff);
    padding: 100px 0;
  }

  #hero h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  #hero h5 {
    font-size: 1.25rem;
  }

  .pricing-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;
    padding-bottom: 80px; /* Add some padding at the bottom for better scroll visibility */
  }

  .pricing-card {
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 300px;
    padding: 30px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .pricing-card h4 {
    font-size: 2rem;
    font-weight: bold;
    color: #004e92;
    margin-bottom: 20px;
  }

  .pricing-card p {
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  .pricing-card .price {
    font-size: 1.75rem;
    font-weight: bold;
    color: #ff5733;
    margin-bottom: 25px;
  }

  .pricing-card .btn {
    background-color: #00c6ff;
    color: white;
    padding: 12px 25px;
    font-size: 1.1rem;
    border-radius: 30px;
    transition: background-color 0.3s ease;
  }

  .pricing-card .btn:hover {
    background-color: #004e92;
  }

  .container {
    max-width: 1200px;
  }

  /* Optional: Navigation for Scrollspy */
  #scrollspy-nav {
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    z-index: 1000;
  }

  #scrollspy-nav a {
    display: block;
    color: #555;
    padding: 8px 15px;
    margin-bottom: 5px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.9rem;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  #scrollspy-nav a:hover,
  #scrollspy-nav a.active {
    background-color: #00c6ff;
    color: white;
  }
</style>

<nav id="scrollspy-nav" class="d-none d-md-block">
  <a href="#hero">Hero</a>
  <a href="#meter-001">Meter 001</a>
  <a href="#meter-002">Meter 002</a>
  <a href="#meter-003">Meter 003</a>
  <a href="#meter-004">Meter 004</a>
</nav>

<div class="container">
  <div class="pricing-container">
    <div id="meter-001" class="pricing-card">
      <h4>Meter 001</h4>
      <p>Location: Downtown</p>
      <p class="price">$1.00 / hour</p>
      <button class="btn">More Info</button>
    </div>

    <div id="meter-002" class="pricing-card">
      <h4>Meter 002</h4>
      <p>Location: Central Park</p>
      <p class="price">$0.75 / hour</p>
      <button class="btn">More Info</button>
    </div>

    <div id="meter-003" class="pricing-card">
      <h4>Meter 003</h4>
      <p>Location: City Square</p>
      <p class="price">$1.25 / hour</p>
      <button class="btn">More Info</button>
    </div>

    <div id="meter-004" class="pricing-card">
      <h4>Meter 004</h4>
      <p>Location: Riverside</p>
      <p class="price">$0.50 / hour</p>
      <button class="btn">More Info</button>
    </div>
  </div>
</div>

<script>
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#scrollspy-nav',
    offset: 100 // Adjust offset as needed
  });

  // Add IDs to the pricing cards for Scrollspy to target
  document.querySelectorAll('.pricing-card').forEach((card, index) => {
    card.id = `meter-00${index + 1}`;
  });

  // Ensure the navigation links also point to these IDs
  document.querySelectorAll('#scrollspy-nav a').forEach((link, index) => {
    link.href = `#meter-00${index + 1}`;
  });
</script>