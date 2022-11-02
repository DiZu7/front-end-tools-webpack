import { sum, mult } from '../calculator.js';

it('should sum two numbers', () => {
  expect(sum(10, 15)).toEqual(25);
});

it('should return result of concatination if one of number is string', () => {
  expect(sum('test', 15)).toEqual('test15');
});

it('should mult two numbers', () => {
  expect(mult(10, 15)).toEqual(150);
});

it('should return undefined if one of arguments is not a number or string with number inside', () => {
  expect(mult('test', 15)).toEqual(NaN);
});
