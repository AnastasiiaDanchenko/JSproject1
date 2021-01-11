"use strict";

/* callback функции, к-я вып после вып другой функции */
function first (){
    //do smth
    setTimeout(function(){
        console.log(1);
    }, 500); /* время в мс */
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang, callback){ /* callback - функция, к-я исполняется строго после */
    console.log(`I learn: ${lang}`);
    callback();
}

learnJS('JS', function(){   /* анонимная функция, обратиться больше нельзя */
    console.log('Done');
});

/* методы объектов (т.н. ассоциативные массивы) */
/* const obj = new Object(); */
const options = {
    name: 'test',
    widht: 1024,
    high: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){ /* вложенный метод */
        console.log('Test');
    }
};

options.makeTest();

/* delete options.name; /* удаление свойств; возможно, тк прямых констант в js нет 
console.log(options);
 */
/* цикл по всем свойствам */
for (let key in options) {
    /* console.log(`Свойство ${key} имеет знаечние ${options[key]}`); */
    /* для вложенного объекта результат: [object Object] */
    if(typeof(options[key] === 'object')){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет знаечние ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство ${key} имеет знаечние ${options[key]}`);
    }
}
/* нет метода для определения кол-ва элементов внутри объекта, необходим счетчик ЛИБО: */
console.log(Object.keys(options).length);

/* деструктуризация объектов */
const {border, bg} = options.colors;
console.log(border); /* результат: 'black' */
