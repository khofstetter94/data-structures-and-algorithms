let movies = require('./movies');
let { inGenre, sortTitle, sortYear }  = require('./sort');

describe('Sorters', () => {
  it('can sort movies by year', () => {
    const finalMovies = sortYear(movies);
    expect(finalMovies.map((m) => m.title)).toEqual([
      'The Cotton Club',
      'Crocodile Dundee',
      'Beetlejuice',
      'The Shawshank Redemption',
      'Memento',
      'City of God',
      'Ratatouille',
      'Stardust',
      'Valkyrie',
      'The Intouchables',
    ]);
  });

  it('can sort movies by title', () => {
    const finalMovies = sortTitle(movies);
    expect(finalMovies.map((m) => m.title)).toEqual([
      'Beetlejuice',
      'City of God',
      'The Cotton Club',
      'Crocodile Dundee',
      'The Intouchables',
      'Memento',
      'Ratatouille',
      'The Shawshank Redemption',
      'Stardust',
      'Valkyrie',
    ]);
  });

  it('can find movies by genre', () => {
    const finalMovies = sortYear(inGenre(movies, 'Adventure'));
    expect(finalMovies.map((m) => m.title)).toEqual([
      'Crocodile Dundee',
      'Stardust',
    ]);
  });
});
