/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  Komponent Calculator
  Klasa zawierająca główną logikę kalkulatora
  Renderuje komponenty Screen i Buttons
  --------------------------------------------
  Użycie: komponent Main
*/


// Importowanie bibliotek, komponentów i funkcji
import React from 'react'
import Screen from './Screen'
import { useReducer } from 'react';
import Buttons from './Buttons';
import reducer from './handlers/reducer';


// Główna klasa kalkulatora
const Calculator:React.FunctionComponent = () => {

    // Przechowywanie stanu kalkulatora
    // Używamy hooka useReducer - przekazujemy do niego funkcję reducer i stan początkowy
    // Funkcja reducer jest wywoływana za każdym razem, gdy użytkownik kliknie przycisk
    const [state, dispatch] = useReducer(reducer, "0");


    // Renderowanie komponentów - ekranu i przycisków
    return (
        <>
            <Screen display={state} />
            <Buttons dispatchReducer={dispatch}/>
        </>
    )
}

export default Calculator