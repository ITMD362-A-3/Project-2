const menuBar = document.getElementById('menuBar');
const navLinks = document.getElementById('navLinks');

menuBar.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});