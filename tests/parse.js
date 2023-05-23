/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  parse
    Oblicza wynik działania
    na podstawie stanu aplikacji.
  --------------------------------------------
  Użycie: Reducer
*/

/**
 * Parser operacji - przerabia string na tablicę
 * znaków w ONP
 * @param {string} input - stan aplikacji, który wykorzystujemy do obliczenia wyniku 
 * @returns {string[]} - wynik działania
 */
export function parse(input) {
  const operators = {
    '+': { precedence: 1 },
    '-': { precedence: 1 },
    '*': { precedence: 2 },
    '/': { precedence: 2 },
  };

  // Pomocnicze tablice
  const outputQueue = [];
  const operatorStack = [];
  let numberBuffer = '';

  // Pomocnicza funkcja do czyszcznia bufora
  const flushNumberBuffer = () => {
    if (numberBuffer !== '') {
      outputQueue.push(numberBuffer);
      numberBuffer = '';
    }
  };

  // Pomocnicza funkcja do przetwarzania operatorów
  const processOperator = (operator) => {
    flushNumberBuffer();

    let op1 = operator;
    let op2 = operatorStack[operatorStack.length - 1];

    while (
      operators[op2] &&
      ((operators[op1].precedence === operators[op2].precedence) ||
        (operators[op1].precedence < operators[op2].precedence))
    ) {
      outputQueue.push(operatorStack.pop());
      op2 = operatorStack[operatorStack.length - 1];
    }

    operatorStack.push(op1);
  };

  for (let i = 0; i < input.length; i++) {
    const token = input[i];

    if (token.match(/[0-9.]/)) {
      numberBuffer += token;
    } else if (token in operators) {
      processOperator(token);
    }
  }

  flushNumberBuffer();

  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
  }

  return outputQueue;
}

module.exports = parse;