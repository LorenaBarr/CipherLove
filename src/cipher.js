const cipher = {
  cifrar: function (string, offset) {
    let mensajeCifrado = '';

    for (let i = 0; i < string.length; i++) {
      let letra = string[i];

      if (letra.match(/[a-z]/i)) {
        const codigo = letra.charCodeAt(i);

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

    return mensajeCifrado;
  },

  descifrar: function (string, offset) {
    // se invierte el desplazamiento
    offset = -offset;
    return this.cifrar(string, offset);
  }
};

export default cipher;
