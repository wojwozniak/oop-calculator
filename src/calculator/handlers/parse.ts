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
 * @returns {string} - wynik działania
 */
const parse = (input: string): string[] => {
  const output: string[] = [];
  const stack: string[] = [];
  const tokens = input.split(/\s+/);

  const numberRegex = /^(\d+(\.\d+)?|\.\d+)$/;
  const operatorRegex = /^[+\-*/]$/;

  for (const token of tokens) {
    if (numberRegex.test(token)) {
      output.push(parseFloat(token).toString());
    } else if (operatorRegex.test(token)) {
      while (
        stack.length > 0 &&
        operatorRegex.test(stack[stack.length - 1]) &&
        getPrecedence(token) <= getPrecedence(stack[stack.length - 1])
      ) {
        output.push(stack.pop()!);
      }
      stack.push(token);
    } else {
      throw new Error('Nieznany token: ' + token);
    }
  }

  while (stack.length > 0) {
    if (!operatorRegex.test(stack[stack.length - 1])) {
      throw new Error('Nieznany operator: ' + stack[stack.length - 1]);
    }
    output.push(stack.pop()!);
  }

  return output;
}


/**
 * getPrecedence - zwraca priorytet operatora
 * @param {string} operator - operator, którego priorytet 
 * chcemy poznać 
 * @returns {number} - priorytet operatora
 */
const getPrecedence = (operator: string): number => {
  if (operator === '+' || operator === '-') {
    return 1;
  } else if (operator === '*' || operator === '/') {
    return 2;
  }
  return 0;
}

export default parse;