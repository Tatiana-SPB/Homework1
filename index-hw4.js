/*Задание 1*/

let i = 0;
while (i < 2) {
    alert(`Привет!`);
    i++;
}

/*Задание 2*/

for (let a = 1; a <= 5; a++) {
    console.log(a);
}

/*Задание 3*/

for (let b = 7; b <= 22; b++) {
    console.log(b);
}

/*Задание 4*/

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

/*Задание 5*/

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log("Результат: ", n);
console.log("Количество итераций: ", num);

/*Задание 6*/

let date = Number(prompt(`Введите дату первой пятницы месяца`));

if (date <= 7) {
    do {
        console.log(`Сегодня пятница, ${date}-е число. Необходимо подготовить отчет.`);
        date += 5;
    } while (date <= 31);
} else {
    alert(`Недействительная дата первой пятницы месяца.`);
}

/*Дополнительные задания
Задание 1*/

let k = 100;
let iterations = 0;

while (k > 0) {
    k -= 7;
    iterations++;
}

console.log("Результат: ", k);
console.log("Количество итераций: ", iterations);

/*Задание 2*/

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

for (let i = 0; i < months.length; i++) {
    console.log(`Месяц: ${months[i]}, его порядковый номер: ${i + 1}`);
}

/*Задание 3*/

const book = {
    Название: "Триумфальная арка",
    Автор: "Эрих Мария Ремарк",
    "Год издания": "1945",
    Жанр: "реализм"
}

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}