// menu bar
document.getElementById("menuBar").addEventListener("click", myFunction, false);
function myFunction() {
  const navLinks = document.querySelector('.navLinks');
  console.log('Menu bar clicked');
  navLinks.classList.toggle('active');
}

// wedding slideshow
// picture slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//birthday slideshow
let birthdaySlideIndex = 1;
showBirthdaySlides(birthdaySlideIndex);

// Next/previous controls for birthdays
function plusBirthdaySlides(n) {
  showBirthdaySlides(birthdaySlideIndex += n);
}

// Thumbnail image controls for birthdays
function currentBirthdaySlide(n) {
  showBirthdaySlides(birthdaySlideIndex = n);
}

function showBirthdaySlides(n) {
  let i;
  let birthdaySlides = document.getElementsByClassName("birthdaySlides");
  let birthdayDots = document.getElementsByClassName("birthdayDot");
  if (n > birthdaySlides.length) { birthdaySlideIndex = 1; }
  if (n < 1) { birthdaySlideIndex = birthdaySlides.length; }
  for (i = 0; i < birthdaySlides.length; i++) {
    birthdaySlides[i].style.display = "none";
  }
  for (i = 0; i < birthdayDots.length; i++) {
    birthdayDots[i].className = birthdayDots[i].className.replace(" active", "");
  }
  birthdaySlides[birthdaySlideIndex - 1].style.display = "block";
  birthdayDots[birthdaySlideIndex - 1].className += " active";
}