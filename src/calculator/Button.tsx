/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  Klasa Button
  Klasa reprezentująca przyciski kalkulatora
  --------------------------------------------
  Użycie: komponent Buttons
*/



// Definicja klasy Button
const Button = ({ name, symbol, passData }: {name: string, symbol: string, passData: React.Dispatch<string>}) => {

  // Każdy przycisk renderuje się jako element JSX
  // Po kliknięciu wywołuje funkcję przekazaną przez komponent Calculator przekazując jej swoją nazwę jako argument
  // Ma przypisane klasy btn oraz klasę odpowiadającą jego nazwie
  // Zawiera element p z klasą btn-label, który wyświetla symbol przycisku
  return (
    <button onClick={ ()=>passData(name) } className={`btn ${name}`}>
      <p className="btn-label">{symbol}</p>
    </button>
  )
}

export default Button;