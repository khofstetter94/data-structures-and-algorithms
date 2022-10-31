'use strict';

let repeatedWord = require('./repeated-word');

describe('repeated-word', () => {
  it('Can successfully return the first word in a string that is repeated', () => {
    let string = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(string)).toEqual('summer');
  });
  it('Can successfully return undefined if no repeats exist', () => {
    let string = 'Hello, my name is KC';
    expect(repeatedWord(string)).toEqual(undefined);
  });
  it('ignores characters that are not alphaneumeric', () => {
    let string = 'What was the thing? Hmm... blue, green, or that other thing?';
    expect(repeatedWord(string)).toEqual('thing');
  });
  it('does not matter if words are capitolized or lowercase', () => {
    let string = 'HeLlOoOo how are YOU? helloooo there!';
    expect(repeatedWord(string)).toEqual('helloooo');
  });
});
