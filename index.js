import cipher from './cipher.js';

const botonCifrar = document.getElementById('btn-cifrar');
const textareaCifrar = document.getElementById('mensaje-usuario1'); // Sin .value aquí
const selectMenuCifrar = document.getElementById('clave');

botonCifrar.addEventListener('click', () => {
  const textoUsuario = textareaCifrar.value;
  const valorClave = selectMenuCifrar.value;
  const mensajeCifrado = cipher.encode(parseInt(valorClave), textoUsuario);
  document.getElementById('mensaje-Cifrado').value = mensajeCifrado;
});

const botonDescifrar = document.getElementById('descifra');
const textareaDescifrar = document.getElementById('mensaje-usuario');
const selectMenuDescifrar = document.getElementById('clave2');

botonDescifrar.addEventListener('click', () => {
  const textoUsuario = textareaDescifrar.value;
  const valorClave = selectMenuDescifrar.value;
  const mensajeDescifrado = cipher.decode(parseInt(valorClave), textoUsuario);
  document.getElementById('Kdescifrado').value = mensajeDescifrado;
});

