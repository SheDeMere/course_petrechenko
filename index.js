'use strict';

const numberOfFilms = +prompt('Сколько вы уже фильмов посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const askQuestionForUser = String(prompt('Один из последних просмотренных фильмов?'));
const rateForFilms = +prompt('На сколько оцените его?');

personalMovieDB.movies = {
   [askQuestionForUser]: rateForFilms
}

console.log(personalMovieDB)