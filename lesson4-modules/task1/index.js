import calcExpression, { mult, sum } from './calculator/index.js';
import { printProfile } from './profile/index.js';
import fetchUser from './profile/gateway.js';
import './polyfills/array-flatMap.js';

const calcResult = calcExpression('1 + 2');
const sumResult = sum(1, 2);
const multResult = mult(1, 2);
const userDataPromise = fetchUser('facebook');
printProfile({ name: 'Tom', from: 'The World'});



