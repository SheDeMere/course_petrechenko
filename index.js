'use strict';

const numberOfFilms = +prompt('Сколько вы уже фильмов посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = String(prompt('Один из последних просмотренных фильмов?')),
      b = +prompt('На сколько оцените его?'),
      c = String(prompt('Один из последних просмотренных фильмов?')),
      d = +prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB)