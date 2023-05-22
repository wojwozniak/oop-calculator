/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  Plik z typami akcji dla reduktora
  Definiuje rodzaje przycisków jakie mogą zostać kliknięte
  --------------------------------------------
  Użycie: komponent Calculator
*/



// Typy akcji dla reduktora (rodzaje przycisków)
export type action =
        | "AC" 
        | "equals" 
        | "square" 
        | "multiply" 
        | "divide" 
        | "plus" 
        | "minus" 
        | "dot" 
        | "zero" 
        | "one" 
        | "two" 
        | "three" 
        | "four" 
        | "five" 
        | "six" 
        | "seven" 
        | "eight" 
        | "nine";