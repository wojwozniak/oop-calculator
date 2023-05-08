/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  Klasa Main
  Klasa zawiera główny komponent aplikacji
  Wykorzystywana jest do stworzenia "obudowy kalkulatora"
  i wywołania komponentu Calculator zawierającego jego logikę
  --------------------------------------------
  Użycie: main.tsx
*/



// Importy
import React from 'react';
import Calculator from './Calculator';

// Definicja klasy Main
const Main: React.FunctionComponent = () => {

  // Zwraca element div (reprezentujący ramkę kalkulatora) zawierający:
  // - elementy dekoracyjne na górze kalkulatora
  // - komponent Calculator (zawierający logikę kalkulatora i renderujący jego przyciski i ekran)
  return (
    <div id="app">
      <p id="brand">Vadowitz</p>
      <p id="brand-text">Electronic Calculator</p>
      <Calculator />
    </div>
  );
}

export default Main;