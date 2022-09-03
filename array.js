//출처 : https://youtu.be/yOdAVDuHUKQ

'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // '🍎'
console.log(fruits[1]); // '🍌'
console.log(fruits[2]); // OutOfBounds Error 가 아니라 undefined 가 나온다.
console.log(fruits[fruits.length - 1]); // 마지막 요소 찾을때
console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

/* For Each 내의 callback function 구문
* fruits.forEach(function (fruit, index , array) { // 이렇게 3개를 받아 올 수 있다. 근데 보통 마지막의 array는 잘 받아오지 않음.
* console.log(fruit, index , array);
* }
* */
/*
* fruits.forEach(function (fruit, index) { // 이름이 없는 함수는 arrow function 을 사용할 수 있다.
* console.log(fruit, index);
* }
* */
/*
* fruits.forEach((fruit, index) => console.log(fruit, index)) // arrow function 완성
* */
// c. forEach , 영상에서 16분 5초 위치
fruits.forEach((fruit) => console.log(fruit)); // index는 빠졌다.

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits); //'🍎', '🍌','🍓', '🍑'

// pop: remove an item from the end
const poped = fruits.pop(); // '🍑'
fruits.pop(); // '🍓'
console.log(fruits); //'🍎', '🍌'

// unshift: add an item to the benigging
fruits.unshift('🍓', '🍋');
console.log(fruits); //'🍓', '🍋','🍎', '🍌'

// shift: remove an item from the benigging
fruits.shift(); //'🍓'
fruits.shift(); //'🍋'
console.log(fruits); //'🍎', '🍌'

console.clear();

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
fruits.splice(1); // idnex 1 을 포함하여 그 뒤로를 다 지운다.
console.log(fruits);
fruits.splice(1, 1); // index 1부터 1개만 지운다. => 1번만 지운다
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉'); // index 1번 1개만 지우고 그 뒤에 items를 넣어줘
console.log(fruits);
fruits.splice(1, 0, '🍏', '🍉'); // deleteCount 가 0 이므로 , 아무것도 지우지 않고 뒤로 민 다음에 1번 자리에 items가 들어간다.
console.log(fruits);

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
// console.clear();
console.log(fruits); // ['🍎', '🍏', '🍉', '🍏', '🍉']
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍉')); // 2
console.log(fruits.indexOf('🥥')); // -1

// includes
console.log(fruits.includes('🍉')); // true
console.log(fruits.includes('🥥')); // false

// lastIndexOf
// console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));
console.log(fruits.lastIndexOf('🥥'));
