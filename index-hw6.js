function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Угадай число

function guessTheNumber() {

    const randomNumber = getRandomIntInclusive(1, 100);
    console.log(randomNumber);

    alert('Давай сыграем в игру: попробуй угадать число, которое я загадал');

    let userRandomNumber = Number(prompt('Введи любое число от 1 до 100'));

    do {
        if (randomNumber > userRandomNumber) {
            userRandomNumber = Number(prompt(`Попробуй еще раз! Мое число больше ${userRandomNumber}`));
        } else if ((randomNumber < userRandomNumber)) {
            userRandomNumber = Number(prompt(`Не угадал, давай попробуем снова! Мое число меньше ${userRandomNumber}`));
        }
    } while (randomNumber !== userRandomNumber);

    alert(`Молодец! Ты угадал загаданное число ${randomNumber}`);
}


//Простая арифметика

function simpleArithmetic() {
    const totalTasks = 5;

    for (let i = 0; i < totalTasks; i++) {
        const randomNumber1 = getRandomIntInclusive(1, 10);
        const randomNumber2 = getRandomIntInclusive(1, 10);

        const actions = ['+', '-', '*', '/'];
        const action = actions[getRandomInt(0, 3)];

        let task;
        let correctAnswer;

        switch (action) {
            case '+':
                task = `${randomNumber1} + ${randomNumber2}`;
                correctAnswer = randomNumber1 + randomNumber2;
                break;

            case '-':
                if (randomNumber1 < randomNumber2) {
                    [randomNumber1, randomNumber2] = [randomNumber2, randomNumber1];
                    task = `${randomNumber1} - ${randomNumber2}`;
                }
                correctAnswer = randomNumber1 - randomNumber2;
                break;

            case '*':
                task = `${randomNumber1} * ${randomNumber2}`;
                correctAnswer = randomNumber1 * randomNumber2;
                break;

            case '/':
                task = `${randomNumber1 * randomNumber2} / ${randomNumber2}`;
                correctAnswer = randomNumber1;
                break;
        }

        let userAnswer = prompt(`Решите пример: ${task}`);

        if (userAnswer === null) {
            alert('Операция отменена пользователем');
            break;
        }

        if (parseInt(userAnswer) === correctAnswer) {
            alert('Правильно!');
        } else {
            alert(`Неверно! Правильный ответ: ${correctAnswer}`);
        }
    }
}

/*
//Задания на работу с кодом

//Задание 1

const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    if (array[i] === 10) {
        break;
    }
}


//Задание 2

const array2 = [1, 5, 4, 10, 0, 3];
let search = array2.indexOf(4);
console.log(search);


//Задание 3

const arr = [1, 3, 5, 10, 20];
const array3 = arr.join(' ');
console.log(array3);


//Задание 4

const array4 = [];
for (let i = 0; i < 3; i++) {
    array4.push(new Array(3).fill(1));
}
console.log(array4);


//Задание 5

const array5 = [1, 1, 1];
for (let i = 3; i <= 5; i++) {
    array5.push(2);
}
console.log(array5);


//Задание 6

let array6 = [9, 8, 7, 'a', 6, 5];

let arr6 = array6.sort();
arr6 = arr6.pop();

console.log(array6);


//Задание 7

const array7 = [9, 8, 7, 6, 5];

let userNumber = Number(prompt(`Введите число`));

let searchNumber = array7.includes(userNumber);

if (searchNumber === true) {
    alert(`Угадал, в ряду есть число ${userNumber}`);
} else {
    alert(`Не угадал, такого числа нет.`);
}


//Задание 8

let array8 = 'abcdef';

let arr8 = array8.split('').reverse().join('');

console.log(arr8);


//Задание 9

const array9 = [[1, 2, 3], [4, 5, 6]];

const array9Result = [].concat(...array9);

console.log(array9Result);


//Задание 10

const array10 = (prompt(`Введите через запятую элементы массива (целые числа в диапазоне от 1 до 10)`));

const userArray10Split = array10.split(",");

console.log('Массив строк:', userArray10Split);

const userArray10Num = userArray10Split.map(Number);
console.log('Массив чисел:', userArray10Num);

if (userArray10Num.some(num => num < 1 || num > 10 || isNaN(num))) {
    console.error('Ошибка: введены некорректные данные. Все числа должны быть целыми и находиться в диапазоне от 1 до 10.');
} else {

    for (let i = 0; i < userArray10Num.length - 1; i++) {
        const currentEl = userArray10Num[i];
        const nextEl = userArray10Num[i + 1];
        const sumOfAdjacentEl = currentEl + nextEl;
        console.log(`Сумма соседних элементов ${sumOfAdjacentEl}`);
    }
}


//Задание 11

const array11 = (prompt(`Введите через запятую элементы массива (целые числа)`));

const userArray11Split = array11.split(",");
const userArray11Num = userArray11Split.map(Number);
console.log('Исходный массив:', userArray11Num);

if (userArray11Num.some(num => isNaN(num))) {
    console.error('Ошибка: введены некорректные данные. Все элементы массива должны быть целыми числами.');
} else {
    const userArray11Map = userArray11Num.map(item => (item ** 2));
    console.log('Новый массив из квадратов исходного массива:', userArray11Map);
}


//Задание 12

const array12 = (prompt(`Введите исходный массив, состоящий из строк(и).`));

const userArray12Split = array12.split(' ');
console.log(`Исходный массив из строк(и):`, userArray12Split);

const array12Num = userArray12Split.map(word => word.length);
console.log('Новый массив из длины слов:', array12Num);


//Задание 13

const array13 = (prompt(`Введите через запятую элементы массива (любые целые числа)`));

const array13Split = array13.split(",");
const array13Num = array13Split.map(Number);
console.log('Исходный массив:', array13Num);

if (array13Num.some(num => isNaN(num))) {
    console.error('Ошибка: введены некорректные данные. Все элементы массива должны быть целыми числами.');
} else {
    const array13OfNegativeNumbers = array13Num.filter(item => item < 0);
    console.log('В исходном массиве содержатся отрицательные числа:', array13OfNegativeNumbers);
}


//Задание 14

const array14 = [];
for (let i = 0; i < 10; i++) {
    const randomElArray14 = getRandomIntInclusive(1, 10);
    array14.push(randomElArray14);
}
console.log(array14);

const evenArray14 = array14.filter(item => (item % 2 === 0));
console.log('Новый массив из четных элементов:', evenArray14);


//Задание 15

const array15 = [];
for (let i = 0; i < 6; i++) {
    const randomElArray15 = getRandomIntInclusive(1, 10);
    array15.push(randomElArray15);
}
console.log(array15);

const sumArray15 = array15.reduce((intermediate, value) => intermediate + value);

const arithmeticMeanArray15 = sumArray15 / array15.length;

console.log(`Среднее арифметическое массива равно: ${sumArray15} / ${array15.length} = ${arithmeticMeanArray15}`);*/