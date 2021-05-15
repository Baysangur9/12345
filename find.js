// ищем число в массиве numbers, которое меньше чем limit
module.exports.firstUnder = (numbers, limit) => {
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < limit) {
      return numbers[i];
    }
  }

  return undefined
}

// ищет строку в массиве strings, которая начинается с указанной буквы
module.exports.startsWith = (strings, letter) => {
  for (let i = 0; i < strings.length; i++) {
    if(strings[i][0] === letter) {
      return strings[i];
    }
  }

  return undefined;
}
