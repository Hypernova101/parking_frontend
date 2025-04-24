---
layout: bootstrap
search_exclude: true
show_reading_time: false
permalink: /smartpark/newt
---

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
rel="stylesheet" 
integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
crossorigin="anonymous">

<!-- Font Awesome -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

<style>
:root {
    --primary: #2b6cb0;
    --secondary: #4a5568;
    --success: #38a169;
    --light-bg: #f7fafc;
    --dark-bg: #1a202c;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.3s ease;
    margin: 0;
    padding: 0;
    display: block;
    overflow-x: hidden;
}

/* Navbar styling */
.navbar {
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 15px 0;
    width: 100%;
}

.navbar-brand {
    font-weight: 700;
    font-size: 24px;
}

.nav-link {
    font-weight: 500;
    margin: 0 10px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    color: var(--primary) !important;
}

/* Hero section */
#hero {
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/api/placeholder/1200/600');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 150px 0;
    width: 100%;
    display: block;
    min-height: 80vh;
}

.hero-content {
    text-align: left;
    max-width: 600px;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
}

/* Features section */
.features {
    padding: 80px 0;
    background-color: var(--light-bg);
    width: 100%;
}

.feature-card {
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    height: 100%;
    transition: transform 0.3s ease;
    border: none;
}

.feature-card:hover {
    transform: translateY(-10px);
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--primary);
}

/* How it works section */
.how-it-works {
    padding: 80px 0;
    width: 100%;
}

.step-card {
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.step-number {
    width: 40px;
    height: 40px;
    background-color: var(--primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 15px;
    flex-shrink: 0;
}

/* Pricing section */
.pricing {
    padding: 80px 0;
    background-color: var(--light-bg);
    width: 100%;
}

.price-card {
    padding: 40px 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    height: 100%;
    transition: all 0.3s ease;
    border: none;
}

.price-card:hover {
    transform: scale(1.03);
}

.price-card.featured {
    border: 2px solid var(--primary);
    position: relative;
}

.featured-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background-color: var(--primary);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-weight: 600;
}

.price {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 20px 0;
    color: var(--primary);
}

/* Testimonials section */
.testimonials {
    padding: 80px 0;
    width: 100%;
}

.testimonial-card {
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    margin: 15px 0;
    border: none;
}

.testimonial-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 15px;
}

.testimonial-quote {
    font-style: italic;
    margin: 20px 0;
    color: var(--secondary);
}

/* Contact section */
.contact {
    padding: 80px 0;
    background-color: var(--light-bg);
    width: 100%;
}

.contact-form {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

/* Footer */
footer {
    background-color: var(--secondary);
    color: white;
    padding: 50px 0 20px;
    width: 100%;
}

.footer-heading {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
}

.footer-link {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    margin-bottom: 10px;
    display: block;
    transition: all 0.3s ease;
}

.footer-link:hover {
    color: white;
    padding-left: 5px;
}

.social-icon {
    font-size: 1.5rem;
    margin-right: 15px;
    color: rgba(255,255,255,0.8);
    transition: all 0.3s ease;
}

.social-icon:hover {
    color: white;
    transform: translateY(-3px);
}

.copyright {
    margin-top: 40px;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
}

/* Theme toggle button */
#theme-toggle {
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 1000;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Dark theme styles */
body[data-bs-theme="dark"] {
    background-color: var(--dark-bg);
    color: white;
}

body[data-bs-theme="dark"] .navbar {
    background-color: #2d3748 !important;
}

body[data-bs-theme="dark"] .card {
    background-color: #2d3748;
    color: white;
}

body[data-bs-theme="dark"] .features,
body[data-bs-theme="dark"] .pricing,
body[data-bs-theme="dark"] .contact {
    background-color: #1a202c;
}

body[data-bs-theme="dark"] .feature-card,
body[data-bs-theme="dark"] .step-card,
body[data-bs-theme="dark"] .price-card,
body[data-bs-theme="dark"] .testimonial-card,
body[data-bs-theme="dark"] .contact-form {
    background-color: #2d3748;
    color: white;
}

body[data-bs-theme="dark"] .form-control {
    background-color: #4a5568;
    border-color: #4a5568;
    color: white;
}

body[data-bs-theme="dark"] .form-control::placeholder {
    color: rgba(255,255,255,0.6);
}

/* Fix for section alignment */
section {
    width: 100%;
    display: block;
}

/* Row fix */
.row {
    margin-left: 0;
    margin-right: 0;
}

/* Container fix */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}
</style>
</head>
<body>

<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top">
<div class="container">
    <a class="navbar-brand" href="#">
        <i class="fas fa-parking text-primary"></i> ParkEase
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
                <a class="nav-link" href="#hero">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#features">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#how-it-works">How It Works</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#pricing">Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
            <li class="nav-item ms-3">
                <a class="btn btn-primary" href="#">Sign In</a>
            </li>
        </ul>
    </div>
</div>
</nav>

