// import {num, add, User} from './test.mjs';
import * as testModule from './test.mjs';

// console.log(num)
// console.log(add(10, 20));
// console.log('aaa')
console.log(testModule.num)
console.log(testModule.add(10, 20));
console.log(new testModule.User('aaa'));