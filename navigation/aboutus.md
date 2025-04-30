---
layout: bootstrap
search_exclude: true
show_reading_time: false
permalink: /smartpark/ourteam
---

<!-- Stylesheets -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>


<section class="container py-5">
  <!-- About Section -->
  <div class="text-center mb-5" data-aos="fade-down">
    <h1 class="display-4 fw-bold">About SmartParkSD</h1>
    <p class="lead">"Find, Park, Go" – Making parking smarter, faster, and easier in San Diego.</p>
  </div>

  <div class="row align-items-center g-5">
    <div class="col-md-6" data-aos="fade-right">
      <h2 class="h4 mb-3">Our Mission</h2>
      <p>SmartParkSD helps drivers find available parking by predicting meter availability using real city data and machine learning. No more circling blocks—just input your destination and time, and get real-time predictions and cost estimates.</p>
      
  <h2 class="h4 mt-5 mb-3">Why SmartParkSD?</h2>
    <ul class="list-unstyled">
        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Uses real San Diego meter transaction data</li>
        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Reduces wasted time, traffic, and emissions</li>
        <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Combines machine learning, mapping, and user-friendly design</li>
      </ul>
    </div>

  <div class="col-md-6 text-center" data-aos="fade-left">
      <img src="https://raw.githubusercontent.com/Hypernova101/parking_backend/refs/heads/main/images/figma.png" alt="App Preview" class="img-fluid rounded shadow-lg hover-zoom" style="max-height: 400px;">
    </div>
  </div>

 <!-- Features Section - UPDATED -->
  <div class="row mt-5">
    <div class="col text-center" data-aos="fade-up">
      <h2 class="display-5 fw-bold mb-4">Explore SmartParkSD Features</h2>
      <p class="lead">Discover how each page of our app helps you park faster, smarter, and more affordably in San Diego.</p>
    </div>
  </div>

<!-- Features Section -->
<div class="row g-4">
  <!-- Meter Availability -->
  <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
    <div class="card card-expand border-0 shadow-sm rounded-4 p-4 h-100 bg-light hover-shadow">
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-geo-alt-fill text-primary fs-3 me-3"></i>
        <h5 class="mb-0 fw-bold text-dark">Meter Availability</h5>
      </div>
      <p class="text-muted mb-0">
        Use the main search page to input your route and see predicted open parking meters nearby using real-time city data.
      </p>
      <div class="usage-info text-muted small">
        <hr>
        <strong>How to Use:</strong>
        <ul class="ps-3 mb-2">
          <li>📍 Enter your destination.</li>
          <li>🕒 Choose your arrival time.</li>
          <li>📊 View nearby open meters.</li>
        </ul>
        <a href="https://hypernova101.github.io/parking_frontend/map/" class="text-primary text-decoration-none fw-semibold" target="_blank">
          → Go to Meter Map
          <a href="https://hypernova101.github.io/parking_frontend/availability" class="d-block mt-2 text-primary text-decoration-none fw-semibold" target="_blank">
  <i class="bi bi-journal-text me-1"></i> Learn more about the Design of Availability Page
</a>

        </a>
      </div>
    </div>
  </div>

  <!-- Graph Insights -->
  <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
    <div class="card card-expand border-0 shadow-sm rounded-4 p-4 h-100 bg-light hover-shadow">
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-graph-up text-success fs-3 me-3"></i>
        <h5 class="mb-0 fw-bold text-dark">Graph Insights</h5>
      </div>
      <p class="text-muted mb-0">
        View charts that show how meter usage and availability trends change by day and hour, helping you choose low-traffic times.
      </p>
      <div class="usage-info text-muted small">
        <hr>
        <strong>How to Use:</strong>
        <ul class="ps-3 mb-2">
          <li>📈 Choose a day/time range.</li>
          <li>📊 See heatmaps and trends.</li>
          <li>🧠 Plan ahead for easy parking.</li>
        </ul>
        <a href="https://hypernova101.github.io/parking_frontend/smartpark/history" class="text-success text-decoration-none fw-semibold" target="_blank">
          → View Graph Insights
          <a href="https://hypernova101.github.io/parking_frontend/graphs" class="d-block mt-2 text-success text-decoration-none fw-semibold" target="_blank">
  <i class="bi bi-journal-text me-1"></i> Learn more about the Design of Graph Trends Page
</a>

        </a>
      </div>
    </div>
  </div>

  <!-- Price & Rate Estimates -->
  <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
    <div class="card card-expand border-0 shadow-sm rounded-4 p-4 h-100 bg-light hover-shadow">
      <div class="d-flex align-items-center mb-3">
        <i class="bi bi-currency-dollar text-warning fs-3 me-3"></i>
        <h5 class="mb-0 fw-bold text-dark">Price & Rate Estimates</h5>
      </div>
      <p class="text-muted mb-0">
        See expected pricing and compare meter rates across time and zones to pick cost-effective parking options ahead of time.
      </p>
      <div class="usage-info text-muted small">
        <hr>
        <strong>How to Use:</strong>
        <ul class="ps-3 mb-2">
          <li>💰 Enter location and time range.</li>
          <li>🔍 Compare nearby rates.</li>
          <li>📅 Choose affordable options.</li>
        </ul>
        <a href="https://hypernova101.github.io/parking_frontend/smartpark/pricing" class="text-warning text-decoration-none fw-semibold" target="_blank">
          → Estimate Pricing
          <a href="https://hypernova101.github.io/parking_frontend/pricing" class="d-block mt-2 text-warning text-decoration-none fw-semibold" target="_blank">
  <i class="bi bi-journal-text me-1"></i> Learn more about Pricing & Rates
