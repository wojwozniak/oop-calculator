/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
    Komponent Buttons
    Komponent odpowiedzialny za wyrenderowanie
    przycisków i przekazywanie kliknięć do
    komponentu Calculator
  --------------------------------------------
  Użycie: komponent Calculator
*/


// Importy
import React from 'react'
import Button from './Button';
import buttons from './buttonList.json'


// Komponent Buttons (przyjmuje jeden argument - funkcję dispatchReducer odpowiadającą za przekazywanie kliknięć do komponentu Calculator)
const Buttons = ({dispatchReducer} : {dispatchReducer:React.Dispatch<string>}) => {

    

    // Każdy przycisk renderuje się jako element JSX
    // z odpowiednią nazwą, kluczem, wyrenderowanym symbolem i przypisaniem funkcji dispatchReducer
    return (
        <div className="button-container">
            {buttons.map((button) => {
                return <Button 
                    key={button.name} 
                    name={button.name} 
                    passData={
                        (e:string) => 
                        dispatchReducer(e)
                    } 
                    symbol={button.symbol} 
                />
            })}
        </div>
    )
}

export default Buttons