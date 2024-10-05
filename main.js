import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

document.addEventListener('DOMContentLoaded', (event) => {
    const loader = document.getElementById('loading');
    if (loader) {
        loader.style.display = 'none';
    }
});