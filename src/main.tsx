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


// Importowanie bibliotek i komponentów
import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './calculator/Main';
import Head from './components/Head';
import Foot from './components/Foot';

// Punkt wejściowy aplikacji
// Renderujemy odpowiednie komponenty w elemencie o id root (z pliku index.html)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Head />
    <Main />
    <Foot />
  </React.StrictMode>,
)
