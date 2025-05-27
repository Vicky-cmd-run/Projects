const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carousel = document.getElementById('carousel');
let cellIndex = 1;

function rotateCarousel() {
  const angle = (cellIndex - 1) * -72;
  carousel.style.transform = `translateZ(-400px) rotateY(${angle}deg)`;

  const cells = carousel.querySelectorAll('.carousel_cell');
  cells.forEach(cell => cell.classList.remove('active'));

  const activeCell = carousel.querySelector(`.carousel_cell:nth-child(${cellIndex})`);
  if (activeCell) activeCell.classList.add('active');
}

prev.addEventListener('click', () => {
  cellIndex = (cellIndex - 2 + 5) % 5 + 1;
  rotateCarousel();
});

next.addEventListener('click', () => {
  cellIndex = cellIndex % 5 + 1;
  rotateCarousel();
});

let startX = 0;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    next.click();
  } else if (endX - startX > 50) {
    prev.click();
  }
});

rotateCarousel();