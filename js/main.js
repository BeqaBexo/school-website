
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // change every 4s
showSlide(currentSlide);

// Mobile menu toggle
function toggleMenu() {
  const navList = document.querySelector('.nav ul');
  navList.classList.toggle('active');
}
