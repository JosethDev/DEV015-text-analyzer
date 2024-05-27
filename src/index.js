import analyzer from './analyzer.js';

const words = document.querySelector('.words');
const characters = document.querySelector('.characters');
const charactersExclSpaces = document.querySelector('.characters-excl-spaces');
const averageWords = document.querySelector('.average-words');
const numbers = document.querySelector('.numbers');
const sumNumbers = document.querySelector('.sum-numbers');


const textArea = document.getElementsByName('user-input')[0];
textArea.addEventListener('input', getText)

// titulos
const LABEL_WORDS = "Words: "
const LABEL_CARACTERS = "Characters: "
const LABEL_CARACTERSEXCLSPACES = "Characters excluding spaces: "
const LABEL_AVERAGEWORDLEGTH = "Average words length: "
const LABEL_NUMBERS = "Numbers: "
const LABEL_SUMNUMBERS = "Sum of numbers: "

function getText() {
  const typeText = textArea.value

  //contador de palabras
  const valueWordCount = analyzer.getWordCount(typeText)
  words.textContent = "Words: " + valueWordCount

  const valueCharacterCount = analyzer.getCharacterCount(typeText)
  characters.textContent = "Characters: " + valueCharacterCount

  const valueCharacterCountExcSpaces = analyzer.getCharacterCountExcludingSpaces(typeText)
  charactersExclSpaces.textContent = "Characters excluding spaces: " + valueCharacterCountExcSpaces
  const valueAverangeWordLength = analyzer.getAverageWordLength(typeText)
  averageWords.textContent = "Average words length: " + valueAverangeWordLength
  //contador de números
  const valueCountNumbers = analyzer.getNumberCount(typeText)
  numbers.textContent = "Numbers: " + valueCountNumbers
  // suma de números
  const valueSumNumbers = analyzer.getNumberSum(typeText)
  sumNumbers.textContent = "Sum of Numbers: " + valueSumNumbers
}
const button = document.getElementById('reset-button')
button.addEventListener('click', cleanText)
function cleanText() {
  textArea.value = '';
  words.textContent = LABEL_WORDS
  characters.textContent = LABEL_CARACTERS
  charactersExclSpaces.textContent = LABEL_CARACTERSEXCLSPACES
  averageWords.textContent = LABEL_AVERAGEWORDLEGTH
  numbers.textContent = LABEL_NUMBERS
  sumNumbers.textContent = LABEL_SUMNUMBERS
}
