"use strict";

let numberOfFilms;

function start(){
    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    let a,b;
    for (let i = 0; i<2; i++) {
        a = prompt('Один из просмотренных фильмов?', '');
        b = prompt('На сколько оцените его?', '');
        if(a == null || a.length > 50 || a == '' || b == null || b.length > 50 || b == ''){
            i--;
        }else{
            personalMovieDB.movies[a] = b;
        }
    }
}

rememberMyFilms();

function detectLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10){
        console.log("Вы классический зритель");
    }else if (personalMovieDB.count>=30){
        console.log("Вы киноман");
    }else{
        console.log("Произошла ошибка");
    }
}

detectLevel();

function showMyDB(){
    if (!personalMovieDB.privat){
        console.log(personalMovieDB);
    }else{
        console.log("Нет доступа к БД");
    }
}

showMyDB();

function writeYourGenres(){
    for (let i=0; i<3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером  ${i+1}`);
    }
}

writeYourGenres();
