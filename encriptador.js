const formulario = document.getElementById('formulario');
const textoIngresado = document.getElementById('texto-ingresado');
const textoResultado = document.getElementById('texto-resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // prevenir el comportamiento por defecto del formulario

    // obtener la referencia al elemento div que contiene la imagen y el texto "Ningún mensaje fue encontrado"
    const imagenResultado = document.querySelector('.img-resultado');
    const leyendaResultado= document.querySelector('.leyenda');
    const btnCopiar = document.querySelector('.copiar');
    
    // ajustar el tamaño del área de resultado
    document.getElementById('texto-resultado').rows = 15;

    if (event.submitter.value === "Encriptar!") {
        const textoEncriptado = encriptar(textoIngresado.value);
        textoResultado.value = textoEncriptado;
    } else if (event.submitter.value === "Desencriptar!") {
        const textoDesencriptado = desencriptar(textoIngresado.value);
        textoResultado.value = textoDesencriptado;
    }

    // ocultar la imagen y el texto "Ningún mensaje fue encontrado"
    imagenResultado.style.display = 'none';
    leyendaResultado.style.display = 'none';
    textoResultado.style.fontSize= '25px';
    textoResultado.style.width= '100%';
    textoResultado.style.color="#495057";
    textoResultado.style.fontFamily="Inter"
    btnCopiar.style.display="block";

});


function encriptar(texto) {
    // encriptar el texto aquí
    // Reemplazar cada letra con su respectivo valor
  let resultado = texto.replace(/e/g, "enter");
  resultado = resultado.replace(/i/g, "imes");
  resultado = resultado.replace(/a/g, "ai");
  resultado = resultado.replace(/o/g, "ober");
  resultado = resultado.replace(/u/g, "ufat");
  
  return resultado;
}

function desencriptar(texto) {
    // desencriptar el texto aquí
    let resultado = texto.replace(/enter/g, "e");
    resultado = resultado.replace(/imes/g, "i");
    resultado = resultado.replace(/ai/g, "a");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");
    
    return resultado;
}

function copiarTexto() {
    var textoResultado = document.querySelector(".texto-resultado");

    navigator.clipboard.writeText(textoResultado.value)
      .then(function() {
        alert("¡Texto copiado!");
      })
      .catch(function(error) {
        console.error('Error al copiar el texto: ', error);
      });
  }
  
