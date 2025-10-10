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
    let correctAnswerCountSimpleArithmetic = 0;
    const totalTasks = 5;

    for (let i = 0; i <= totalTasks; i++) {
        const randomNumber1 = getRandomIntInclusive(1, 10);
        const randomNumber2 = getRandomIntInclusive(1, 10);

        const actions = ['+', '-', '*', '/'];
        const action = actions[getRandomInt(0, 3)];

        let task;
        let correctAnswerSimpleArithmetic;

        switch (action) {
            case '+':
                task = `${randomNumber1} + ${randomNumber2}`;
                correctAnswerSimpleArithmetic = randomNumber1 + randomNumber2;
                break;

            case '-':
                if (randomNumber1 < randomNumber2) {
                    [randomNumber1, randomNumber2] = [randomNumber2, randomNumber1];
                    task = `${randomNumber1} - ${randomNumber2}`;
                }
                correctAnswerSimpleArithmetic = randomNumber1 - randomNumber2;
                break;

            case '*':
                task = `${randomNumber1} * ${randomNumber2}`;
                correctAnswerSimpleArithmetic = randomNumber1 * randomNumber2;
                break;

            case '/':
                task = `${randomNumber1 * randomNumber2} / ${randomNumber2}`;
                correctAnswerSimpleArithmetic = randomNumber1;
                break;
        }

        let userAnswerSimpleArithmetic = prompt(`Решите пример: ${task}`);

        if (userAnswerSimpleArithmetic === null) {
            alert('Операция отменена пользователем');
            break;
        }

        if (parseInt(userAnswerSimpleArithmetic) === correctAnswerSimpleArithmetic) {
            alert('Правильно!');
            correctAnswerCountSimpleArithmetic++;
        } else {
            alert(`Неверно! Правильный ответ: ${correctAnswerSimpleArithmetic}`);
        }
    }

    alert(`Вы дали ${correctAnswerCountSimpleArithmetic} правильных ответов из ${totalTasks}`);
}


//Угадай число

function flipTheText() {

    let userText = prompt('Введите текст, который будет перевернут');

    let reverseUserText = userText.split('').reverse().join('');

    console.log(reverseUserText);
    alert(`Готово! Если слово ${userText} перевернуть, то получится ${reverseUserText}`)
}


//Простая викторина

function simpleQuiz() {
    const quiz = [
        {
            question: "Какой цвет у неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswerSimpleQuiz: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswerSimpleQuiz: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswerSimpleQuiz: 2
        }
    ];

    let correctAnswersCountSimpleQuiz = 0;

    for (let item of quiz) {

        let userAnswerSimpleQuiz = prompt(`${item.question} \n\nВарианты ответа: \n${item.options.join('\n')}. \n\nВведите номер правильного ответа`);

        if (Number(userAnswerSimpleQuiz) === Number(item.correctAnswerSimpleQuiz)) {
            alert(`Это правильный ответ!`);
            correctAnswersCountSimpleQuiz++;
        } else {
            alert(`Это неправильный ответ! Правильный ответ: ${item.correctAnswerSimpleQuiz}`);
        }
    }

    alert(`Конец! \nВы дали ${correctAnswersCountSimpleQuiz} правильных ответов из ${quiz.length} вопросов.`);
}

//Задания на работу с кодом

//Задание 1

let word = 'js';
word = word.toUpperCase();
console.log(word);


//Задание 2

const strArray = [];
const search = '';

strArray.forEach((substr) => {
    if (substr.toLowerCase().startsWith(search.toLowerCase())) {
        console.log(substr);
    }
})


//Задание 3

const roundTheNumber = 32.58884;

let roundTheNumberFloor = Math.floor(roundTheNumber);
console.log(roundTheNumberFloor);

let roundTheNumberCeil = Math.ceil(roundTheNumber);
console.log(roundTheNumberCeil);

let roundTheNumberRound = Math.round(roundTheNumber);
console.log(roundTheNumberRound);


//Задание 4

const arrNumbers = [52, 53, 49, 77, 21, 32];

console.log(`Минимальное число в массиве: ${Math.min(...arrNumbers)}`);

console.log(`Максимальное число в массиве: ${Math.max(...arrNumbers)}`);


//Задание 5

function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNum(1, 10));


//Задание 6

function generateRandomArray(num) {
    const arrayLength = Math.floor(num / 2);

    const result = [];

    for (let i = 0; i < arrayLength; i++) {
        const randomNum = Math.floor(Math.random() * (num + 1));
        result.push(randomNum);
    }

    return result;
}


//Задание 7

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandom(num) {

    const result = [];

    for (let i = 0; i < arrayLength; i++) {
        const randomNum = Math.floor(Math.random() * (num + 1));
        result.push(randomNum);
    }

    return result;
}


//Задание 8

let currentDate = new Date();

console.log(currentDate);


//Задание 9

let myDate = new Date();

console.log(+myDate);

let days73 = 73 * 24 * 60 * 60 * 1000;
let searchDate = myDate + days73;
let daysPlus73 = new Date(searchDate);

console.log(daysPlus73);


//Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let dateOnComp = new Date();

let fullDate = `Дата: ${dateOnComp.getDate()} ${months[dateOnComp.getMonth()]} ${dateOnComp.getFullYear()} – это ${days[dateOnComp.getDay()]}; 
Время: ${dateOnComp.getHours()}:${dateOnComp.getMinutes()}:${dateOnComp.getSeconds()}`;

console.log(fullDate);