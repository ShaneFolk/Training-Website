function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');

    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        toggle.textContent = '✕';
    } else {
        toggle.textContent = '☰';
    }
}

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-floating');
    } else {
        navbar.classList.remove('navbar-floating');
    }
});




//load hero and cta sections
fetch('sections/hero.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('hero-section').innerHTML = data;
    });

fetch('sections/cta.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('cta-section').innerHTML = data;
    });