<!-- Theme Toggle Button -->
<button id="theme-toggle" class="btn btn-light">
    <i class="fas fa-moon"></i>
</button>

<!-- Hero Section -->
<section id="hero">
<div class="container">
    <div class="hero-content">
        <h1 class="hero-title">Smart Parking Solutions for Modern Cities</h1>
        <p class="hero-subtitle">Find, reserve, and pay for parking spaces in seconds. Our automated system makes parking hassle-free.</p>
        <div class="d-flex">
            <a href="#" class="btn btn-primary btn-lg me-3">Get Started</a>
            <a href="#how-it-works" class="btn btn-outline-light btn-lg">Learn More</a>
        </div>
    </div>
</div>
</section>

<!-- Features Section -->
<section id="features" class="features">
<div class="container">
    <div class="text-center mb-5">
        <h2 class="fw-bold">Smart Features</h2>
        <p class="text-muted">Everything you need for seamless parking management</p>
    </div>
    <div class="row g-4">
        <div class="col-md-4">
            <div class="feature-card card">
                <div class="feature-icon">
                    <i class="fas fa-search-location"></i>
                </div>
                <h4>Find Parking Fast</h4>
                <p>Locate available parking spots near your destination in real-time with our interactive map.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="feature-card card">
                <div class="feature-icon">
                    <i class="fas fa-calendar-check"></i>
                </div>
                <h4>Easy Reservations</h4>
                <p>Reserve your parking spot in advance and ensure availability when you arrive.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="feature-card card">
                <div class="feature-icon">
                    <i class="fas fa-credit-card"></i>
                </div>
                <h4>Contactless Payment</h4>
                <p>Pay securely through our app without the need for cash or parking meters.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="feature-card card">
                <div class="feature-icon">
                    <i class="fas fa-bell"></i>
                </div>
                <h4>Smart Notifications</h4>
                <p>Receive alerts about your parking time, extensions, and special offers.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="feature-card card">
                <div class="feature-icon">
                    <i class="fas fa-history"></i>
                </div>
                <h4>Time Extensions</h4>
                <p>Need more time? Easily extend your parking duration from anywhere using the app.</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="feature-card card">
                <div class="feature-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h4>Security Monitoring</h4>
                <p>Our parking facilities are equipped with 24/7 monitoring for your vehicle's safety.</p>
            </div>
        </div>
    </div>
</div>
</section>

<!-- How It Works Section -->
<section id="how-it-works" class="how-it-works">
<div class="container">
    <div class="text-center mb-5">
        <h2 class="fw-bold">How It Works</h2>
        <p class="text-muted">Simple, fast, and efficient parking in just a few steps</p>
    </div>
    <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
            <img src="/api/placeholder/540/360" alt="How it works illustration" class="img-fluid rounded shadow">
        </div>
        <div class="col-lg-6">
            <div class="step-card d-flex align-items-start">
                <div class="step-number">1</div>
                <div>
                    <h4>Download the App</h4>
                    <p>Get our mobile app from the App Store or Google Play Store.</p>
                </div>
            </div>
            <div class="step-card d-flex align-items-start">
                <div class="step-number">2</div>
                <div>
                    <h4>Find & Reserve</h4>
                    <p>Search for available parking spaces near your destination and reserve instantly.</p>
                </div>
            </div>
            <div class="step-card d-flex align-items-start">
                <div class="step-number">3</div>
                <div>
                    <h4>Park & Pay</h4>
                    <p>Follow directions to your spot and pay securely through the app.</p>
                </div>
            </div>
            <div class="step-card d-flex align-items-start">
                <div class="step-number">4</div>
                <div>
                    <h4>Extend If Needed</h4>
                    <p>Need more time? Extend your parking duration with a few taps.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<!-- Pricing Section -->
<section id="pricing" class="pricing">
<div class="container">
    <div class="text-center mb-5">
        <h2 class="fw-bold">Simple Pricing</h2>
        <p class="text-muted">Choose the plan that fits your parking needs</p>
    </div>
    <div class="row g-4">
        <div class="col-md-4">
            <div class="price-card card">
                <h4 class="text-center">Basic</h4>
                <div class="price text-center">$9.99<small>/month</small></div>
                <ul class="list-unstyled mb-4">
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Find parking spaces</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Pay-as-you-go</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Basic notifications</li>
                    <li class="mb-2 text-muted"><i class="fas fa-times text-danger me-2"></i> Reservations</li>
                    <li class="mb-2 text-muted"><i class="fas fa-times text-danger me-2"></i> Priority spaces</li>
                </ul>
                <a href="#" class="btn btn-outline-primary d-block">Choose Basic</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="price-card card featured">
                <span class="featured-badge">Popular</span>
                <h4 class="text-center">Premium</h4>
                <div class="price text-center">$19.99<small>/month</small></div>
                <ul class="list-unstyled mb-4">
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Find parking spaces</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Unlimited reservations</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Enhanced notifications</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> 10% discount on fees</li>
                    <li class="mb-2 text-muted"><i class="fas fa-times text-danger me-2"></i> Priority spaces</li>
                </ul>
                <a href="#" class="btn btn-primary d-block">Choose Premium</a>
            </div>
        </div>
        <div class="col-md-4">
            <div class="price-card card">
                <h4 class="text-center">Business</h4>
                <div class="price text-center">$39.99<small>/month</small></div>
                <ul class="list-unstyled mb-4">
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> All Premium features</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Priority parking spaces</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> 20% discount on fees</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Dedicated support</li>
                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Multiple vehicles</li>
                </ul>
                <a href="#" class="btn btn-outline-primary d-block">Choose Business</a>
            </div>
        </div>
    </div>
