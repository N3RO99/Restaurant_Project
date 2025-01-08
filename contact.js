// contact.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Contact Page Loaded');

    const contactForm = document.querySelector('.contact-form form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Collect form data
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Send Email using EmailJS
        emailjs.send(service_fhl2s5v, template_o5or11w, {
            user_name: "Samhir & the 5 guys restaurant",
            user_email: "nerocodes0@gmail.com",
            message: "Welcome to Samhir & the 5 guys restaurant"
        }, NFpOU0KB2We7A8D44)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert('Failed to send the message. Please try again later.');
        });
    });
});
