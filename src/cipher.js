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

        if (codigo >= 65 && codigo <= 90) {
          // mayus
          letra = String.fromCharCode(((codigo - 65 + offset) % 26) + 65);
        } else if (codigo >= 97 && codigo <= 122) {
          // minus
          letra = String.fromCharCode(((codigo - 97 + offset) % 26) + 97);
        }
      }

      mensajeCifrado += letra;
    }
    console.log(mensajeCifrado);
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