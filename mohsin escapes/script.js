document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
      "class",
      isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  });

  // ScrollReveal Animations
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".hotel__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".steps__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".inspiration__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".property__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".trip__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".destinations__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".amenities__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".testimonials__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".newsletter__container .section__header", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".newsletter__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".newsletter__container form", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".discount__content .section__header", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".discount__content .section__description", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
  });
  ScrollReveal().reveal(".discount__btns", {
    ...scrollRevealOption,
    origin: "right",
    delay: 1000,
  });

  // Inspiration Section Duplication for Infinite Scroll
  const inspiration = document.querySelector(".inspiration__wrapper");
  const inspirationImages = Array.from(inspiration.children);
  inspirationImages.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    inspiration.appendChild(duplicateNode);
  });

  // Carousel Functionality for Featured Destinations
  const track = document.querySelector(".carousel__track");
  const cards = document.querySelectorAll(".destinations__card");
  const prevBtn = document.querySelector(".carousel__btn--prev");
  const nextBtn = document.querySelector(".carousel__btn--next");
  let currentIndex = 0;

  function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", updateCarousel);

  // Newsletter Subscription Confirmation
  function showConfirmation(event) {
    event.preventDefault();
    const confirmation = document.getElementById("newsletter-confirmation");
    confirmation.style.display = "block";
    setTimeout(() => {
      confirmation.style.display = "none";
    }, 3000);
  }

  const newsletterForm = document.querySelector(".newsletter__container form");
  newsletterForm.addEventListener("submit", showConfirmation);
});