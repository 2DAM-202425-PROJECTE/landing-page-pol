import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

document.addEventListener('DOMContentLoaded', (event) => {
    const loader = document.getElementById('loading');
    if (loader) {
        loader.style.display = 'none';
    }
});

const btn = document.getElementById('button');

document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById("responseMessage").classList.add("hidden");
    document.getElementById("errorMessage").classList.add("hidden");

    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'service_ap02tii';
    const templateID = 'template_qa363di';

    emailjs.sendForm(serviceID, templateID, this).then(function(response) {
        console.log("Success!", response.status, response.text);
        document.getElementById("responseMessage").classList.remove("hidden");
        document.getElementById("contactForm").reset();
    }, function(error) {
        console.error("Error:", error);
        document.getElementById("errorMessage").classList.remove("hidden");
    });
});