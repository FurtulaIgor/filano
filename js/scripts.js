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

// scripts.js
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// Otvaranje i zatvaranje menija na klik dugmeta
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Zatvaranje menija kada korisnik klikne izvan njega
//document.addEventListener("click", (event) => {
//if (!navMenu.contains(event.target) && event.target !== hamburger) {
//navMenu.classList.remove("active");
//}
//});
