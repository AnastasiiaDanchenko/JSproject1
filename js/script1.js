"use strict";

let num = 50;

if (num < 9) {
    console.log("Less");
} else if (num == 9) {
    console.log("Equal");
} else {
    console.log("Grater");
}

/* тернарный оператор, поскольку используется 3 аргумента (единственный в JS); 'if ? right : wrong' */
(num === 50) ? console.log('Ok!') : console.log('Error');

switch(num) {
    case 49: 
        console.log('Wrong'); /* строгое равенство */
        break;
    case 100:
        console.log('Wrong 100');
        break;
    case 50:
        console.log('Right');
        break;
    default:
        console.log('No right answer'); /* если все case неверны */
        break;
}

/* циклы */
while (num<55){
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}while (num < 55);

for (let i = 1; i < 8; i++){
    if (i == 6){
        //break; //прерываем весь цикл for, работаем до i==5
        continue; //пропускаем ненужный шаг i==6
    }
    console.log(num + i);
    num++;
}