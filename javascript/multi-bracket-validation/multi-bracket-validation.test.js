'use strict';

let { validateBrackets } = require('./multi-bracket-validation');

describe('LinkedList', () => {
  it('Can successfully return true if all opening brackets have a matching closing', () => {
    let string = '()[]{()}';

    expect(validateBrackets(string)).toEqual(true);
  });
  it('Can successfully return false if an opening bracket doesnt have a matching closing', () => {
    let string = '()[{()}';

    expect(validateBrackets(string)).toEqual(false);
  });
  it('Can successfully return false if there is only one bracket in the string', () => {
    let string = '(';

    expect(validateBrackets(string)).toEqual(false);
  });
  it('Can successfully return false if there are matching brackets but they arent in proper order', () => {
    let string = '([)]';

    expect(validateBrackets(string)).toEqual(false);
  });
});
