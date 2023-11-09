const menuBar = document.getElementById('menuBar');
const navLinks = document.getElementById('navLinks');

menuBar.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  console.log('Menu bar clicked'); // Add this line for debugging  
});