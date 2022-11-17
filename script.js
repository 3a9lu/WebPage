// Задание 3. Выведите на экран любое значение
console.log("15");

// Задание 4. Создайте две переменные с числами. Выведите их на экран
const numberOne = 10;
const numberTwo = 6;
console.log(numberOne);
console.log(numberTwo);

// 5 Сложите две переменные и выведите результат на экран
console.log(numberOne + numberTwo);

// Задание 6. Поищите в интернете функции для преобразования строки в верхний и нижний регистр. Выведите на экран два этих значения
const word = "Веб-разработка";
console.log(word.toUpperCase());
console.log(word.toLowerCase());

// Задание 7. Запишите в свой скрипт реализацию каждой базовой операции над числами. 
// Также посмотрите в интернете как возводить число в квадрат, получать остаток от деления
console.log(numberOne + numberTwo);
console.log(numberOne);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);
console.log(numberOne ** 2); // возведение в квадрат
console.log(numberOne % numberTwo); // остаток от деления

// Задание 8. Придумайте два задания и покажите преподавателю
// 1. Создайте массиы и выведите второй элемент массива.
let fruits = ["Яблоко", "Апельсин", "Слива"];
console.log(fruits[1]);

// 2. Вывести случайное число от 0 до 100.
console.log("Число:", Math.round(Math.random() * 101))

// Калькулятор любви
function LoveCalculator() {
    firstName = prompt("Введите его имя:");
    secondName = prompt("Введите её имя");
    result = Math.round((Math.random(0, 100) * 100), 0);
    alert(`${firstName} подходит к ${secondName} на ${result} процентов!`);
}

function BMICalculator() {
    height = prompt("Введите рост в сантиметрах");
    weight = prompt("Введите вес");

    bmi = weight / (height * height)  * 10000;

    if (bmi <= 18.5) {
        alert(`Индекс массы тела: ${bmi}, у Вас недостаточный вес!`);
    } 
    else if (bmi <= 25) {
        alert(`Индекс массы тела: ${bmi}, у Вас всё нормально!`);
    } 
    else if (bmi <= 30) {
        alert(`Индекс массы тела: ${bmi}, у Вас излишки веса!`);
    } 
    else if (bmi > 30) {
        alert(`Индекс массы тела: ${bmi}, у Вас ожирение!`);
    }
}

function LeapOrNonLeap() {
    year = prompt("Введите год");

    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
        alert("Високосный год");
    } 
    else {
        alert("Не является високосным");
    }
}

function WhoPaysForDinner() {
    names = prompt("Введите имена людей через запятую");

    names = names.split(",");

    result = Math.round((Math.random(0, names.length) * names.length), 0);

    alert(`Оплачивать ужин будет ${names[result]}`);
}