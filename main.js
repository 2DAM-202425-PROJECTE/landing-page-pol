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

    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'service_ap02tii';
    const templateID = 'template_qa363di';

    emailjs.sendForm(serviceID, templateID, this).then(
        () => {
            btn.value = 'Send Email';
            alert('Sent!');
        },
        (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        }
    );
});