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


//Камень, ножницы, бумага

function rockPaperScissors() {

    const arrRockPaperScissors = ["камень", "ножницы", "бумага"];

    for (let i = 0; i <= 5; i++) {
        const computerAnswerRockPaperScissors = arrRockPaperScissors[getRandomIntInclusive(0, 2)];
        console.log(`Компьютер выбрал: ${computerAnswerRockPaperScissors}`);

        let userChoice = prompt('Сделай выбор: камень, ножницы и бумага. Напиши в поле ввода.');

        if (userChoice === null) {
            alert('Операция отменена пользователем');
            break;
        }

        let userAnswerRockPaperScissors = userChoice.toLowerCase();

        if (!arrRockPaperScissors.includes(userAnswerRockPaperScissors)) {
            alert('Неверный ввод! Пожалуйста, укажите корректный вариант ответа: камень, ножницы или бумага.');
            continue;
        }

        if (userAnswerRockPaperScissors === computerAnswerRockPaperScissors) {
            alert('Ничья!');
        } else {
            if (
                (userAnswerRockPaperScissors === 'камень' && computerAnswerRockPaperScissors === 'ножницы') ||
                (userAnswerRockPaperScissors === 'ножницы' && computerAnswerRockPaperScissors === 'бумага') ||
                (userAnswerRockPaperScissors === 'бумага' && computerAnswerRockPaperScissors === 'камень')
            ) {
                alert(`Вы выиграли! Вы выбрали ${userAnswerRockPaperScissors}, компьютер выбрал ${computerAnswerRockPaperScissors}`)
            } else {
                alert(`Вы проиграли! Вы выбрали ${userAnswerRockPaperScissors}, компьютер выбрал ${computerAnswerRockPaperScissors}`);
            }
        }
    }
}


//Генератор случайных цветов

const linkGame6El = document.querySelector('.link-game-6');
const contentBtnEl = document.querySelector('.content__btn');

linkGame6El.addEventListener('click', function () {
    if (contentBtnEl.style.display === 'none') {
        contentBtnEl.style.display = 'block';
        linkGame6El.textContent = 'Скрыть';
    } else {
        contentBtnEl.style.display = 'none';
        linkGame6El.textContent = 'Играть!';
    }
});

function generateRandomHexColor() {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',];
    const arrHex = [];

    for (let i = 0; i < 6; i++) {
        const arrHexRandomEl = arr[getRandomIntInclusive(0, arr.length - 1)];
        arrHex.push(arrHexRandomEl);
    }

    let HexRandomStr = arrHex.join('')
    let HexRandomCode = '#' + HexRandomStr;
    return HexRandomCode;
}

function randomColorGenerator() {
    const mainEl = document.querySelector('.main');

    contentBtnEl.addEventListener('click', function () {
        const randomColor = generateRandomHexColor();
        mainEl.style.backgroundColor = `${randomColor}`;
    });
}

//Плавный скролл якоря

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});