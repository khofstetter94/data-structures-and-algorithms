# Code Challenge 28 - Challenge Summary

Implement several array sorting comparators and an array filter.

- Implement the functions `sortYear`, `sortTitle`, and `inGenre` in the file `sort.ts`.

  - Execute your tests while developing using `npm run watch`
  - Execute your tests in CI using `npm test`

- Functions:
  - sortYear
    - Arguments: `movies` array
    - Sorts the input array by year, in ascending order.
  - sortTitle
    - Arguments: `movies` array
    - Sorts the input array by title, ignoring `"The "` at the beginning of titles.
  - inGenre
    - Arguments: `movies` array, `genre` string
    - Filters the input array, returning only those movies who include `genre`.

- Extract the comparator callbacks
  - sortYear and sortTitle should both be implemented by passing a custom comparison function to the built-in sort utility.
  - Export these helper functions at the top level of your file, and call them from your sortYear and sortTitle functions.
  - Import these helper functions into your test, and write tests that verify they return the appropriate comparison values (<0, 0, or >0).

## Whiteboard Process

- **not required**

## Approach & Efficiency

- sortYear: I created a helper function that would compare the years of each movie in the array and place them in ascending order. The array is mutated in place and returned.
- sortTitle: I created a helper function that would compare the titles of each movie and place them in alphabetical order. I utilized the '.replace()' to take out the 'The' before any title for proper ordering. The array is mutated in place and returned.
- sortGenre: I created a helper function that would compare the genres of each movie and create a new array of only the movies that fall under the genre passed into the function. I utilized the '.filter()' and '.includes()' to weed out the correct movies.

## Solution

[View code](./sort.js)
[View tests](./sort.test.js)
