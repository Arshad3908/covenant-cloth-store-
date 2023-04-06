// Get the DOM elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Add event listener for mobile menu toggle
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Smooth scroll to section when clicking on nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
    navMenu.classList.remove('show');
  });
});

// Add event listener for contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  // Perform form validation and submission logic here
  // ...
});
