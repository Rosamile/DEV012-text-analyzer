import analyzer from './analyzer.js'; //127.0.0.1:3000/src/index.html

const textarea = document.querySelector('textarea[name="user-input"]');
const resetbutton = document.getElementById('reset-button');

resetbutton.addEventListener('click', () => {
  textarea.value ='';
});

//Cuando se ejecute el evento input, se ejecutaran las funciones del analyzer
function contador1() {
  const text = textarea.value
  document.querySelector('[data-testid="word-count"]').innerHTML = 'Cantidad de palabras: ' + analyzer.getWordCount(text);
  document.querySelector('[data-testid="character-count"]').innerHTML = 'Cantidad de caracteres: ' + analyzer.getCharacterCount(text);
  document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML = 'Cantidad de caracteres sin espacios: ' + analyzer.getCharacterCountExcludingSpaces(text);
  document.querySelector('[data-testid="word-length-average"]').innerHTML = 'Longitud media de palabras: ' + analyzer.getAverageWordLength(text);
  document.querySelector('[data-testid="number-count"]').innerHTML = 'Cantidad de números: ' + analyzer.getNumberCount(text);
  document.querySelector('[data-testid="number-sum"]').innerHTML = 'Suma de números: ' + analyzer.getNumberSum(text);
}
textarea.addEventListener('input', contador1);
