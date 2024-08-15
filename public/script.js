document.addEventListener("DOMContentLoaded", function() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');

    hamburgerIcon.addEventListener('click', function() {
        menuLinks.style.maxHeight = menuLinks.style.maxHeight ? null : `${menuLinks.scrollHeight}px`;
    });

    const navLinks = document.querySelectorAll('.menu-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.style.maxHeight = null;
        });
    });
});


const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
