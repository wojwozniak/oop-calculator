/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  Funkcja reducer
  Zawiera główny reducer, który obsługuje wszystkie 
  akcje wykonywane przez użytkownika (wpływające
  na stan aplikacji).
  Po kliknięciu przycisku '=' wywoływana jest funkcja
  parse, która oblicza wynik działania.
  --------------------------------------------
  Użycie: komponent Calculator
*/

// Importujemy możliwe typy akcji z pliku action.ts
import { action } from './action.ts';
import parse from './parse.ts';

/**
 * Główny reducer aplikacji - obsługuje wszystkie akcje
 * które użytkownik może wykonać na kalkulatorze.
 * @param {string} state - stan aplikacji 
 * @param {action} action - akcja wykonywana przez użytkownika
 * @returns {string} - nowy stan aplikacji
 */
export default function reducer(state: string, action: action): string {
    // Deklarujemy zmienne pomocnicze
    // Możemy je zadeklarować bez useState, ponieważ
    // jesteśmy wewnątrz reducera - będziemy używać ich tylko raz

    // newState - nowy stan aplikacji
    let newState: string;
    // helper - zmienna pomocnicza, która przechowuje stan aplikacji
    let helper: string;
    // last - ostatni znak w stanie aplikacji
    let last = state[state.length - 1];
    // preLast - przedostatni znak w stanie aplikacji
    let preLast = state[state.length - 2];


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

    // Check if calculation won't throw an error
    const isCalculationElgible = () => {
        if (isLastSign(last)) {
            return false;
        }
        return true;
    }

    // Check if there is a dot in state that isn't followed by a sign (making sure that there is at least one number inbetween is taken care by main switch statement)
    const isDotPlacable = () => {
        // Check if given character is a sign or not
        const isAnySign = (x: string) => {
            if (x === "+" || x === "-" || x === "/" || x === "*" || x === ".") {
                return true;
            }
            return false;
        }

        // Same as above but excluding dots
        const isFunctionSign = (x: string) => {
            if (x === "+" || x === "-" || x === "/" || x === "*") {
                return true;
            }
            return false;
        }

        let number = true;
        let sign = true;

        for (let i = 0; i < state.length; i++) {
            if (state[i] === '.') {
                number = false;
                sign = false;
            } else if (isFunctionSign(state[i])) {
                sign = true;
            } else if (!isAnySign(state[i])) {
                number = true;
            }
        }
        if (number === true && sign === true && !isLastSign(last)) {
            return true;
        } else return false;
    }

    // Main reducer
    switch (action) {
        // Calculation
        case 'equals':
            if (isCalculationElgible()) {
                helper = state;
                newState = parse(helper);
            } else {
                newState = state;
            }
            break;
        case 'square':
            // Square root uses same function as calculation (it calculates first)
            if (isCalculationElgible()) {
                helper = state;
                newState = parse(Math.sqrt(parseInt(parse(helper), 10)).toString());
            } else {
                newState = state;
            }
            break;
        // AC button resets calculator to default
        case 'AC':
            newState = "0";
            break;
        // Numbers are no problem, you can put then anywhere
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
        // All the calculations (except the subtraction) - we only need to check if last sign isn't a dot or sign
        case 'plus':
            if (!isLastSign(last)) {
                newState = helper + "+";
            } else {
                newState = helper;
            }
            break;
        case 'multiply':
            if (!isLastSign(last)) {
                newState = helper + "*";
            } else {
                newState = helper;
            }
            break;
        case 'divide':
            if (!isLastSign(last)) {
                newState = helper + "/";
            } else {
                newState = helper;
            }
            break;
        // Minus are a bit more special - they can be the only sign or appear after other signs that are not a dot
        case "minus":
            if (last === '.' || (isLastSign(last) && (preLast === "+" || preLast ===
                "-" || preLast === "/" || preLast === "*" || preLast === undefined))) {
                newState = helper;
            }
            else {
                newState = helper + '-';
            }
            break;
        // Dot are most tricky, we need to make sure that there won't be any sign directly after a dot and that there won't be two dots without any sign inbetween
        case "dot":
            if (isDotPlacable()) {
                newState = state + ".";
            } else {
                newState = state;
            }
            break;
        default:
            throw new Error();
    } // end of switch
    return newState;
}


const isLastSign = (lastSign:string) => {
    if (lastSign !== "+" && lastSign !== "*" && lastSign !== "/" && lastSign !== "." && lastSign !== "-") {
        return false;
    }
    return true;
}