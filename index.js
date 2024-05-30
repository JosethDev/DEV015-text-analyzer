import analyzer from './analyzer.js';

const items = document.querySelectorAll('.item');
const words = items[0]
const characters = items[1]
const charactersExclSpaces = items[2]
const averageWords = items[3]
const numbers = items[4]
const sumNumbers = items[5]


const textArea = document.querySelector('input[name:"user-input"]');
textArea.addEventListener('input', getText)

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
  words.textContent = "Words: "
  characters.textContent = "Characters: "
  charactersExclSpaces.textContent = "Characters excluding spaces: "
  averageWords.textContent = "Average words length: "
  numbers.textContent = "Numbers: "
  sumNumbers.textContent = "Sum of numbers: "
}
