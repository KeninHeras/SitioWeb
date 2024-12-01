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
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evitar recarga de la página
  const form = e.target;

  fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          document.getElementById('mensaje-exito').style.display = 'block';
          form.reset(); // Limpia el formulario
      } else {
          alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      }
  }).catch(error => {
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
  });
});
