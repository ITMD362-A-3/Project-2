const menuToggle = document.getElementById('menuBar');
const navList = document.getElementById('navlinks');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});