/*
  Projekt końcowy z przedmiotu
  Programowanie Obiektowe (sem. letni 2023)
  Kalkulator
  Wersja 1.0
  Autorzy:
  Anna Pierzchała, Wojciech Woźniak
  --------------------------------------------
  evaluator
    Oblicza wynik działania
    na podstawie stanu aplikacji.
  --------------------------------------------
  Użycie: Reducer
*/


// Import parsera
import parse from "./parse";

/**
 * Evaluator oblicza wartość działania 
 * na podstawie stanu aplikacji.
 * Korzysta z parse.
 * @param {string} input - stan aplikacji, 
 * który wykorzystujemy do obliczenia wyniku 
 * @returns {string} - wynik działania
 */
function evaluator(input: string): string {
    const onpArray = parse(input);
    console.log(onpArray);
    const stack: Expression[] = [];

    for (const token of onpArray) {
        if (!isNaN(parseFloat(token))) {
            const number = new NumberExpression(parseFloat(token));
            stack.push(number);
        } else if (token === '+') {
            const rightOperand = stack.pop();
            const leftOperand = stack.pop();
            if (leftOperand && rightOperand) {
                const operation = new AdditionOperation(leftOperand, rightOperand);
                stack.push(operation);
            } else {
                throw new Error('Invalid expression');
            }
        } else if (token === '-') {
            const rightOperand = stack.pop();
            const leftOperand = stack.pop();
            if (leftOperand && rightOperand) {
                const operation = new SubtractionOperation(leftOperand, rightOperand);
                stack.push(operation);
            } else if (rightOperand) {
                const operation = new UnaryMinusOperation(rightOperand);
                stack.push(operation);
            } else {
                throw new Error('Invalid expression');
            }
        } else if (token === '*') {
            const rightOperand = stack.pop();
            const leftOperand = stack.pop();
            if (leftOperand && rightOperand) {
                const operation = new MultiplicationOperation(leftOperand, rightOperand);
                stack.push(operation);
            } else {
                throw new Error('Invalid expression');
            }
        } else if (token === '/') {
            const rightOperand = stack.pop();
            const leftOperand = stack.pop();
            if (leftOperand && rightOperand) {
                const operation = new DivisionOperation(leftOperand, rightOperand);
                stack.push(operation);
            } else {
                throw new Error('Invalid expression');
            }
        }
    }

    if (stack.length === 1) {
        return stack[0].evaluate().toFixed(2).toString();
    } else {
        console.log(stack);
        throw new Error('Invalid expression');
    }
}

export default evaluator;


// Abstrakcyjna klasa wyrażenia
abstract class Expression {
    abstract evaluate(): number;
}

// Klasa reprezentująca liczbę
class NumberExpression extends Expression {
    constructor(private value: number) {
        super();
    }

    evaluate(): number {
        return this.value;
    }
}

// Klasa reprezentująca operację jednoargumentową
abstract class UnaryOperation extends Expression {
    constructor(protected operand: Expression) {
        super();
    }
}

// Klasa reprezentująca operację minus
class UnaryMinusOperation extends UnaryOperation {
    evaluate(): number {
        return -this.operand.evaluate();
    }
}

// Klasa reprezentująca operację dwuargumentową
abstract class BinaryOperation extends Expression {
    constructor(protected leftOperand: Expression, protected rightOperand: Expression) {
        super();
    }
}

// Klasa reprezentująca operację dodawania
class AdditionOperation extends BinaryOperation {
    evaluate(): number {
        return this.leftOperand.evaluate() + this.rightOperand.evaluate();
    }
}

// Klasa reprezentująca operację odejmowania
class SubtractionOperation extends BinaryOperation {
    evaluate(): number {
        return this.leftOperand.evaluate() - this.rightOperand.evaluate();
    }
}

// Klasa reprezentująca operację mnożenia
class MultiplicationOperation extends BinaryOperation {
    evaluate(): number {
        return this.leftOperand.evaluate() * this.rightOperand.evaluate();
    }
}

// Klasa reprezentująca operację dzielenia
class DivisionOperation extends BinaryOperation {
    evaluate(): number {
        return this.leftOperand.evaluate() / this.rightOperand.evaluate();
    }
}