</a>

        </a>
      </div>
    </div>
  </div>
</div>




 <!-- Meet the Team Section -->
<div class="row mt-5 text-center">
  <div class="col-12">
    <h2 class="display-4 fw-bold mb-4" style="font-size: 2.5rem;">Meet the Team</h2>
  </div>
</div>

<div class="row g-4 justify-content-center">
  <!-- Mihir -->
  <div class="col-10 col-sm-6 col-md-4 col-lg-3">
    <div class="card shadow-sm border-0 rounded-4 h-100 text-center p-4 bg-white hover-shadow">
      <div class="card-body">
        <h5 class="fw-bold mb-2 text-dark">Mihir</h5>
        <p class="text-muted small mb-0">Scrum Master 🧑‍💻</p>
      </div>
    </div>
  </div>

  <!-- Shawn -->
  <div class="col-10 col-sm-6 col-md-4 col-lg-3">
    <div class="card shadow-sm border-0 rounded-4 h-100 text-center p-4 bg-white hover-shadow">
      <div class="card-body">
        <h5 class="fw-bold mb-2 text-dark">Shawn</h5>
        <p class="text-muted small mb-0">Backend Engineer 🖥️</p>
      </div>
    </div>
  </div>

  <!-- Kiruthic -->
  <div class="col-10 col-sm-6 col-md-4 col-lg-3">
    <div class="card shadow-sm border-0 rounded-4 h-100 text-center p-4 bg-white hover-shadow">
      <div class="card-body">
        <h5 class="fw-bold mb-2 text-dark">Kiruthic</h5>
        <p class="text-muted small mb-0">ML Engineer 🤖</p>
      </div>
    </div>
  </div>

  <!-- Xavier -->
  <div class="col-10 col-sm-6 col-md-4 col-lg-3">
    <div class="card shadow-sm border-0 rounded-4 h-100 text-center p-4 bg-white hover-shadow">
      <div class="card-body">
        <h5 class="fw-bold mb-2 text-dark">Xavier</h5>
        <p class="text-muted small mb-0">Assistant Scrum Master 💼</p>
      </div>
    </div>
  </div>

  <!-- Spencer -->
  <div class="col-10 col-sm-6 col-md-4 col-lg-3">
    <div class="card shadow-sm border-0 rounded-4 h-100 text-center p-4 bg-white hover-shadow">
      <div class="card-body">
        <h5 class="fw-bold mb-2 text-dark">Spencer</h5>
        <p class="text-muted small mb-0">Frontend Developer 🎨</p>
      </div>
    </div>
  </div>
</div>
</section>

<!-- Hover Zoom CSS -->
<style>
  #meet-the-team-section h2 {
  font-size: 2.5rem;
  font-weight: bold;
}

/* Enhance the card style */
.card {
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}


.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

/* Ensure spacing and style for team roles */
.card-body p {
  font-size: 1rem;
  color: #555;
  font-weight: 500;
}

/* Larger cards on desktop */
@media (min-width: 992px) {
  .card {
    width: 280px;
    height: 320px;
  }
}

.hover-zoom {
  transition: transform 0.3s ease;
}
.hover-zoom:hover {
  transform: scale(1.05);
}

.hover-shadow {
  transition: box-shadow 0.3s ease;
}
.hover-shadow:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Hover dropdown style */
.dropdown:hover .dropdown-menu {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Start hidden + animated */
.dropdown-menu {
  display: block;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

/* Enable pointer events when hovered */
.dropdown:hover .dropdown-menu {
  pointer-events: auto;
}

.card-expand {
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  height: 220px; /* initial collapsed height */
}

.card-expand .usage-info {
  opacity: 0;
  max-height: 0;
  transition: all 0.4s ease;
  overflow: hidden;
}

.card-expand:hover {
  height: 360px; /* expanded height */
}

.card-expand:hover .usage-info {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  max-height: 1000px;
}

.usage-info {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
  pointer-events: none;
  max-height: 0;
  overflow: hidden;
}

.hover-shadow:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-body h5 {
  font-size: 1.25rem;
}

.card-body p {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .card-body h5 {
    font-size: 1.1rem;
  }
}

/* Ensure that Meet the Team section is fully visible */
#meet-the-team-section {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

/* Ensure cards are fully visible */
.card-body {
  visibility: visible !important;
  opacity: 1 !important;
}

</style>

<!-- Scripts -->

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
  });
</script>