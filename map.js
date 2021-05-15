/* добавляет восклицательный знак в конец каждого элемента массива */
const exclamations = (strings) => {
  const loudStrings = [];

  for (let i = 0; i < strings.length; i++) {
    loudStrings.push(strings[i] + "!");
  }

  return loudStrings;
}

/* преобразует все числа из массива в квадрат */
const squareAll = (numbers) => {
  const squares = [];

  for (let i = 0; i < numbers.length; i++) {
    squares.push(numbers[i] * numbers[i]);
  }

  return squares;
}

/* заменяет все слова в массиве на их первые буквы */
const firstLetters = (words) => {
  const letters = []

  for (let i = 0; i < words.length; i++) {
    letters.push(words[i][0]);
  }

  return letters
}

module.exports = { exclamations, squareAll, firstLetters };
