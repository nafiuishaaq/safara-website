document.addEventListener("DOMContentLoaded", () => {
  const testimonialContainer = document.querySelector(".testimonial-container");
  const cards = testimonialContainer.children;
  const cardCount = cards.length;

  for (let i = 0; i < cardCount; i++) {
    const clone = cards[i].cloneNode(true);
    testimonial - container.appendChild(clone);
  }
});
