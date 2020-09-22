"use strict";

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      heart1 = wrapper.querySelector('.heart');

/* console.dir(box); */
box.style.backgroundColor = 'blue'; /* HEX/RGB/etc прописываем стили так же, как в CSS */
box.style.width = '500px'; /* число 500 не сработает */

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

const num = 300;
/* для назначения ширины модального окна в зависимости от устройства, с к-го зашел пользователь */
box.style.cssText = `background-color: yellow; widht: ${num}px`; 

/* циклы почти не используются
for (let i = 0; i<hearts.length; i++){
    hearts[i].style.backgroundColor = 'blue';
} */

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div'); /* только внутри JS файла, на странице не появится */
/* const text = document.createTextNode('Text exists');  почти не используется*/

div.classList.add('black');
/* document.body.append(div); /* add to end */ 

/* document.querySelector('.wrapper').append(div); нельзя дважды всавить одно и то же 
wrapper.prepend(div); вставить в начало*/

/* hearts[0].before(div); */
hearts[0].after(div);

circles[1].remove(); 

hearts[0].replaceWith(circles[0]); /* удаляем то, чем заменяем из начальной позиции */

/* устаревшие методы, все через родителя, необх исп больше аргументов
wrapper.appendChild(div);
wrapper.insertBefore(div, hearts[0]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(circles[0], hearts[0]);
wrapper.insertBefore(div, hearts[1]);
wrapper.removeChild(hearts[1]);
wrapper.replaceChild(circles[0], hearts[0]);*/

/* добавление текста
div.innerHTML = 'Hello, world!'; 
div.textContent = "Hello, world"; /* защита от пользователя, нельзя вставить HTML структуру */
div.innerHTML = "<h1>Hello, world!</h1>"; 
div.insertAdjacentHTML("beforebegin","<h2>Hello</h2>");
