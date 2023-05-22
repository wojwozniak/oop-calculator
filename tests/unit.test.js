/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
    Plik: unit-tests.js
    Plik zawiera testy jednostkowe dla funkcji używanych w kalkulatorze
  --------------------------------------------
  Użycie: npm run test
*/
import { expect } from 'chai';
import { parse } from '../src/calculator/handlers/parse';

describe('Nazwa testu', () => {
    it('Opis testu', () => {
      expect(parse('2')).to.equal('2');
    });
  });