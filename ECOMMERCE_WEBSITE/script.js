document.addEventListener('DOMContentLoaded', function() {
    // Select navigation items by class
    const homeLink = document.querySelector('.nav-home');
    const shopLink = document.querySelector('.nav-shop');
    const brandsLink = document.querySelector('.nav-brands');
    const contactLink = document.querySelector('.nav-contact');

    // Add click event listeners
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });

    shopLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });

    brandsLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('brands').scrollIntoView({ behavior: 'smooth' });
    });
    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' });
    });
});

