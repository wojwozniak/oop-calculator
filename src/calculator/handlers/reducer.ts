/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  Reducer
  Zawiera główny reducer, który obsługuje wszystkie 
  akcje wykonywane przez użytkownika (wpływające
  na stan aplikacji).
  Po kliknięciu przycisku '=' wywołujemy
  evaluator, która oblicza wynik działania.
  --------------------------------------------
  Użycie: komponent Calculator
*/

// Importy
import evaluator from './evaluator.ts';

/**
 * Główny reducer aplikacji - obsługuje wszystkie akcje
 * które użytkownik może wykonać na kalkulatorze.
 * @param {string} state - stan aplikacji 
 * @param {action} action - akcja wykonywana przez użytkownika
 * @returns {string} - nowy stan aplikacji
 */
const reducer = (state: string, action: string): string => {
    // Usuwaniem zajmujemy się na samym początku
    // (nie marnujemy zasobów na definiowanie zmiennych pomocniczych)
    if(action == "del") {
        if(state.length > 1) {
            return state.slice(0, -1);
        } else {
            return "0";
        }
    }

    // Deklarujemy zmienne pomocnicze
    // Możemy je zadeklarować bez useState, ponieważ
    // jesteśmy wewnątrz reducera - będziemy używać ich tylko raz

    // newState - nowy stan aplikacji
    let newState: string;
    // helper - zmienna pomocnicza, która przechowuje stan aplikacji
    let helper: string;
    // last - ostatni znak w stanie aplikacji
    const lastSign = state[state.length - 1];
    // preLast - przedostatni znak w stanie aplikacji
    const preLastSign = state[state.length - 2];


    // Sprawdzimy teraz kilka warunków - ustalimy, 
    // czy użytkownik może wykonać daną akcję 

    // Nie pozwalamy na dodawanie znaku (niebędącego unarnym minusem) 
    // jeśli stan jest pusty (domyślnie 0)
    if (state === "0") {
        if (action === "plus" || action === "multiply" || action === "dot" || action === "divide") {
            return "0";
        }

        // Aktualizujemy zmienną helper
        helper = "";
    } else {
        helper = state;
    }

    // Główny switch, który obsługuje wszystkie akcje
    switch (action) {
        // Obliczanie wartości (wywołanie funkcji parse)
        case 'equals':
            if (!isSign(lastSign)) {
                helper = state;
                newState = evaluator(helper);
            } else {
                newState = state;
            }
            break;
        // Obliczanie pierwiastka (wywołanie funkcji parse, 
        // obliczenie pierwiastka z wyniku), i znowu parse
        case 'square':
            if (!isSign(lastSign)) {
                helper = state;
                newState = evaluator(Math.sqrt(parseInt(evaluator(helper), 10)).toString());
            } else {
                newState = state;
            }
            break;
        // Resetowanie stanu aplikacji
        case 'AC':
            newState = "0";
            break;
        // Wpisywanie liczb
        case 'zero':
            newState = helper + '0';
            break;
        case 'one':
            newState = helper + "1";
            break;
        case 'two':
            newState = helper + "2";
            break;
        case 'three':
            newState = helper + "3";
            break;
        case 'four':
            newState = helper + "4";
            break;
        case 'five':
            newState = helper + "5";
            break;
        case 'six':
            newState = helper + "6";
            break;
        case 'seven':
            newState = helper + "7";
            break;
        case 'eight':
            newState = helper + "8";
            break;
        case 'nine':
            newState = helper + "9";
            break;
        // Obliczenia - dla większości obliczeń sprawdzamy tylko,
        // czy ostatni element w stringu jest znakiem 
        // (jeśli tak, to nie pozwalamy)
        case 'plus':
            if (!isSign(lastSign)) {
                newState = helper + "+";
            } else {
                newState = helper;
            }
            break;
        case 'multiply':
            if (!isSign(lastSign)) {
                newState = helper + "*";
            } else {
                newState = helper;
            }
            break;
        case 'divide':
            if (!isSign(lastSign)) {
                newState = helper + "/";
            } else {
                newState = helper;
            }
            break;
        // Minus jest trochę bardziej skomplikowany -
        // może być jedynym znakiem i pojawić się zaraz po innym znaku
        case "minus":
            if (lastSign === '.' || (isSign(lastSign) && (preLastSign === "+" || preLastSign ===
                "-" || preLastSign === "/" || preLastSign === "*" || preLastSign === undefined))) {
                newState = helper;
            }
            else {
                newState = helper + '-';
            }
            break;
        // Kropka - sprawdzenie czy legalne w osobnej funkcji
        case "dot":
            if (isDotPlacable(state, lastSign)) {
                newState = state + ".";
            } else {
                newState = state;
            }
            break;
        default:
            throw new Error();
    }
    return newState;
}

/**
 * Funkcja sprawdzająca, czy dany symbol jest znakiem
 * @param {string} sign - sprawdzany symbol 
 * @returns {boolean}
 */
const isSign = (sign: string): boolean => {
    if (sign !== "+" && sign !== "*" && sign !== "/" && sign !== "." && sign !== "-") {
        return false;
    }
    return true;
}

/**
 * Funkcja sprawdzająca, czy aktualnie można
 * umieścić kropkę w stanie aplikacji
 * @param {string} state - aktualny stan aplikacji 
 * @param {string} lastSign - ostatni znak w stanie aplikacji 
 * @returns {boolean}
 */
const isDotPlacable = (state: string, lastSign: string): boolean => {

    // Liczby typu 0.2
    if(state === '0') {
        return true;
    }

    // Funkcja pomocnicza, która sprawdza, czy dany znak jest znakiem funkcyjnym
    const isFunctionSign = (x: string) => isSign(x) && x !== '.';

    // Zmienne pomocnicze
    let number = true;
    let sign = true;

    for (let i = 0; i < state.length; i++) {
        if (state[i] === '.') {
            number = false;
            sign = false;
        } else if (isFunctionSign(state[i])) {
            sign = true;
        } else if (!isSign(state[i])) {
            number = true;
        }
    }
    if (number === true && sign === true && !isSign(lastSign)) {
        return true;
    } else return false;
}


export default reducer;
