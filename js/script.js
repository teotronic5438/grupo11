document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.querySelector('.carousel-images')
    const images = document.querySelectorAll('.carousel-item')
    let currentIndex = 0
  
    document.querySelector('.prev').addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1;  // Salta a la última imagen si es menor que 0
      }
      updateCarousel();
    });
  
    document.querySelector('.next').addEventListener('click', function() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;  // Salta a la primera imagen si supera el índice máximo
      }
      updateCarousel();
    });
  
    function updateCarousel() {
      const offset = -currentIndex * 100; // Cada imagen ocupa 100% del ancho del contenedor
      imagesContainer.style.transform = `translateX(${offset}%)`;
    }
});
  