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

// Prvo pronađemo elemente
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Otvaranje i zatvaranje menija na klik dugmeta
hamburger.addEventListener('click', (event) => {
  event.stopPropagation(); // Sprečava zatvaranje odmah pri kliku na dugme
  navMenu.classList.toggle('active');
});

// Zatvaranje menija ako korisnik klikne van njega
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target)) {
    navMenu.classList.remove('active');
  }
});
