const cipher = {

  encode: (offset, string) => {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError('both arguments must be a number (offset) and a string (string)')
    }
    let mensajeCifrado = '';

    for (let i = 0; i < string.length; i++) {
      let letra = string[i];

      if (letra.match(/[a-z]/i)) {
        const codigo = letra.charCodeAt(0);
        const identificador = letra === letra.toUpperCase();
        const inicio = identificador ? 65 : 97;

        letra = String.fromCharCode(((codigo - inicio + offset) % 26 + 26) % 26 + inicio);

      }

      mensajeCifrado += letra;
    }

    return mensajeCifrado;
  },


  decode: (offset, string) => {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError('both arguments must be a number (offset) and a string (string)')
    }
    // se invierte el desplazamiento
    offset = -offset;
    return cipher.encode(offset, string);
  }
};

export default cipher;