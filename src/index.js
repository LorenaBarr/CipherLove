import { cifrar, descifrar}  from './cipher.js';

// console.log(cipher);

const botonCifrar = document.getElementById('btn-cifrar');
const textareaCifrar = document.getElementById('mensaje-usuario'); // Sin .value aquí
const selectMenuCifrar = document.getElementById('clave');

botonCifrar.addEventListener('click', () =>{
  const textoUsuario = textareaCifrar.value;
  const valorClave = selectMenuCifrar.value;

  const mensajeCifrado = cifrar(textoUsuario, parseInt(valorClave));
  document.getElementById('mensajeCifrado').value = mensajeCifrado;
  
});

const botonDescifrar = document.getElementById('descifra'):
const textareaDescifrar = document.getElementById('mensaje-usuario');
const selectMenuDescifrar = document.getElementById('clave2');

botonDescifrar.addEventListener('click', () => {
   const textoUsuario = textareaDescifrar.value;
   const valorClave = selectMenuCifrar.value;

   const mensajeDescifrado = descifrar(textoUsuario, parseInt(valorClave));
   document.getElementById('mensaje-descifrado').value = mensajeDescifrado

})
