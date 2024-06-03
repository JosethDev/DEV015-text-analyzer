const analyzer = {
  getWordCount: (text) => {
    const words = text.split(/[^A-Za-záéíóúÁÉÍÓÚüÜñÑ]+/u).filter(Boolean)
    return words.length;
  },

  getCharacterCount: (text) => {
    return text.length
  },

  getCharacterCountExcludingSpaces: (text) => {
    const filteredText = text.replace(/[^\w]|_/g, '');
    return filteredText.length;
  },

  getAverageWordLength: (text) => {
    const words = text.split(" ");
    let totalLength = 0;
    for (let index = 0; index < words.length; index++) {
      totalLength = totalLength + words[index].length;
    }

    const averageLength = totalLength / words.length;
    return Number(averageLength.toFixed(2));
  },

  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers === null) {
      return 0
    }
    return numbers.length
  },

  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers === null) {
      return 0
    }
    let totalSum = 0;
    for (let index = 0; index < numbers.length; index++) {
      totalSum = totalSum + parseFloat(numbers[index])
    }
    return totalSum
  },
};

export default analyzer;
