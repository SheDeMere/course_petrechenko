// // 'use strict';

// const numberOfFilms = +prompt('Сколько вы уже фильмов посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // const a = String(prompt('Один из последних просмотренных фильмов?')),
// //       b = +prompt('На сколько оцените его?'),
// //       c = String(prompt('Один из последних просмотренных фильмов?')),
// //       d = +prompt('На сколько оцените его?');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// // console.log(personalMovieDB)



// // console.log( NaN || 2 || undefined ); //2


// // console.log( NaN && 2 && undefined ); //NaN


// // console.log( 1 && 2 && 3 ); // 3


// // console.log( !1 && 2 || !3 ); // !3


// // console.log( 25 || null && !3 ); //25


// // console.log( NaN || null || !3 || undefined || 5); // 5


// // console.log( NaN || null && !3 && undefined || 5); // 5


// // console.log( 5 === 5 && 3 > 2 || 5); //5



// // let num = 30;

// // // while(num <= 35) {
// // //     console.log(num)
// // //     num++
// // // }

// // do {
// //     console.log(num)
// //     num++
// // } while(num <= 35) 

// // for(let i = 20; i >= 10; i--) {
// //     console.log(i)
// // }
// // let i = 2
// // while( i <= 16) {
// //     i++;
// //     if(i % 2 === 0) {
// //         continue
// //     } else {
// //         console.log(i)
// //     }
// // }

// // for(let i = 20; i >= 10; i--) {
// //     console.log(i)
// //     if(i === 13) break;

// // // }

// // for(let i = 2; i <= 10; i++) {
// //     if(i % 2 === 0) console.log(i)
// // }

 
// // for (let i = 2; i <= 230; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// // let i = 2;

// // while(i < 230) {
// //     i++
// //     if(i % 2 === 0) {
// //         continue;
// //     }else {
// //         console.log(i)
// //     }
// // }

// // const data = [5, 10, 'Shopping', 20, 'Homework'];

// //     for(let i = 0; i < data.length; i++) {
// //         if (typeof(data[i]) === 'string') {
// //             data[i] += `${data[i]} - done`
// //         } else {
// //             data[i] *= 2
// //         }
// //     }

// //     console.log(data)


// // const data = [5, 10, 'Shopping', 20, 'Homework'];
// // const result = []

// // // Пишем решение вот тут
// // for(let i = 0; i < data.length; i++) {
// //        result.unshift(data[i])

// //     }

// // console.log(result)

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for(let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'string') {
//       data[i] = `${data[i]} - done`;
//     } else if(typeof(data[i]) === 'number') {
//         data[i] *= 2;
//     };

// // return data;
// }

// console.log(data)


// let length = 6;
// let result = ''

// for(let i = 0; i <= length; i++) {
   

//    result += '\n'
// }
// console.log(result)

// a = String(prompt('Один из последних просмотренных фильмов?')),
//      b = +prompt('На сколько оцените его?')
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

    //  for(let i = 0; i < 1; i++) {
    //    let a = String(prompt('Один из последних просмотренных фильмов?'));
    //    if(a.length === 0) {
    //     a = String(prompt('Один из последних просмотренных фильмов?'));
        
    //     i--
    //    } else if(a.length >= 50) {
    //     a = String(prompt('Один из последних просмотренных фильмов?'));
    //     i--
    //    }else {
    //     let b = +prompt('На сколько оцените его?');
    //     personalMovieDB.movies[a] = b;
    //    }
       
    //  }

    
// let i = 0;
//      do {
//         i++;
//         let a = String(prompt('Один из последних просмотренных фильмов?'));
//         if(a.length === 0) {
//          a = String(prompt('Один из последних просмотренных фильмов?'));
         
//          i--
//         } else if(a.length >= 50) {
//          a = String(prompt('Один из последних просмотренных фильмов?'));
//          i--
//         }else {
//          let b = +prompt('На сколько оцените его?');
//          personalMovieDB.movies[a] = b;
//         }

//      }while(i <= 1);

//      if(personalMovieDB.count <= 10) {
//         alert('просмотрено довольно мало фильмов')
//      }   else if(personalMovieDB.count> 10 && personalMovieDB.count <= 30) {
//         alert('классический киноман')
//      } else if(personalMovieDB.count > 30) {
//         alert('киноман')
//      } else {
//         alert('произошла ошибка')
//      }

//      console.log(personalMovieDB)


// const  getMathResult = (a, b) => {
//     let res = '';
//     let sum = 0;
//     for(let i = 1; i <= b; i++) {
//         sum += a;
//         if(i === b) {
//             res += sum
//         } else {
//             res += `${sum}---`
//         }
//     }

//     return res;

// }
// const func = getMathResult(3, 10)
// console.log(func)

let numberOfFilms;

function start() {
        numberOfFilms = +prompt('Сколько вы уже фильмов посмотрели?');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько вы уже фильмов посмотрели?');
    }
}

start()

// for(let i = 0; i < 1; i++) {
//     const a = String(prompt('Один из последних просмотренных фильмов?')),
//           b = +prompt('На сколько оцените его?');
//         console.log(a,b)
//           if( a != null && b != null && a != '' && b == '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//           }else {
//            i--
//           }
//      }


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const showMyDb = () => {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
}

showMyDb()

const writeYourGenres = () => {
    for(let i = 1; i <= 3; i++) {
        let a = prompt(`${i} ваш любимый жанр?`)
        personalMovieDB.genres.push(a)
    }
}

writeYourGenres()
