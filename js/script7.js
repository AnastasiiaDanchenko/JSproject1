"use strict";

let str = 'str';
let strObj = new String(str);
console.log(typeof(str), typeof(strObj)); /* строка, объект */

/* ООП */
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

const john = Object.create(soldier);
john.sayHello();

const johnSoldier = {
    health: 100
};

/* /* устаревший способ, не используй(!) 
johnSoldier.__proto__ = soldier;
console.log(johnSoldier); /* только 1 свойство, health, однако 
console.log(johnSoldier.armor); /* ЕСТЬ свойство armor, sayHello */ 

Object.setPrototypeOf(johnSoldier, soldier);
johnSoldier.sayHello();
