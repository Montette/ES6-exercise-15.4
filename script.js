// Zadanie 1 //

const first = 'Hello';
const second = 'World';

const greeting = `${first} ${second}`;


// Zadanie 2 //

const multiply = (x = 1, y = 1) => x * y;


// Zadanie 3//

const average = (...args) => ([...args].reduce((a, b) => a + b, 0))/ [...args].length;


// Zadanie 4 //

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
average(...grades);


// Zadanie 5 //

const arr = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = arr;