</div>
</section>

<!-- Testimonials -->
<section class="testimonials">
<div class="container">
    <div class="text-center mb-5">
        <h2 class="fw-bold">What Our Users Say</h2>
        <p class="text-muted">Thousands of happy customers trust ParkEase every day</p>
    </div>
    <div class="row g-4">
        <div class="col-md-4">
            <div class="testimonial-card card">
                <div class="d-flex align-items-center">
                    <img src="/api/placeholder/60/60" alt="User Avatar" class="testimonial-avatar">
                    <div>
                        <h5 class="mb-0">Sarah Johnson</h5>
                        <small class="text-muted">Daily Commuter</small>
                    </div>
                </div>
                <p class="testimonial-quote">
                    "Finding parking used to be my daily nightmare. With ParkEase, I reserve my spot before leaving home and save at least 15 minutes every morning."
                </p>
                <div class="text-warning">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="testimonial-card card">
                <div class="d-flex align-items-center">
                    <img src="/api/placeholder/60/60" alt="User Avatar" class="testimonial-avatar">
                    <div>
                        <h5 class="mb-0">Michael Chen</h5>
                        <small class="text-muted">Business Owner</small>
                    </div>
                </div>
                <p class="testimonial-quote">
                    "The Business plan has been a game-changer for my team. We always get premium spots and the billing system makes expense reports so much easier."
                </p>
                <div class="text-warning">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="testimonial-card card">
                <div class="d-flex align-items-center">
                    <img src="/api/placeholder/60/60" alt="User Avatar" class="testimonial-avatar">
                    <div>
                        <h5 class="mb-0">Emma Rodriguez</h5>
                        <small class="text-muted">Weekend Shopper</small>
                    </div>
                </div>
                <p class="testimonial-quote">
                    "Shopping downtown on weekends used to be stressful because of parking. Now I just open the app and find a spot within minutes. Absolutely love it!"
                </p>
                <div class="text-warning">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact">
<div class="container">
    <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
            <h2 class="fw-bold mb-4">Get In Touch</h2>
            <p class="mb-4">Have questions or need assistance? Our support team is here to help you.</p>
            <div class="d-flex align-items-center mb-3">
                <div class="bg-primary p-2 rounded text-white me-3">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div>
                    <h5 class="mb-0">Address</h5>
                    <p class="mb-0">123 Parking Avenue, Suite 500<br>San Francisco, CA 94107</p>
                </div>
            </div>
            <div class="d-flex align-items-center mb-3">
                <div class="bg-primary p-2 rounded text-white me-3">
                    <i class="fas fa-phone-alt"></i>
                </div>
                <div>
                    <h5 class="mb-0">Phone</h5>
                    <p class="mb-0">(555) 123-4567</p>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <div class="bg-primary p-2 rounded text-white me-3">
                    <i class="fas fa-envelope"></i>
                </div>
                <div>
                    <h5 class="mb-0">Email</h5>
                    <p class="mb-0">support@parkease.com</p>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="contact-form">
                <h4 class="mb-4">Send Us a Message</h4>
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="name" placeholder="John Doe">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" placeholder="john@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="subject" placeholder="How can we help?">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message</label>
                        <textarea class="form-control" id="message" rows="5" placeholder="Your message here..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</div>
</section>

<!-- Footer -->
<footer>
<div class="container">
    <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
            <h5 class="footer-heading">About ParkEase</h5>
            <p>ParkEase is revolutionizing urban parking with smart technology solutions that make finding and paying for parking effortless.</p>
            <div class="mt-3">
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 class="footer-heading">Company</h5>
            <a href="#" class="footer-link">About Us</a>
            <a href="#" class="footer-link">Our Team</a>
            <a href="#" class="footer-link">Careers</a>
            <a href="#" class="footer-link">Press</a>
        </div>
        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 class="footer-heading">Services</h5>
            <a href="#" class="footer-link">Parking Reservations</a>
            <a href="#" class="footer-link">Mobile Payments</a>
            <a href="#" class="footer-link">Business Solutions</a>
            <a href="#" class="footer-link">Partner Program</a>
        </div>
        <div class="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 class="footer-heading">Support</h5>
            <a href="#" class="footer-link">Help Center</a>
            <a href="#" class="footer-link">Contact Us</a>
            <a href="#" class="footer-link">FAQs</a>
            <a href="#" class="footer-link">System Status