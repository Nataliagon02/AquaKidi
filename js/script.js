// JavaScript Document

// --- Función para generar burbujas animadas en botones ---
function generarBurbujas(button) {
  for (let i = 0; i < 4; i++) {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");

    button.appendChild(bubble);

    const offsetX = (Math.random() - 0.5) * 30;
    const offsetY = Math.random() * -25 - 10;
    const scale = Math.random() * 0.4 + 0.6;

    gsap.fromTo(bubble,
      { x: 0, y: 0, scale: scale, opacity: 0.8 },
      {
        x: offsetX,
        y: offsetY,
        scale: scale * 1.8,
        opacity: 0,
        duration: 2,
        ease: "sine.out",
        onComplete: () => bubble.remove()
      });
  }

  gsap.to(button, {
    scale: 1.1,
    duration: 2,
    ease: "elastic.out(1, 0.4)",
    onStart: () => {
      button.style.animation = "glow 1s ease-in-out";
    }
  });
}

// --- Evento para botones del menú ---
const navButtons = document.querySelectorAll("nav a");
navButtons.forEach(button => {
  button.addEventListener("mouseenter", () => generarBurbujas(button));
  button.addEventListener("mouseleave", () => {
    gsap.to(button, {
      scale: 1,
      duration: 2,
      onStart: () => {
        button.style.animation = "none";
      }
    });
  });
});

// --- Evento para botón principal con animación similar ---
const mainButton = document.querySelector(".boton-animado");
if (mainButton) {
  mainButton.addEventListener("mouseenter", () => generarBurbujas(mainButton));
  mainButton.addEventListener("mouseleave", () => {
    gsap.to(mainButton, {
      scale: 1,
      duration: 2,
      onStart: () => {
        mainButton.style.animation = "none";
      }
    });
  });
}

// --- Burbujas flotantes en contenedor ---
const container = document.querySelector('.bubble-container');
function createFloatingBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('floating-bubble');

  const size = Math.random() * 20 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.animationDuration = `${Math.random() * 10 + 10}s`;

  container.appendChild(bubble);
  setTimeout(() => bubble.remove(), 15000);
}
setInterval(createFloatingBubble, 400);

// --- Animaciones de bienvenida usando GSAP y ScrollTrigger ---
gsap.registerPlugin(ScrollTrigger);

gsap.from(".bienvenida h1", {
  y: -80,
  opacity: 0,
  duration: 1,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".bienvenida",
    start: "top 80%",
  }
});

gsap.from(".bienvenida p", {
  y: 30,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".bienvenida",
    start: "top 80%",
  }
});

gsap.from(".bienvenida button", {
  scale: 0.5,
  opacity: 0,
  duration: 0.6,
  delay: 0.7,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".bienvenida",
    start: "top 80%",
  }
});

// --- Animación para secciones dentro de .sobre-aquakidi ---
gsap.utils.toArray(".sobre-aquakidi > div").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 30,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
    }
  });
});