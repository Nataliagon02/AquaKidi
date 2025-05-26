// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {

  // -------------------- MODALES --------------------
  const botones = document.querySelectorAll(".open-modal");

  botones.forEach(boton => {
    boton.addEventListener("click", function () {
      const idAnimal = boton.getAttribute("data-animal");
      const modal = document.getElementById(`modal-${idAnimal}`);
      if (modal) {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    });
  });

  const cerrarBotones = document.querySelectorAll(".cerrar-modal");
  cerrarBotones.forEach(boton => {
    boton.addEventListener("click", function () {
      const modal = boton.closest(".modal");
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  });

  const modales = document.querySelectorAll(".modal");
  modales.forEach(modal => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  });

  // -------------------- POPUP COMPARACIÓN --------------------
  const animals = document.querySelectorAll('.animal');
  const popup = document.getElementById('popup');
  const comparisonImage = document.getElementById('comparisonImage');
  const comparisonText = document.getElementById('comparisonText');
  const closeBtn = document.querySelector('.close-btn');

  animals.forEach(animal => {
    animal.addEventListener('click', () => {
      const comparisonSrc = animal.getAttribute('data-comparison');
      const description = animal.getAttribute('data-description');
      comparisonImage.src = comparisonSrc;
      comparisonText.textContent = description;
      popup.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });

  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.add('hidden');
    }
  });

// -------------------- BURBUJAS --------------------
const bubbleContainer = document.querySelector('.bubble-container');
for (let i = 0; i < 20; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubbleContainer.appendChild(bubble);

  const size = Math.random() * 40 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = `-${size}px`;

  gsap.to(bubble, {
    y: -window.innerHeight - size,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
    ease: "power1.out",
    repeat: -1,
    repeatDelay: Math.random() * 2
  });
}

// -------------------- CARRUSEL --------------------
const carousel = document.getElementById("carousel");

function scrollCarousel(direction) {
  const scrollAmount = 300; // Ajusta la cantidad de desplazamiento
  carousel.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
}
	
	// -------------------- SCROLL DEL CARRUSEL --------------------
window.scrollCarousel = function (direction) {
  const container = document.getElementById("carousel");
  const scrollAmount = 300;
  container.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
};


// -------------------- PANEL DE INFORMACIÓN --------------------
window.openPanel = function(imageSrc, animalName) {
  const infoImage = document.getElementById('infoImage');
  const infoText = document.getElementById('infoText');

  // Actualizar el contenido del panel
  infoImage.src = `img/${imageSrc}`; // Asume que las imágenes están en la carpeta img
  infoText.textContent = animalName;
  
  // Mostrar el panel
  const infoPanel = document.getElementById('infoPanel');
  infoPanel.style.display = "block";
};

 // -------------------- FUNCIÓN PARA CERRAR PANEL --------------------
window.closePanel = function () {
  const infoPanel = document.getElementById('infoPanel');
  infoPanel.style.display = "none";
};

  // -------------------- SCROLL DEL CARRUSEL CON BOTONES --------------------
  window.scrollCarousel = function (direction) {
    const container = document.getElementById("carousel");
    const scrollAmount = 300;
    container.scrollBy({
      left: scrollAmount * direction,
      behavior: 'smooth'
    });
  };

});





// -------------------- SCROLL DEL CARRUSEL --------------------
window.scrollCarousel = function (direction) {
  const container = document.getElementById("carousel");
  const scrollAmount = 300;
  container.scrollBy({
    left: scrollAmount * direction,
    behavior: 'smooth'
  });
};









