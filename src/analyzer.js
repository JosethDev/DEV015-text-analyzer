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
    const regex = /[^\w]|_/g;

    const filteredText = text.replace(regex, '');
    return filteredText.length;
  },

  getAverageWordLength: (text) => {
    if (text === '') {
      return 0;
    }
    const words = text.split(/[^A-Za-záéíóúÁÉÍÓÚüÜñÑ]+/u).filter(Boolean);

    if (words.length === 0) {
      return 0;
    }
    let totalLength = 0; // Inicializamos el acumulador en 0
    for (let index = 0; index < words.length; index++) {
      console.log("test count",words[index] + " - " + words[index].length)

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
      totalSum += parseFloat(numbers[index], 10)
    }
    return totalSum
  },
};

export default analyzer;
