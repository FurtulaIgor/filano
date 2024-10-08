/** @format */

// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const slideInterval = setInterval(nextSlide, 5000); // Promeni slajd svakih 5 sekundi

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
  // Opcionalno: Dodavanje navigacionih tačaka ili strelica
});
