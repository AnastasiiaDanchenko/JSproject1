/* console.log(1); */
/* comment: shift + alt + A */
"use strict"; /* работа в новых стандартах, используй всегда и в начале */

/* a = 15;
console.log(a); - работает в старом стандарте
 */
let number = 5;
const leftBorderWidth = 1; /* cannot change value, try to use it as often as possible */

number = 10;
console.log(number);

const obj = {
    a:10
};

obj.a = 10;
console.log(obj); /* прямых констант в JS не бывает */

console.log(name); /* всплытие переменной */
var name = 'Ivan';/* не стоит использовать, var существует в проге ещё до объявления переменной, устаревший способ */
name = 'Alex' ;

{
    let result = 50;
}

/* console.log(result); - c var ошибки не возникает!!*/

/* numbers */
let number1 = 4.6;
console.log(-4/0); /* res: -Infinity */
console.log('string'*5); /* res: NaN - not a number */

/* strings */
const persone = "Alex"; /* разницы в кавычках нет: " ' `*, сроки можно складывать/

/* boolean */
const bool = true;

/* null */
/* console.log(something); /* ошибка в консоли,  smth is not defined*/
 
/* undefined */
let und;
console.log(und);/* undefined */

/* object - ключ:значение */
const obj1 = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(obj1.name);
console.log(obj1["name"]);

/* massive - частный случай объекта, где данные идут строго по порядку, в кач. ключа порядковый номер*/
let arr = ['plum.png', 'orange.jpeg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);

/* alert('Hello'); /* предупреждение на странице */
/* const result = confirm("Are you here?"); /* окно ok/cancel, запись ответа в result true/false 
console.log(result); */

/* const answer = prompt("Вам есть 18?", "18"); /* ok/cancel + строка с дефолтным значением 
console.log(typeof(answer)); /* вся инфа хранится в строчках */ 

const answers = [];
/* answers[0] = prompt('Как Вас зовут?', '');
answers[1] = prompt('Ваша Фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');
document.write(answers); /* заменяет всю страницу на то, что в скобках, устаревшая команда */ 
console.log(typeof(answers)); /* res:object */
console.log(typeof(null)); /* res:object, признанная ошибка */

/* confirm, alert, prompt нельзя вывести в консоль, нет модального окна -> prompt is not defined*/

const category = 'toys';
console.log(`https://someurl.com/${category}/5`); /* интерполяция, только косые кавычки */

const user = "Ivan";
alert(`Hello, ${user}`);

let incr = 10,
    decr = 10;
console.log(incr++); /* постфиксная форма, сначала выводит, потом меняет */
console.log(--decr); /* префиксная форма, сначала меняет, потом выводит */

/* % - остаток от деления
    == - проверка на равенство
    === - строгое равенство, сравнивает ещё и тип данных 
    && - и 
    || - или
    ! - отрицание
    
    операторы выполняются так же, как в математике*/
