

document.getElementById("menuBar").addEventListener("click", myFunction, false);
function myFunction() {
  const navLinks = document.querySelector('.navLinks');
  console.log('Menu bar clicked');
  navLinks.classList.toggle('active');
}

