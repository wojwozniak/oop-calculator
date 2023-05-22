/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  Parse
    Oblicza wynik działania
    na podstawie stanu aplikacji.
  --------------------------------------------
  Użycie: Reducer
*/

/**
 * Funkcja obliczająca wynik działania na podstawie stanu aplikacji.
 * @param {string} number - stan aplikacji, który wykorzystujemy do obliczenia wyniku 
 * @returns {string} - wynik działania
 */
const parse = (number: string): string => {
  // #TODO: Implementacja funkcji
  // Chcemy tu nawalić dużo klas
  // Możemy zrobić osobny calculate
  // Który z kolei będzie miał osobne klasy
  // na różne operacje
  let counted = eval(number);
  let output = Math.round((counted + Number.EPSILON) * 100) / 100;
  return output.toString();
}

export default parse;