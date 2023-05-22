/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  Funkcja parse
    Zawiera funkcję, która oblicza wynik działania
    na podstawie stanu aplikacji.
  --------------------------------------------
  Użycie: funkcja Reducer
*/

/**
 * Funkcja obliczająca wynik działania na podstawie stanu aplikacji.
 * @param {string} number - stan aplikacji, który wykorzystujemy do obliczenia wyniku 
 * @returns {string} - wynik działania
 */
export default function parse(number: string): string {
  // #TODO: Implementacja funkcji
  // Chcemy tu nawalić dużo klas
  let counted = eval(number);
  let output = Math.round((counted + Number.EPSILON) * 100) / 100;
  return output.toString();
}