// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectores = moviesArray.map(movie => {
        return movie.director;
    })
    return allDirectores;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;
    if(moviesArray.length === 0){
        return 0;
    } else {
        moviesArray.filter(movie => {
            if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
                count++;
            }
        })
    }
    return count;
}
console.log(howManyMovies(movies2));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    } else {
        const sumOfScore = moviesArray.reduce((previousValue, moviesArray) => {
            if(moviesArray.score){
                return previousValue + moviesArray.score;
            }else {
                return previousValue;
            }
        }, 0);
        const average = sumOfScore/moviesArray.length;
        return Math.round(average * 100) / 100; 
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // returns array of drama movies
    const filterDramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    // retuns sum of scores of drama movies
    const sumOfDramaMovieScore = filterDramaMovies.reduce((previousValue, filterDramaMovies) => previousValue + filterDramaMovies.score, 0);

    // calculate average
    const averageOfDramaMovie = sumOfDramaMovieScore == 0 ? 0 : sumOfDramaMovieScore / filterDramaMovies.length;
    
    // return 2 decimal point number of result
    return Math.round(averageOfDramaMovie * 100) / 100;
}       

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyMovieArray = [...moviesArray];
    copyMovieArray.sort(function(a , b){
        if(a.year === b.year){
            if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
        }
        return a.year - b.year;
    });
    return copyMovieArray;
}
console.log(orderByYear(movies2));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleArray = [];
    moviesArray.forEach(movie => {
        titleArray.push(movie.title)
    });
    titleArray.sort(function(a , b){
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
        return 0;
    });
    return titleArray.length < 20 ? titleArray : titleArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
