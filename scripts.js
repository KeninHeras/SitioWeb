const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentIndex = 0;

function showItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showItem(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  showItem(currentIndex);
});

// Mostrar el primer elemento al cargar
showItem(currentIndex);
