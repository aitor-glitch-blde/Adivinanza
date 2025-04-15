let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const adivinaciones = document.querySelector(".adivinaciones");
const ultimoResultado = document.querySelector(".ultimoResultado");
const bajoOAlto = document.querySelector(".bajoOAlto");
const contadorIntentos = document.querySelector(".contadorIntentos"); 

const enviarRespuesta = document.querySelector(".enviarRespuesta");
const campoAdivina = document.querySelector(".campoAdivina");

let contadorDeIntentos = 1;
let botonReiniciar;

function comprobarAdivinanza() {
    let adivinanzaUsuario = Number(campoAdivina.value);

    if (contadorDeIntentos === 1) {
      adivinaciones.textContent = "Intentos anteriores: ";
    }
    adivinaciones.textContent += adivinanzaUsuario + ", ";

    if (adivinanzaUsuario === numeroAleatorio) {
      ultimoResultado.textContent = "¡Felicidades! ¡Lo adivinaste!";
      ultimoResultado.style.backgroundColor = "green";
      bajoOAlto.textContent = "";
      finalizarJuego();
    } else if (contadorDeIntentos === 10) {
      ultimoResultado.textContent = "¡¡¡Fin del juego!!!";
      finalizarJuego();
    } else {
      ultimoResultado.textContent = "¡Incorrecto!";
      ultimoResultado.style.backgroundColor = "red";
      if (adivinanzaUsuario < numeroAleatorio) {
        bajoOAlto.textContent = "¡El número es muy bajo!";
      } else if (adivinanzaUsuario > numeroAleatorio) {
        bajoOAlto.textContent = "¡El número es muy grande!";
      }
    }

    contadorIntentos.textContent = `Te quedan ${10 - contadorDeIntentos} intentos.`;  

    contadorDeIntentos++;
    campoAdivina.value = "";
    campoAdivina.focus();
}

enviarRespuesta.addEventListener("click", comprobarAdivinanza);

function finalizarJuego() {
    campoAdivina.disabled = true;
    enviarRespuesta.disabled = true;
    botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "Iniciar nuevo juego";
    document.body.append(botonReiniciar);
    botonReiniciar.addEventListener("click", reiniciarJuego);
}

function reiniciarJuego() {
    contadorDeIntentos = 1;

    const parasReset = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < parasReset.length; i++) {
      parasReset[i].textContent = "";
    }

    botonReiniciar.parentNode.removeChild(botonReiniciar);

    campoAdivina.disabled = false;
    enviarRespuesta.disabled = false;
    campoAdivina.value = "";
    campoAdivina.focus();

    ultimoResultado.style.backgroundColor = "white";

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    contadorIntentos.textContent = `Te quedan 10 intentos.`;
}

const parasReset = document.querySelectorAll(".resultParas p");
for (let i = 0; i < parasReset.length; i++) {
  parasReset[i].textContent = "";
}
campoAdivina.focus();
