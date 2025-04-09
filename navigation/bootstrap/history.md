---
layout: bootstrap
search_exclude: true
show_reading_time: false
permalink: /smartpark/history
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<section id="hero" class="min-vh-100 d-flex align-items-center text-center">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-uppercase text-white fw-semibold display-1 animate__animated" id="hero-title">
          Parking History
        </h1>
        <h5 class="text-white mt-3 mb-4 animate__animated" id="hero-subtitle">
          Analyze historical trends to plan better routes and times.
        </h5>
      </div>
    </div>
  </div>
</section>

<style>
  body {
    background: #0d1b2a;
    color: white;
  }
  .chart-container {
    max-width: 700px;
    margin: 40px auto;
    background: #1b263b;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
  }
</style>

<div class="chart-container animate__animated animate__fadeInUp">
  <h3 class="text-center">⏰ Occupancy Over Time – Meter 001</h3>
  <canvas id="meter001"></canvas>
</div>

<div class="chart-container animate__animated animate__fadeInUp animate__delay-1s">
  <h3 class="text-center">⏰ Occupancy Over Time – Meter 002</h3>
  <canvas id="meter002"></canvas>
</div>

<script>
  const options = {
    type: 'line',
    options: {
      responsive: true,
      scales: {
        y: {
          title: { display: true, text: 'Occupancy (%)' },
          min: 0,
          max: 100
        },
        x: {
          title: { display: true, text: 'Hour of Day' }
        }
      },
      animation: {
        duration: 1500,
        easing: 'easeOutBounce'
      }
    }
  };

  new Chart(document.getElementById('meter001'), {
    ...options,
    data: {
      labels: ['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM'],
      datasets: [{
        label: 'Occupancy (%)',
        data: [20, 40, 60, 80, 90, 75, 50, 30],
        borderColor: '#00b4d8',
        backgroundColor: 'rgba(0, 180, 216, 0.2)',
        fill: true,
        tension: 0.3
      }]
    }
  });

  new Chart(document.getElementById('meter002'), {
    ...options,
    data: {
      labels: ['8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM'],
      datasets: [{
        label: 'Occupancy (%)',
        data: [10, 25, 50, 70, 85, 90, 60, 40],
        borderColor: '#f77f00',
        backgroundColor: 'rgba(247, 127, 0, 0.2)',
        fill: true,
        tension: 0.3
      }]
    }
  });
</script>
