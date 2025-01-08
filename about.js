// about.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('About Us Page Loaded');

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href').split('#')[1];
            if (targetId) {
                event.preventDefault();
                document.getElementById(targetId)?.scrollIntoView({ 
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dynamic Text Animation on Scroll for About Section
    const aboutSection = document.querySelector('#about');
    const valuesSection = document.querySelector('#values');

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    if (aboutSection) observer.observe(aboutSection);
    if (valuesSection) observer.observe(valuesSection);

    console.log('Intersection Observer initialized');
});
