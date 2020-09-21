"use strict";

let a=5, b=a; /* примитивы передаются по значению */
b = b+5;
console.log(b, a);

const obj = {
    a: 5,
    b: 1
};
const copy = obj; /* передача по ссылке */
copy.a = 10;
console.log(copy, obj); /* изменился не только copy, но и obj */

/* создание аналога для сложных объектов */
function copyObj(mainObj){
    let objCopy = {};
    for (let key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 5,
    b: -9,
    c: {
        x: 7,
        y: 9.5
    }
};

const newNumbers = copyObj(numbers);
newNumbers.a = 10;
newNumbers.c.x = 3;
console.log(newNumbers); /* теперь меняем только ПОВЕРХНОСТНУЮ копию, на вложенные конструкции не распространяются */

/* объединение объектов */
const add = {
    d: 17,
    e: 8
};
console.log(Object.assign(numbers,add));

const clone = Object.assign({},add); /* также создаем ПОВЕРХНОСТНУЮ копию */
clone.d = -9;
console.log(add, clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); /* 3й способ ПОВЕРХНОСТНОЙ копии */

const video = ['youTube', 'rutube', 'vimeo'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook']; /* тн оператор разворота SPREAD*/
console.log(internet);

function log (a,b,c){
    console.log(a,b,c);
}
const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newArr = [...array];
const q = {
    one: 1,
    two:2
};
const newObj = {...q};  /* тоже работает */
