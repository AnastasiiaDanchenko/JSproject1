"use strict";

const box = document.getElementById('box');
console.log(box);
/* есил искать по тегам, то получим псевдомассив 
(массив без методов) */

const buttons = document.getElementsByTagName('button');
console.log(buttons); /* даже если только 1 кнопка, все равно получим HTML-коллекцию */
console.log(buttons[1]);

const button2 = document.getElementsByTagName('button')[1];
console.log(button2);

const circles = document.getElementsByClassName('circle');  
/* знает, что класс, точка не нужна */
console.log(circles); /* тоже html-коллекция */

const hearts = document.querySelectorAll('.heart'); /*получаем МАССИВ в методом forEach (NodeList)*/
/* НЕ знает, что класс, точка НУЖНА */
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const heart1 = document.querySelector('.heart'); /* получаем только ПЕРВЫЙ элемент */
console.log(heart1);
