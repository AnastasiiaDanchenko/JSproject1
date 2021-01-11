"use strict";

/* динамич типизация - преобр типовобъектов */
/* to String */
console.log(typeof(String(5)));
console.log(typeof(5+''));

const num = 5;
console.log("https://vk.com/catalog/"+num);

const fontSize = 26 + 'px'; /* для исп в стилях */

/* to Number */
console.log(typeof(Number('5')));
console.log(typeof(+'5'));/* унарный плюс */
console.log(typeof(parseInt('15px', 10)));

/* to Boolean */
/* false = 0, '', null, undefined, NaN; остальное превращается в true */
console.log(typeof(Boolean(1)));
console.log(typeof(!!"shajsh"));    

/* let x= 5; alert(x++);
5 +
NaN: []+false == "false"; "false"+null == NaN; NaN+true == NaN
присваивание справа налево: let x=1; let y=x=2; -> y ==2
"12" +
1 + 
null: && запинается на лжи
да  +
2&&3 == 3 (возвращает последнее значение); ИЛИ запинается на правде: null||2&&3||4 === 3;
a = [1,2]; b = [1,2] - РАЗНЫЕ переменные, те разные ящики   
alerrt(+"Infinity) == Infinity
"Ежик">"Яблоко" == false (тк Unicode); "ABC">"ABHCCJCJ" == true
0||''||2||undefined||true||false == 2 */
