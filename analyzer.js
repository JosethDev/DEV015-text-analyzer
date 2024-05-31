const analyzer = {
  getWordCount: (text) => {
    if (text === '') {
      return 0;
    }
    const words = text.split(/[^A-Za-záéíóúÁÉÍÓÚüÜñÑ]+/u).filter(Boolean);
    return words.length;
  },

  getCharacterCount: (text) => {
    if (text === '') {
      return 0;
    }
    return text.length
  },

  getCharacterCountExcludingSpaces: (text) => {
    if (text === '') {
      return 0;
    }
    const filter = /[^\w]|_/g;
    const filteredText = text.replace(filter, '');
    return filteredText.length;
  },

  getAverageWordLength: (text) => {
    if (text === '') {
      return 0;
    }
    const words = text.split(" ");

    let totalLength = 0;
    for (let index = 0; index < words.length; index++) {
      totalLength = totalLength + words[index].length;
    }

    const averageLength = totalLength / words.length;
    return Number(averageLength.toFixed(2));
  },

  getNumberCount: (text) => {
    if (text === '') {
      return 0;
    }
    const numbers = text.match(/(?:^|\s|-|,|\.)\d+(\.\d+)?(?=$|\s|-|,|\.)/g);
    if (numbers === null) {
      return 0
    }
    return numbers.length
  },

  getNumberSum: (text) => {
    if (text === '') {
      return 0;
    }
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
