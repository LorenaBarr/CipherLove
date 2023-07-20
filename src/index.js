import cipher from './cipher.js';

// console.log(cipher);

const boton = document.getElementById('btn-cifrar');
const textarea = document.getElementById('mensaje-usuario'); // Sin .value aquí
const selectMenuDesplegable = document.getElementById('clave');

function capturaTexto() {
  const textoUsuario = textarea.value;
  const valorClave = selectMenuDesplegable.value;
  //console.log(textoUsuario, valorClave);
}

boton.addEventListener('click', capturaTexto);

const boton2 = document.getElementById('descifro'); // Cambiar el ID aquí
const textarea2 = document.getElementById('descifrar-usuario'); // Sin .value aquí
const selectMenuDesplegable2 = document.getElementById('clave2');

function capturaTexto2() {
  const textoUsuario2 = textarea2.value; // Utilizar textarea2 aquí
  const valorClave2 = selectMenuDesplegable2.value;
  console.log(textoUsuario2, valorClave2);
}

boton2.addEventListener('click', capturaTexto2); // Cambiar el evento y función aquí
