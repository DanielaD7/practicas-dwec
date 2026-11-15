const datosIniciales = {
  nombre: 'Copa Pixel 2026',
  duracionSegundos: 180,
  participantes: [
    { nombre: 'Ryu Master', puntos: 2400, pais: 'JP' },
    { nombre: 'LuciaFire', puntos: 3100, pais: 'ES' },
    { nombre: 'DragonKick99', puntos: 1850, pais: 'MX' },
    { nombre: 'ZeroCool', puntos: 2950, pais: 'US' },
  ],
};

const contenedor = document.querySelector("#participantes");
const cuenta = document.querySelector("#cuenta");
const mensaje = document.querySelector("#mensaje");
const botonIniciar = document.querySelector("#iniciar");
const botonResetear = document.querySelector("#resetear");

const guardado = localStorage.getItem("copaPixel");
const participantes = JSON.parse(guardado) ?? datosIniciales.participantes;

let finTorneo = JSON.parse(localStorage.getItem("copaPixelFin"));
let segundosRestantes = datosIniciales.duracionSegundos;
let intervalo = null;

participantes.forEach(jugador => {
  const tarjeta = document.createElement("article");
  const nombre = document.createElement("h3");
  const pais = document.createElement("p");
  const puntos = document.createElement("p");
  const boton = document.createElement("button");

  nombre.textContent = jugador.nombre;
  pais.textContent = `País: ${jugador.pais}`;
  puntos.textContent = `Puntos: ${jugador.puntos}`;
  boton.textContent = "Votar (+50)";
  boton.className = "votar";
  boton.disabled = true;

  boton.addEventListener("click", () => {
    if (finTorneo === null || Date.now() >= finTorneo) {
      return;
    }

    jugador.puntos += 50;
    puntos.textContent = `Puntos: ${jugador.puntos}`;
    localStorage.setItem("copaPixel", JSON.stringify(participantes));
  });

  tarjeta.append(nombre, pais, puntos, boton);
  contenedor.append(tarjeta);
});

const botonesVotar = document.querySelectorAll(".votar");

function mostrarTiempo() {
  const minutos = Math.floor(segundosRestantes / 60);
  const segundos = segundosRestantes % 60;

  const mm = String(minutos).padStart(2, "0");
  const ss = String(segundos).padStart(2, "0");

  cuenta.textContent = `${mm}:${ss}`;
}

function mostrarGanador() {
  let maxPuntos = participantes[0].puntos;

  participantes.forEach(jugador => {
    if (jugador.puntos > maxPuntos) {
      maxPuntos = jugador.puntos;
    }
  });

  const ganadores = participantes.filter(jugador => jugador.puntos === maxPuntos);

  if (ganadores.length === 1) {
    mensaje.textContent =
      `¡Votación cerrada! Ha ganado ${ganadores[0].nombre} con ${maxPuntos} puntos.`;
  } else {
    const nombres = ganadores.map(jugador => jugador.nombre).join(", ");
    mensaje.textContent =
      `¡Votación cerrada! Empate entre ${nombres} con ${maxPuntos} puntos.`;
  }
}

function actualizarCuenta() {
  const milisegundosRestantes = finTorneo - Date.now();
  segundosRestantes = Math.max(0, Math.ceil(milisegundosRestantes / 1000));
  mostrarTiempo();

  if (segundosRestantes === 0) {
    clearInterval(intervalo);
    intervalo = null;

    botonesVotar.forEach(boton => {
      boton.disabled = true;
    });

    mostrarGanador();
  }
}

function continuarTorneo() {
  botonIniciar.disabled = true;
  actualizarCuenta();

  if (segundosRestantes > 0) {
    botonesVotar.forEach(boton => {
      boton.disabled = false;
    });

    intervalo = setInterval(actualizarCuenta, 1000);
  }
}

botonIniciar.addEventListener("click", () => {
  if (finTorneo !== null) {
    return;
  }

  finTorneo = Date.now() + datosIniciales.duracionSegundos * 1000;
  localStorage.setItem("copaPixelFin", JSON.stringify(finTorneo));
  continuarTorneo();
});

botonResetear.addEventListener("click", () => {
  localStorage.removeItem("copaPixel");
  localStorage.removeItem("copaPixelFin");
  location.reload();
});

if (finTorneo === null) {
  mostrarTiempo();
} else {
  continuarTorneo();
}