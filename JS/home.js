const texto = "Lo que buscas... lo encontramos";
const velocidad = 100; // Velocidad de escritura en ms
const espera = 1500; // Tiempo antes de borrar
const reinicio = 500; // Tiempo antes de volver a escribir

let elemento = document.getElementById("texto");

function escribirTexto() {
    let i = 0;
    const escribir = setInterval(() => {
        if (i < texto.length) {
            elemento.textContent = texto.substring(0, i + 1); // Escribe el texto
            i++;
        } else {
            clearInterval(escribir); // Detiene la escritura
            setTimeout(borrarTexto, espera); // Espera antes de borrar
        }
    }, velocidad);
}

function borrarTexto() {
    elemento.textContent = ""; // Limpia todo el texto de una vez
    setTimeout(escribirTexto, reinicio); // Reinicia el proceso de escritura
}

document.addEventListener("DOMContentLoaded", escribirTexto);
