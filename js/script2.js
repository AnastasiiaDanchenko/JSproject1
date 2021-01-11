"use strict"

/* function declaration - существует еще до того, как код запустится */
showFirstMessage("Hello World", 5, 15);
function showFirstMessage(text, a, b) {
    console.log(text);
    return (a+b);
}
/* замыкание функции - функция со всеми внешними переменными,которые ей доступны */

/* function exspression - можно вызвать только после объявления*/
const logger = function(){
    console.log("Hello");
};
logger();

/* стрелочная функция - не имеет контескта вызова*/
const calc = (a,b) => a+b; /* {return (a+b)} */
