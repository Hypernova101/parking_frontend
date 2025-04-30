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


<div class="container">
  <div class="text-center mt-5">
    <div class="btn-group toggle-switch" role="group" aria-label="Filter toggle">
      <button type="button" class="btn btn-outline-primary active" data-filter="cheapest">Cheapest</button>
      <button type="button" class="btn btn-outline-primary" data-filter="least-busy">Least Busy</button>
    </div>
  </div>
  <div class="pricing-container">
    <!-- Cheapest Meters -->
    <!-- Cheapest Meters -->
    <div class="pricing-card cheapest">
      <h4>P-2916</h4>
      <p>Avg Rate:</p>
      <p class="price">$0.8852 / min</p>
      <button class="btn">More Info</button>
    </div>

    <div class="pricing-card cheapest">
      <h4>P-2912</h4>
      <p>Avg Rate:</p>
      <p class="price">$0.946 / min</p>
      <button class="btn">More Info</button>
    </div>

    <div class="pricing-card cheapest">
      <h4>P-2914</h4>
      <p>Avg Rate:</p>
      <p class="price">$1.0231 / min</p>
      <button class="btn">More Info</button>
    </div>

    <div class="pricing-card cheapest">
      <h4>P-2918</h4>
      <p>Avg Rate:</p>
      <p class="price">$1.0417 / min</p>
      <button class="btn">More Info</button>
    </div>


    <!-- Least Busy Meters -->
    <div class="pricing-card least-busy">
      <h4>4-1424</h4>
      <p>Fewest Valid Transactions</p>
      <p class="price">Least Busy Meter</p>
      <button class="btn">More Info</button>
    </div>

    <div class="pricing-card least-busy">
      <h4>P-2920</h4>
      <p>Fewest Valid Transactions</p>
      <p class="price">Least Busy Meter</p>
      <button class="btn">More Info</button>
    </div>

    <div class="pricing-card least-busy">
      <h4>9-1302</h4>
      <p>Fewest Valid Transactions</p>
      <p class="price">Least Busy Meter</p>
      <button class="btn">More Info</button>
    </div>

    <div class="pricing-card least-busy">
      <h4>BE-710</h4>
      <p>Fewest Valid Transactions</p>
      <p class="price">Least Busy Meter</p>
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

<script>
  const toggleButtons = document.querySelectorAll('.toggle-switch button');
  const cards = document.querySelectorAll('.pricing-card');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Animate and filter cards
      cards.forEach((card, index) => {
        const shouldShow = card.classList.contains(filter);
        card.style.display = shouldShow ? 'block' : 'none';
        card.classList.remove('animate__fadeInLeft', 'animate__fadeInRight');

        if (shouldShow) {
          const direction = index % 2 === 0 ? 'Left' : 'Right';
          card.classList.add(`animate__animated`, `animate__fadeIn${direction}`);
        }
      });
    });
  });

  // Show only 'cheapest' on load
  window.addEventListener('DOMContentLoaded', () => {
    cards.forEach((card, index) => {
      const isCheapest = card.classList.contains('cheapest');
      card.style.display = isCheapest ? 'block' : 'none';
      const direction = index % 2 === 0 ? 'Left' : 'Right';
      if (isCheapest) {
        card.classList.add(`animate__animated`, `animate__fadeIn${direction}`);
      }
    });
  });
</script>

