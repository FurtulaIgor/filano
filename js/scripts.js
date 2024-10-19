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
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

// Otvaranje i zatvaranje menija na klik dugmeta
hamburger.addEventListener("click", (event) => {
  event.stopPropagation(); // Sprečava zatvaranje odmah pri kliku na dugme
  navMenu.classList.toggle("active");
});

// Zatvaranje menija ako korisnik klikne van njega
document.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target)) {
    navMenu.classList.remove("active");
  }
});

// Za dugme scrollToTop
const scrollToTopButton = document.getElementById("scrollToTop");

// Prikaz dugmeta kada korisnik skroluje dole
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// Funkcionalnost za vraćanje na vrh kada se klikne na dugme
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Za cart

// Selektujemo elemente
const cartIcon = document.getElementById("cart-icon");
const cartCount = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Inicijalizujemo brojač proizvoda
let cart = [];

// Funkcija za dodavanje proizvoda u korpu
function addToCart(product) {
  cart.push(product);
  updateCartCount();
  alert(`${product} je dodat u korpu!`);
}

// Funkcija za ažuriranje brojača korpe
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Dodajemo event listener na sva dugmad "Dodaj u Korpu"
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.getAttribute("data-product");
    addToCart(product);
  });
});
