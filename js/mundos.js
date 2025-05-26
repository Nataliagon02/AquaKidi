// JavaScript Document
const preguntas = [
  {
    pregunta: "¿Cuál ecosistema es conocido como el 'bosque del mar' y protege a muchos peces bebés?",
    opciones: ["Manglares", "Arrecifes de coral", "Zonas pelágicas"],
    respuestaCorrecta: "Manglares"
  },
  {
    pregunta: "¿Dónde viven los peces payaso y muchas otras especies coloridas?",
    opciones: ["Pastos marinos", "Arrecifes de coral", "Estuarios"],
    respuestaCorrecta: "Arrecifes de coral"
  },
  {
    pregunta: "¿Qué ecosistema está formado por plantas que parecen pasto y producen oxígeno bajo el agua?",
    opciones: ["Pastos marinos", "Manglares", "Estuarios"],
    respuestaCorrecta: "Pastos marinos"
  },
  {
    pregunta: "¿Cuál es la zona abierta y profunda del océano donde nadan muchas especies migratorias?",
    opciones: ["Zonas pelágicas", "Arrecifes de coral", "Manglares"],
    respuestaCorrecta: "Zonas pelágicas"
  },
  {
    pregunta: "¿Qué ecosistema es una mezcla de agua dulce y salada, y es un lugar ideal para muchas aves y peces?",
    opciones: ["Estuarios", "Pastos marinos", "Zonas pelágicas"],
    respuestaCorrecta: "Estuarios"
  }
];

let preguntaActual = 0;
let puntuacion = 0;

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  document.getElementById("pregunta").textContent = pregunta.pregunta;

  const opcionesContainer = document.getElementById("opciones");
  opcionesContainer.innerHTML = "";

  pregunta.opciones.forEach(opcion => {
    const boton = document.createElement("button");
    boton.textContent = opcion;
    boton.classList.add("opcion-btn");
    boton.onclick = () => verificarRespuesta(opcion);
    opcionesContainer.appendChild(boton);
  });
}

function verificarRespuesta(opcionSeleccionada) {
  const pregunta = preguntas[preguntaActual];
  const resultadoDiv = document.getElementById("resultado");

  if (opcionSeleccionada === pregunta.respuestaCorrecta) {
    puntuacion++;
    resultadoDiv.textContent = "¡Correcto! 🎉";
    resultadoDiv.style.color = "green";
  } else {
    resultadoDiv.textContent = `Incorrecto 😞. La respuesta correcta es: ${pregunta.respuestaCorrecta}.`;
    resultadoDiv.style.color = "red";
  }

  const botones = document.querySelectorAll("#opciones button");
  botones.forEach(boton => boton.disabled = true);

  setTimeout(() => {
    resultadoDiv.textContent = "";
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
      mostrarPregunta();
    } else {
      mostrarResultado(`¡Terminaste la trivia! Puntaje: ${puntuacion}/${preguntas.length}`);
    }
  }, 1500);
}

function mostrarResultado(mensaje) {
  document.getElementById("pregunta").textContent = "";
  document.getElementById("opciones").innerHTML = "";
  document.getElementById("resultado").textContent = mensaje;

  document.querySelector(".reiniciar-contenedor").style.display = "flex";
}

function iniciarTrivia() {
  preguntaActual = 0;
  puntuacion = 0;
  document.getElementById("resultado").textContent = "";
  document.querySelector(".reiniciar-contenedor").style.display = "none";
  mostrarPregunta();
}

document.getElementById("reiniciarTrivia").addEventListener("click", iniciarTrivia);

iniciarTrivia();

const infoHabitat = document.getElementById('info-habitat');

const habitats = {
  coral: {
    titulo: "Arrecifes de coral",
    descripcion: "Son ecosistemas coloridos formados por corales que brindan refugio a miles de especies marinas. En Colombia se encuentran en el Caribe y parte del Pacífico.",
    imagen: "img/arrecifes.jpg"
  },
  manglar: {
    titulo: "Manglares",
    descripcion: "Bosques costeros que protegen las costas y sirven de guardería para peces, cangrejos y moluscos. Son vitales para combatir el cambio climático.",
    imagen: "img/manglares.jpg"
  },
  pasto: {
    titulo: "Pastos marinos",
    descripcion: "Plantas submarinas que forman praderas donde viven tortugas, caballitos de mar y muchos más. También filtran el agua y oxigenan el mar.",
    imagen: "img/pastos.png"
  },
  pelagica: {
    titulo: "Zonas pelágicas",
    descripcion: "Son las áreas marinas de aguas abiertas, donde habitan animales como delfines, atunes y tiburones. Están llenas de vida y movimiento.",
    imagen: "img/pelagicas.jpg"
  },
  estuario: {
    titulo: "Estuarios",
    descripcion: "Donde el río se encuentra con el mar. Son zonas ricas en nutrientes y biodiversidad, muy importantes para peces y aves migratorias.",
    imagen: "img/estuario.jpg"
  }
};

// Escuchar clics en las tarjetas
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const habitat = card.getAttribute('data-habitat');
    const data = habitats[habitat];

    if (data) {
      if (infoHabitat.classList.contains("visible")) {
        infoHabitat.classList.remove("visible");

        setTimeout(() => {
          updateHabitatContent(data);
        }, 300);
      } else {
        updateHabitatContent(data);
      }
    }
  });
});

// Función para actualizar el contenido del hábitat
function updateHabitatContent(data) {
  infoHabitat.innerHTML = `
    <img src="${data.imagen}" alt="${data.titulo}">
    <h3>${data.titulo}</h3>
    <p>${data.descripcion}</p>
    <div class="volver-contenedor">
      <img src="img/pececillo.png" alt="Pececito guía" class="personaje-volver">
      <button class="volver-btn">
        <i class="fa-solid fa-water"></i> ¡Vamos a explorar otro hábitat!
      </button>
    </div>
  `;
  infoHabitat.classList.add("visible");
  infoHabitat.scrollIntoView({ behavior: 'smooth' });

  const volverBtn = document.querySelector('.volver-btn');
  volverBtn.addEventListener('click', () => {
    infoHabitat.classList.remove("visible");
    document.querySelector('.galeria').scrollIntoView({ behavior: 'smooth' });
  });
}