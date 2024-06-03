import analyzer from './analyzer.js';

const items = document.querySelectorAll('.item');
const words = items[0]
const characters = items[1]
const charactersExclSpaces = items[2]
const averageWords = items[3]
const numbers = items[4]
const sumNumbers = items[5]


const textArea = document.querySelector('textarea[name="user-input"]');
textArea.addEventListener('input', getText);

function getText(event) {
  const typeText = event.target.value

  const valueWordCount = analyzer.getWordCount(typeText)
  words.textContent = "Words: " + valueWordCount

  const valueCharacterCount = analyzer.getCharacterCount(typeText)
  characters.textContent = "Characters: " + valueCharacterCount

  const valueCharacterCountExcSpaces = analyzer.getCharacterCountExcludingSpaces(typeText)
  charactersExclSpaces.textContent = "Characters excluding spaces: " + valueCharacterCountExcSpaces

  const valueAverangeWordLength = analyzer.getAverageWordLength(typeText)
  averageWords.textContent = "Average words length: " + valueAverangeWordLength

  const valueCountNumbers = analyzer.getNumberCount(typeText)
  numbers.textContent = "Numbers: " + valueCountNumbers

  const valueSumNumbers = analyzer.getNumberSum(typeText)
  sumNumbers.textContent = "Sum of Numbers: " + valueSumNumbers
}
const button = document.getElementById('reset-button')
button.addEventListener('click', cleanText)

function cleanText() {
  textArea.value = '';
  words.textContent = "Words: 0"
  characters.textContent = "Characters: 0"
  charactersExclSpaces.textContent = "Characters excluding spaces: 0"
  averageWords.textContent = "Average words length: 0"
  numbers.textContent = "Numbers: 0"
  sumNumbers.textContent = "Sum of numbers: 0"
}
