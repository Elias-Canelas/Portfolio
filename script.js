// Typed.js
const typed = new Typed('#typing', {
  strings: [
  'Full-Stack Problem Solver.',
  'React Native & .NET Pro.',
  'Turning Ideas into Code.'
]
,
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1000,
  startDelay: 300,
  loop: true,
});

// AOS Init
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Highlight active section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links li a');

function activateNavLink() {
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', activateNavLink);

// Mobile Nav Toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
});
