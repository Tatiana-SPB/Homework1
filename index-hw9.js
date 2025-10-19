//Задание 1

const btnEl1 = document.querySelector('.btnTask1');
const titleEl1 = document.querySelector('.titleTask1');

btnEl1.addEventListener('click', function () {
    if (titleEl1.style.display === 'none') {
        titleEl1.style.display = 'block';
        btnEl1.textContent = 'Скрыть';
    } else {
        titleEl1.style.display = 'none';
        btnEl1.textContent = 'Показать';
    }
});


//Задание 2

const btnEl2 = document.querySelector('.btnTask2');
const textEl2 = document.querySelector('.textTask2');

btnEl2.addEventListener('click', function () {
    textEl2.style.color = 'blue';
});


//Задание 3

const btnEl3 = document.querySelector('.btnTask3');
const textEl3 = document.querySelector('.textTask3');

btnEl3.addEventListener('click', function () {
    textEl3.textContent = 'Привет, мир!';
});


//Задание 4
const descriptionEl4 = document.querySelectorAll('.description');

console.log(descriptionEl4);

descriptionEl4.forEach(element => {
    element.textContent = 'Измененный текст';
});


//Задание 5
const descriptionEl5 = document.querySelectorAll('.descriptionTask5');

console.log(descriptionEl5);

descriptionEl5.forEach(element => {
    element.textContent = 'Новый текст';
});


//Задание 6
const btnEl6 = document.querySelector('.btnTask6');

btnEl6.addEventListener('click', function () {
    const textEl6 = document.createElement('p');
    textEl6.textContent = 'Новый абзац';
    document.body.appendChild(textEl6);
});

//Задание 7
const btnEl7 = document.querySelector('.btnTask7');
const descriptionEl7 = document.querySelector('.descriptionTask7');

btnEl7.addEventListener('click', function () {
    descriptionEl7.remove()
});