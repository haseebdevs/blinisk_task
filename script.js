const toggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
const links = document.querySelectorAll(".navlinks a");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("testimonialsTrack");
  const cards = document.querySelectorAll(".testimonial-card");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const prevMobile = document.querySelector(".prev-btn-mobile");
  const nextMobile = document.querySelector(".next-btn-mobile");

  let currentIndex = 1; // start with second card in center (0-based)
  const totalCards = cards.length;

  function updateCarousel() {
    // Remove active class from all
    cards.forEach((card) => card.classList.remove("active"));

    // Calculate center card
    const centerPosition = currentIndex;

    // Activate center card
    if (cards[centerPosition]) {
      cards[centerPosition].classList.add("active");
    }

    // Move track
    const cardWidth = cards[0].offsetWidth;
    const gap = 32; // gap value in pixels (2rem = 32px by default)
    const offset =
      -(currentIndex * (cardWidth + gap)) +
      (window.innerWidth / 2 - cardWidth / 2 - 20);

    track.style.transform = `translateX(${offset}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    updateCarousel();
  }

  // Event listeners
  nextBtn?.addEventListener("click", nextSlide);
  prevBtn?.addEventListener("click", prevSlide);

  nextMobile?.addEventListener("click", nextSlide);
  prevMobile?.addEventListener("click", prevSlide);

  // Initial setup
  updateCarousel();

  // Update on resize (important for centering)
  window.addEventListener("resize", updateCarousel);

  // Optional: auto slide every 6 seconds
  // setInterval(nextSlide, 6000);
});
