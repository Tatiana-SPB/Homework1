/*Угадай число
function guessTheNumber() {
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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


//Задание 1

function min(a, b) {
    if (a < b || a === b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(8, 4));
console.log(min(6, 6));


//Задание 2

function parityCheck(n) {
    if (n % 2 == 0) {
        return `Число ${n} четное`;
    } else {
        return `Число ${n} нечетное`;
    }
}

console.log(parityCheck(13));
console.log(parityCheck(22));


//Задание 3

let squareX = x => console.log(x ** 2);
squareX(15);

let squareY = y => {
    return (y ** 2);
}

console.log(squareY(25));


//Задание 4

let age = parseInt(prompt('Сколько Вам лет?'));

let ageCheck = age => {
    if (age > 0) {
        if (age <= 12) {
            return 'Привет, друг!';
        }
        return 'Добро пожаловать!';
    }
    return 'Вы ввели неправильное значение';
}

alert(ageCheck(age));


//Задание 5

let multiplier1 = parseInt(prompt('Введите первый множитель'));
let multiplier2 = parseInt(prompt('Введите второй множитель'));

let multy = (multiplier1, multiplier2) => {
    let number1 = isNaN(multiplier1);
    let number2 = isNaN(multiplier2);
    if (number1 == false && number2 === false) {
        return (multiplier1 * multiplier2);
    }
    return 'Одно или оба значения не являются числом';
}

console.log(multy(multiplier1, multiplier2));
alert(multy(multiplier1, multiplier2));


//Задание 6

let n = parseInt(prompt(`Введите число, которое нужно возвести в куб`));

let thirdDegree = (n) => {
    let cube = isNaN(n);
    if (cube == false) {
        return `n в кубе равняется ${n ** 3}`;
    }
    return `Переданный параметр не является числом`;
}

console.log(thirdDegree(n));

//Проверка работы функции с числами от 0 до 10

for (let n = 1; n <= 10; n++) {
    console.log(thirdDegree(n));
}


//Задание 7

const circle1 = {
    name: 'circle1',
    radius: 10,
    area: getArea,
    length: getPerimeter
}

const circle2 = {
    name: 'circle2',
    radius: 5,
    area: getArea,
    length: getPerimeter
}

function getArea() {
    let r = Number(this.radius);
    let resultArea = 3.14 * r ** 2;
    return `Площадь круга ${this.name} равняется ${resultArea}`;
}

function getPerimeter() {
    let resultPerimeter = 2 * 3.14 * Number(this.radius);
    return `Длина окружности ${this.name} равняется ${resultPerimeter}`;
}

console.log(circle1.area());
console.log(circle1.length());
console.log(circle2.area());
console.log(circle2.length());