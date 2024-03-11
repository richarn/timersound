let segundosPreparacion = 5;
let cronometroPreparacion;
let cronometroAMRAP;
let minutosTotalesAMRAP = 10; // Cambia el tiempo total en minutos aquí
let segundosTotalesAMRAP = minutosTotalesAMRAP * 60;
let segundosRestantesAMRAP = segundosTotalesAMRAP;
let rondasCompletadas = 0;

function iniciarPreparacion() {
  cronometroPreparacion = setInterval(actualizarCronometroPreparacion, 1000);
}

function actualizarCronometroPreparacion() {
  segundosPreparacion--;
  if (segundosPreparacion === 0) {
    clearInterval(cronometroPreparacion);
    document.getElementById('cronometroPreparacion').style.display = 'none';
    document.getElementById('countdownSound2').play();
    iniciarAMRAP();
  } else if (segundosPreparacion === 3 ) {
    document.getElementById('countdownSound').play();
  
  } else if (segundosPreparacion === 2 ) {
    document.getElementById('countdownSound').play();

  } else if (segundosPreparacion === 1 ) {
    document.getElementById('countdownSound').play();
  }
  document.getElementById('segundosPreparacion').innerText = pad(segundosPreparacion);
}

function iniciarAMRAP() {
  cronometroAMRAP = setInterval(actualizarCronometroAMRAP, 1000);
}

function detenerCronometro() {
  clearInterval(cronometroAMRAP);
}

function reiniciarCronometro() {
  detenerCronometro();
  segundosRestantesAMRAP = segundosTotalesAMRAP;
  rondasCompletadas = 0;
  actualizarCronometroAMRAP();
  actualizarRondasCompletadas();
}

function actualizarCronometroAMRAP() {
  segundosRestantesAMRAP--;
  if (segundosRestantesAMRAP < 0) {
    detenerCronometro();
    alert("¡Tiempo terminado!");
    return;
  }

  let minutos = Math.floor(segundosRestantesAMRAP / 60);
  let segundos = segundosRestantesAMRAP % 60;

  document.getElementById('minutos').innerText = pad(minutos);
  document.getElementById('segundos').innerText = pad(segundos);
}

function pad(numero) {
  return numero < 10 ? '0' + numero : numero;
}

function actualizarRondasCompletadas() {
  rondasCompletadas++;
  document.getElementById('rondasCompletadas').innerText = "Rondas Completadas: " + rondasCompletadas;
}