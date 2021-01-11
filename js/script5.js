"use strict";

/* arays */
const arr = [1, 2, 3, 6, 8];
arr.pop(); /* delete the last element */
arr.push(10); /* add element to the end */

/* перебор с обычным for по элементам ИЛИ */
for (let value of arr){ /* используется, если нужны break и/или continue */
    console.log(value); 
}

arr.forEach(function(item, i, arr){ /* callback для каждого элемента */
    console.log(`${i}: ${item} внутри массива ${arr}`); /* интерполяция */
});

/* /* никогда так не делай! логики нет 
arr[99] = 15;
console.log(arr.length); /* res = 100 
console.log(arr); /* [ 1, 2, 3, 6, 10, <94 empty items>, 15 ] */ 

const str = prompt ("", "");
const products = str.split(", ");/* разделение строки в массив */
products.sort(); /* сортировка строк по алфавиту, включая массив чисел, но можно задать тип сортировки
(использует алгоритм быстрой сортировки) */
arr.sort(compareNum);
console.log(products.join('; ')); /* объединение массива в строку */

function compareNum(a,b){
    return a-b;
}

/* псевдомассив - массив без методов */
