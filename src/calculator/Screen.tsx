/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
    Komponent Screen
    Komponent wyświetlający ekran kalkulatora
    (Przyjmuje jego zawartość jako parametr)
  --------------------------------------------
  Użycie: komponent Calculator
*/



// Definicja komponentu Screen
const Screen = ({ display }: { display: string }) => {


  // Zwraca element div zawierający ekran kalkulatora
  // (przekazany mu parametr display zawiera zawartość ekranu)
  return (
    <div id="screen">
      <p id="screen-display">{display}</p>
    </div>
  )
}

export default Screen