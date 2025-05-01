---
layout: bootstrap
search_exclude: true
show_reading_time: false
permalink: /smartpark/pricing
---
<section id="hero" class="py-5 d-flex align-items-center text-center">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-uppercase text-white fw-semibold display-4 animate__animated animate__fadeInDown" id="hero-title">
          Parking Meter Pricing
        </h1>
        <h5 class="text-white mt-3 mb-4 animate__animated animate__fadeInUp" id="hero-subtitle">
          Discover the best rates for parking meters around the city.
        </h5>
        <div class="animate__animated animate__fadeIn animate__delay-1s">
          <a href="#pricing" class="btn btn-light btn-lg rounded-pill px-4 shadow-sm">
            <i class="bi bi-arrow-down"></i> View Options
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<style>
  body {
    background: #f8faff;
    color: #333;
    font-family: 'Poppins', sans-serif;
    position: relative;
    overflow-y: auto;
    height: 100%;
    margin: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  #hero {
    background: linear-gradient(135deg, #3a6186, #89253e);
    height: 60vh;
    max-height: 500px;
    position: relative;
    overflow: hidden;
  }
  #hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIj48L3JlY3Q+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIj48L3JlY3Q+PC9zdmc+');
    opacity: 0.6;
    z-index: 0;
  }
  #hero .container {
    position: relative;
    z-index: 1;
  }
  #hero h1 {
    font-weight: 700;
    text-shadow: 0px 2px 4px rgba(0,0,0,0.3);
  }
  #hero h5 {
    font-weight: 300;
    text-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  }
  #pricing {
    padding: 80px 0;
    position: relative;
    background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
  }
  .section-title {
    position: relative;
    margin-bottom: 50px;
    text-align: center;
  }
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #3a6186, #89253e);
    transform: translateX(-50%);
    border-radius: 10px;
  }
  .toggle-switch {
    background: white;
    padding: 5px;
    border-radius: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 40px;
  }
  .toggle-switch .btn {
    border-radius: 30px;
    padding: 10px 25px;
    font-weight: 500;
    transition: all 0.3s ease;
    border: none;
  }
  .toggle-switch .btn.active {
    background: linear-gradient(135deg, #3a6186, #89253e);
    color: white;
    box-shadow: 0 5px 15px rgba(138, 37, 62, 0.3);
  }
  .toggle-switch .btn:not(.active) {
    color: #666;
  }
  .pricing-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    perspective: 1000px;
  }
  .pricing-card {
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    width: 280px;
    height: 350px;
    padding: 40px 25px;
    text-align: center;
    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
  }
  .pricing-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(90deg, #3a6186, #89253e);
  }
  .pricing-card:hover {
    transform: translateY(-15px) rotateY(5deg);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
  .pricing-card h4 {
    font-size: 2.2rem;
    font-weight: 700;
    background: linear-gradient(135deg, #3a6186, #89253e);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 20px;
  }
  .pricing-card p {
    font-size: 1.1rem;
    margin-bottom: 8px;
    color: #666;
  }
  .pricing-card .price {
    font-size: 1.8rem;
    font-weight: 700;
    color: #333;
    margin: 25px 0;
  }
  .pricing-card .btn {
    background: linear-gradient(135deg, #3a6186, #89253e);
    color: white;
    padding: 12px 28px;
    font-size: 1rem;
    border-radius: 30px;
    transition: all 0.3s ease;
    border: none;
    box-shadow: 0 5px 15px rgba(138, 37, 62, 0.2);
    position: relative;
    overflow: hidden;
  }
  .pricing-card .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,0.2), transparent);
    transition: all 0.4s ease;
  }
  .pricing-card .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(138, 37, 62, 0.3);
  }
  .pricing-card .btn:hover::before {
    left: 100%;
  }
  .cheapest .price {
    color: #e74c3c;
  }
  .least-busy .price {
    color: #2ecc71;
  }
  .meter-badge {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #f8f9fa;
    color: #89253e;
    font-size: 14px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
  }
  .meter-info {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    padding: 10px;
    border-radius: 10px;
    background-color: #f8f9fa;
    display: none;
    transition: all 0.3s ease;
  }
  .meter-info p {
    margin: 5px 0;
    font-size: 0.85rem;
  }
  .container {
    max-width: 1300px;
  }
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #3a6186, #89253e);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #2d4b6a, #6d1e32);
  }
  /* Animations */
  .animate__fadeInStaggered {
    animation-name: fadeIn;
    animation-duration: 0.8s;
    animation-fill-mode: both;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  /* Floating animation for cards */
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  .pricing-card.animated {
    animation: float 5s ease-in-out infinite;
  }
  /* Responsive adjustments */
  @media (max-width: 768px) {
    #hero {
      height: 50vh;
    }
    
    .pricing-card {
      width: 100%;
      max-width: 320px;
    }
  }
