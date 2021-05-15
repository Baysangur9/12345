const containingQuotes = (sentences) => {
  const sentencesWithQuotes = [];

  for (let i = 0; i < sentences.length; i++) {
    if(containsQuote(sentences[i])) {
      sentencesWithQuotes.push(sentences[i]);
    }
  }

  return sentencesWithQuotes;
}

const balance = (expenses, startingBalance) => {
  let remainingBalance = startingBalance;

  for (let i = 0; i < expenses.length; i++) {
    remainingBalance -= expenses[i];
  }

  return remainingBalance;
}

const evenLengthWord = (words) => {
  for (let i = 0; i < words.length; i++) {
    if(words[i].length % 2 === 0 && words[i].length !== 0) {
      return words[i];
    }
  }

  return undefined;
}

const snippets = (sentences, desiredWordCount = 3) => {
  const snippedSentences = [];

  for (let i = 0; i < sentences.length; i++) {
    snippedSentences.push(snippet(sentences[i], desiredWordCount));
  }

  return snippedSentences
}

const initials = (names) => {
  const namesAsInitials = [];

  for (let i = 0; i < names.length; i++) {
    namesAsInitials.push(convertToInitials(names[i]));
  }

  return namesAsInitials;
}

const pairAbbreviations = (pairData) => {
  const pairs = {};

  for (let i = 0; i < pairData.length; i++) {
    const abbreviation = pairData[i][0];
    const full_form = pairData[i][1];

    pairs[full_form] = abbreviation;
  }

  return pairs
}

/* вспомогательные функции, их трогать не нужно */
const convertToInitials = (name) => {
  return name.match(/\b[a-z]/ig).join('').toUpperCase();
}

const containsQuote = (sentence) => {
  return /(".+")/.test(sentence);
}

const snippet = (sentence, desiredWordCount = 3) => {
  const pattern = new RegExp(`((\\w+ ){${desiredWordCount}})(.*)`);

  return sentence.replace(pattern, '$1...')
}

module.exports = {
  containingQuotes,
  balance,
  initials,
  evenLengthWord,
  pairAbbreviations,
  snippets
}
