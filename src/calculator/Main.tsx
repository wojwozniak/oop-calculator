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
  Użycie: plik startowy main.tsx
*/

import '../index.css';
import Calculator from './Calculator';

const Main: React.FunctionComponent = () => {
  return (
    <div id="app">
      <p id="brand">Vadowitz</p>
      <p id="brand-text">Electronic Calculator</p>
      <Calculator />
    </div>
  );
}

export default Main;