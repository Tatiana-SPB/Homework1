//Задание 1//

let password = 'пароль';
let passwordUser = prompt(`Введите пароль`);

password === passwordUser ? alert(`Пароль введен верно`) : alert(`Пароль введен неверно`);


//Задание 2//

let c = Number(prompt(`Проверь число 0`));
if (c > 0 && c < 10) {
    alert(`верно`);
} else {
    alert(`неверно`);
}
console.log(c);

c = Number(prompt(`Проверь число 10`));
if (c > 0 && c < 10) {
    alert(`верно`);
} else {
    alert(`неверно`);
}
console.log(c);

c = Number(prompt(`Проверь число -3`));
if (c > 0 && c < 10) {
    alert(`верно`);
} else {
    alert(`неверно`);
}
console.log(c);

c = Number(prompt(`Проверь число 2`));
if (c > 0 && c < 10) {
    alert(`верно`);
} else {
    alert(`неверно`);
}
console.log(c);


//Задание 3//

let d = Number(prompt(`Введите первое число для сравнения`));
let e = Number(prompt(`Введите второе число для сравнения`));

d > 100 || e > 100 ? console.log(`Верно`) : console.log(`Неверно`);


//Задание 4//

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(parseInt(a) + parseInt(b));


//Задание 5//

let monthNumber = Number(prompt(`Для того чтобы определить сезон, введите порядковый номер интересующего месяца`));

switch (monthNumber) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    case 12:
        console.log('зима');
        break;
    default:
        console.log('Такого месяца нет');
}


/* Дополнительные задания
Задание 1*/

let parityCheck = prompt("Пожалуйста, введите любое число");

if (typeof parityCheck === "string") {
    parityCheck = parseInt(parityCheck);
    if (!isNaN(parityCheck)) {
        if (parityCheck % 2 === 0) {
            alert(`Число четное`);
        } else {
            alert(`Число нечетное`);
        }
    } else {
        console.log("Введённое значение не является числом");
        alert("Введённое значение не является числом");
    }
} else {
    console.log("Ошибка ввода");
    alert("Ошибка ввода");

}