</style>
<section id="pricing" class="py-5">
  <div class="container">
    <h2 class="section-title fw-bold mb-5 text-dark">Find Your Perfect Parking Spot</h2>
    
    <div class="text-center">
      <div class="btn-group toggle-switch" role="group" aria-label="Filter toggle">
        <button type="button" class="btn btn-outline-primary active" data-filter="cheapest">
          <i class="bi bi-cash"></i> Cheapest
        </button>
        <button type="button" class="btn btn-outline-primary" data-filter="least-busy">
          <i class="bi bi-people"></i> Least Busy
        </button>
      </div>
    </div>
    
    <div class="pricing-container">
      <!-- Cheapest Meters -->
      <div class="pricing-card cheapest animate__fadeInStaggered">
        <span class="meter-badge">1</span>
        <h4>P-2916</h4>
        <p>Average Rate:</p>
        <p class="price">$0.89 / min</p>
        <div class="d-grid">
          <button class="btn info-toggle">More Info</button>
        </div>
        <div class="meter-info">
          <p><strong>Location:</strong> Downtown Area</p>
          <p><strong>Hours:</strong> 7am - 7pm</p>
          <p><strong>Weekend Rate:</strong> $0.75/min</p>
        </div>
      </div>
      <div class="pricing-card cheapest animate__fadeInStaggered">
        <span class="meter-badge">2</span>
        <h4>P-2912</h4>
        <p>Average Rate:</p>
        <p class="price">$0.95 / min</p>
        <div class="d-grid">
          <button class="btn info-toggle">More Info</button>
        </div>
        <div class="meter-info">
          <p><strong>Location:</strong> Midtown</p>
          <p><strong>Hours:</strong> 8am - 8pm</p>
          <p><strong>Weekend Rate:</strong> $0.80/min</p>
        </div>
      </div>
      <div class="pricing-card cheapest animate__fadeInStaggered">
        <span class="meter-badge">3</span>
        <h4>P-2914</h4>
        <p>Average Rate:</p>
        <p class="price">$1.02 / min</p>
        <div class="d-grid"> 
          <button class="btn info-toggle">More Info</button>
        </div>
        <div class="meter-info">
          <p><strong>Location:</strong> Financial District</p>
          <p><strong>Hours:</strong> 6am - 10pm</p>
          <p><strong>Weekend Rate:</strong> $0.85/min</p>
        </div>
      </div>
      <div class="pricing-card cheapest animate__fadeInStaggered">
        <span class="meter-badge">4</span>
        <h4>P-2918</h4>
        <p>Average Rate:</p>
        <p class="price">$1.04 / min</p>
        <div class="d-grid">
          <button class="btn info-toggle">More Info</button>
        </div>
        <div class="meter-info">
          <p><strong>Location:</strong> Shopping District</p>
          <p><strong>Hours:</strong> 9am - 9pm</p>
          <p><strong>Weekend Rate:</strong> $0.90/min</p>
        </div>
      </div>
      <!-- Least Busy Meters -->
      <div class="pricing-card least-busy animate__fadeInStaggered">
        <span class="meter-badge">A</span>
        <h4>4-1424</h4>
        <p>Availability Status:</p>
        <p class="price">Least Busy</p>
        <div class="d-grid">
          <button class="btn info-toggle">More Info</button>
        </div>
        <div class="meter-info">
          <p><strong>Location:</strong> Residential Area</p>
          <p><strong>Peak Hours:</strong> 12pm - 2pm</p>
          <p><strong>Rate:</strong> $1.25/min</p>
        </div>
      </div>
      <div class="pricing-card least-busy animate__fadeInStaggered">
        <span class="meter-badge">B</span>
        <h4>P-2920</h4>
        <p>Availability Status:</p>
        <p class="price">Least Busy</p>
        <div class="d-grid">
          <button class="btn info-toggle">More Info</button>
        </div>
        <div class="meter-info">
          <p><strong>Location:</strong> Business Park</p>
          <p><strong>Peak Hours:</strong> 9am - 11am</p>
          <p><strong>Rate:</strong> $1.35/min</p>
        </div>
      </div>
      <div class="pricing-card least-busy animate__fadeInStaggered">
        <span class="meter-badge">C</span>
        <h4>9-1302</h4>
        <p>Availability Status:</p>
        <p class="price">Least Busy</p>
        <div class="d-grid">
          <button class="btn info-toggle">More Info</button>
        </div>
        <div class="meter-info">
          <p><strong>Location:</strong> Arts District</p>
          <p><strong>Peak Hours:</strong> 5pm - 8pm</p>
          <p><strong>Rate:</strong> $1.15/min</p>
        </div>
      </div>
      <div class="pricing-card least-busy animate__fadeInStaggered">
        <span class="meter-badge">D</span>
        <h4>BE-710</h4>
        <p>Availability Status:</p>
        <p class="price">Least Busy</p>
        <div class="d-grid">
          <button class="btn info-toggle">More Info</button>
        </div>
        <div class="meter-info">
          <p><strong>Location:</strong> Cultural Center</p>
          <p><strong>Peak Hours:</strong> 1pm - 4pm</p>
          <p><strong>Rate:</strong> $1.40/min</p>
        </div>
      </div>
    </div>
  </div>
</section>
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
  // Enhanced staggered animation
  function animateCards(filter) {
    cards.forEach((card, index) => {
      const shouldShow = card.classList.contains(filter);
      
      if (shouldShow) {
        // Reset any previous animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.display = 'block';
        
        // Staggered delay based on index
        setTimeout(() => {
          card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          
          // Add floating animation after initial appearance
          setTimeout(() => {
            card.classList.add('animated');
          }, 1000);
        }, 100 * index);
      } else {
        card.style.display = 'none';
        card.classList.remove('animated');
      }
    });
  }
  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      // Update active button
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      // Animate and filter cards
      animateCards(filter);
    });
  });
  // Show only 'cheapest' on load with staggered animation
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      animateCards('cheapest');
    }, 300);
    
    // Info toggle functionality
    document.querySelectorAll('.info-toggle').forEach(btn => {
      btn.addEventListener('click', function() {
        const card = this.closest('.pricing-card');
        const info = card.querySelector('.meter-info');
        
        if (info.style.display === 'block') {
          info.style.opacity = '0';
          setTimeout(() => {
            info.style.display = 'none';
          }, 300);
        } else {
          info.style.display = 'block';
          setTimeout(() => {
            info.style.opacity = '1';
          }, 10);
        }
      });
    });
  });
</script>