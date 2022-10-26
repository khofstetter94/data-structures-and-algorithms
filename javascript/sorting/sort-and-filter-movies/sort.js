'use strict';

const movies = require('./movies');

let yearComparator = (a, b) => {
  const yearA = a.year;
  const yearB = b.year;
  if (yearA < yearB) {
    return -1;
  }
  if (yearA > yearB) {
    return 1;
  }
  return 0;
};

let titleComparator = (a, b) => {
  const titleA = a.title.replace('The ', '');
  const titleB = b.title.replace('The ', '');
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
};

let genreComparator = (array, string) => {
  const finalArray = array.filter(movie => movie.genres.includes(string));
  return finalArray;
};

// Complete for Code Challenge 28
function sortYear(movies) {
  return movies.sort((a,b) => yearComparator(a,b));
}

function sortTitle(movies) {
  return movies.sort((a,b) => titleComparator(a,b));
}

function inGenre(movies, genre) {
  return genreComparator(movies, genre);
}

console.log(inGenre(movies, 'Drama'));

module.exports = { sortYear, sortTitle, inGenre };
