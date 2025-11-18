const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".item");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;
const visibleItems = 3;
const totalItems = items.length;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 30; // card + gap
  track.style.transform = `translateX(-${index * itemWidth}px)`;
}

next.addEventListener("click", () => {
  if (index < totalItems - visibleItems) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});

prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = totalItems - visibleItems;
  }
  updateCarousel();
});

// Auto slide
setInterval(() => {
  next.click();
}, 4000);
