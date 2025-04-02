
AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 900, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation  
  });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInUp');
      entry.target.style.setProperty('--animate-duration', '1s');
      observer.unobserve(entry.target); // Animate once
    }
  });
}, { threshold: 0.5 });

['#hero-title', '#hero-subtitle', '#hero-buttons'].forEach(id => {
  const el = document.querySelector(id);
  if (el) observer.observe(el);
});
  