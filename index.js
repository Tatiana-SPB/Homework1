//Задание 1//

let a = 10;
alert(a);
console.log(a);

a = 20;
alert(a);
console.log(a);


//Задание 2//

let b = 2007;
alert(`Первый iPhone был выпущен в ${b} году`);
console.log(`Первый iPhone был выпущен в ${b} году`);


//Задание 3//

let j = `Бренданом Эйхом`;
alert(`Создателем языка JavaScript является ${j}`);
console.log(`Создателем языка JavaScript является ${j}`);


//Задание 4//

a = 10;
b = 2;

alert(`a + b = ${a + b}`);
console.log(`a + b = ${a + b}`);

alert(`a - b = ${a - b}`);
console.log(`a - b = ${a - b}`);

alert(`a * b = ${a * b}`);
console.log(`a * b = ${a * b}`);

alert(`a / b = ${a / b}`);
console.log(`a / b = ${a / b}`);


//Задание 5//

let x = 2;
let y = 5;
let result = x ** y;
alert(`${x} ^ ${y} = ${result}`);
console.log(`${x} ^ ${y} = ${result}`);


//Задание 6//

a = 9;
b = 2;
alert(`Остаток от деления ${a} на ${b} составляет: ${a % b}`);
console.log(`a % b = ${a % b}`);


//Задание 7//

let num = 1;
num += 5;
console.log(num);

num -= 3;
console.log(num);

num *= 7;
console.log(num);

num /= 3;
console.log(num);

num++;
console.log(num);

num--;
console.log(num);
alert(num);


//Задание 8//

let age = prompt(`Сколько вам лет?`);
alert(age);


//Задание 9//

let user = {
    name: `Татьяна`,
    age: 30,
    isAdmin: true
}

console.log(user);


//Задание 10//

let userName = prompt(`Введите Ваше имя`);
alert(`Привет, ${userName}!`);


//Дополнительное задание//

let number = prompt(`загадай любое число и введи его в поле ниже:`);
let initialNumber = number;

number *= 2;
alert(`Если умножить загаданное число на 2, то мы получим ${number}`);

number += 10;
alert(`Если к этому значению прибавить 10, то получится ${number}`);

number /= 2;
alert(`Если этот результат разделить на 2, то получается ${number}`);

number -= initialNumber;
alert(`А теперь из полученного результата вычитаем загаданное число и получаем: ${number}`);

alert(`Ответ равен 5`);