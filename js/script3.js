"use strict";
/* методы и свойства строк и чисел */

console.dir(Number); /* посмотреть все свойства, внутри браузера */

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("q")); /* res = -1; нет такого символа */

const logg = "Hello World";
console.log(logg.slice(6,11)); /* указывать не включая(!) последнее значение; поддерживает отриц знач */
console.log(logg.substr(6,5)); /* начало и длина обреза */

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));/* перевод в другую систему счисления, на выходе число */
console.log(parseFloat(test));
