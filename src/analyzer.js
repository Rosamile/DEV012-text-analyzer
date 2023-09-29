
const analyzer = {

  getWordCount: (text) => {
    //Excluimos los espacios al inicio y al final y separamos la cadena por espacios
    const words = text.trim().split(/\s+/);
    return words.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

  },

  getCharacterCount: (text) => {
    return text.length;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },

  getCharacterCountExcludingSpaces: (text) => {

    //esta expresión excluira todos los caracteres dentro de la llave
    const words = text.match(/[^,.+":;'?¿¡)(=·%&/*+ \t \n]/g);
    // usar una expresión regular para simplificar
    return words.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    // sacar las palabras del texto
    const words = text.split(" ");
    // recorrer las palabras y sumar su longitud
    let suma = 0;
    for (let i = 0; i < words.length; i++) {
      const palabra = words[i];
      suma = palabra.length + suma;
    }
    // dividir la suma de la longitud en la cantidad de palabras
    return parseFloat((suma / words.length).toFixed(2));
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    // Va a recorrer el text identificando los números en la cadena de texto incluyendo decimales y enteros devolviendo un array
    const conteo = text.match(/\b\d+(\.\d+)?\b/g);
    //Va a condicionar el retorno en pantalla dando la cantidad de números
    if (conteo) { conteo.length; }
    else {
      return 0;
    }
    return conteo.length;
  },

  getNumberSum: (text) => {
    let suma = 0;
    const numeros1 = text.match(/\b\d+(\.\d+)?\b/g);
    if (!numeros1) {
      return 0;
    }
    for (let i=0;i<numeros1.length;i++) {
      suma += parseFloat(numeros1[i]);
    }
    return suma;
  },

  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`
};

export default analyzer;
