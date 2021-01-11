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
    privat: false,

    rememberMyFilms: function (){
        let a,b;
        for (let i = 0; i<2; i++) {
            a = prompt('Один из просмотренных фильмов?', '');
            b = prompt('На сколько оцените его?', '');
            if(a == null || a.length > 50 || a == '' || b == null || b.length > 50 || b == ''){
                console.log('Неверные данные');
                i--;
            }else{
                personalMovieDB.movies[a] = b;
            }
        }
    },

    detectLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        }else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10){
            console.log("Вы классический зритель");
        }else if (personalMovieDB.count>=30){
            console.log("Вы киноман");
        }else{
            console.log("Произошла ошибка");
        }
    },

    showMyDB: function(){
        if (!personalMovieDB.privat){
            console.log(personalMovieDB);
        }else{
            console.log("Нет доступа к БД");
        }
    },

    writeYourGenres: function (){
        let a;
        for (let i=0; i<3; i++){
            a = prompt(`Ваш любимый жанр под номером  ${i+1}`);
            if(a == null || a == ''){
                console.log('Неверные данные');
                i--;
            }else{
                personalMovieDB.genres[i] = a;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function (){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};


