/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
    Komponent Head
    Komponent wyświetlający nagłówek strony
    (część strony ponad kalkulatorem)
  --------------------------------------------
  Użycie: main.tsx
*/


// Importowanie bibliotek stylu
import '../index.css';

// Definicja komponentu Head
const Head:React.FunctionComponent = () => {

    // Zwraca element h1 zawierający tytuł strony
    return (
        <h1 id="title">
            Kalkulator
        </h1>
  );
}

export default Head;