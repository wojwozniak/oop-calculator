/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
    Komponent Foot
    Komponent wyświetlający stopkę strony
    (część strony pod kalkulatorem)
  --------------------------------------------
  Użycie: main.tsx
*/



// Importowanie bibliotek stylu
import '../index.css';

// Definicja komponentu Foot
const Foot:React.FunctionComponent = () => {

  // Zwraca element p zawierający podtytuł strony
  return (
    <div id="foot">
        <p id="subtitle">Projekt końcowy - Programowanie Obiektowe</p>
        <p id="subtitle">APi, WWo</p>
    </div>
  );
}

export default Foot;