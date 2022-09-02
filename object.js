//참고 : https://youtu.be/1Lbr29tzAA8

'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// 중요하게 집고 갈 것 : Object는 key 와 value 의 집합체이다.  object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const hyunggi = {"name": "hyunggi", "age": 30};
console.log(hyunggi);

const ellie = { name: 'ellie', age: 4 }; // Class 가 없어도 Object 생성이 가능함
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties [계산된 프로퍼티] , object['key']
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name'); // undefined가 출력됨
printValue(ellie, 'age'); // undefined가 출력됨
// . 은 코딩하는 순간에 , 즉 확실하게 값을 아는 경우 사용
// ["key"] 는 안에 들어오는 값이 어떤것인지 모를때 사용한다.
// key는 무조건 string 타입이기 때문에 아마 위에 printValue 처럼
// 상대방이 key 를 string 으로 전달할 것이기 때문에


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);

function makePerson(name, age) {
    return {
        name,
        age,
    }
}

// 4. Constructor Function , 해당 코드를 사용하면 class 만든 것과 동일하게 동작
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); //true
console.log('age' in ellie); //true
console.log('random' in ellie); //false
console.log(ellie.random); // undefined
// 6. for..in vs for..of
// for (key in obj) // key 가 한개씩 꺼내진다.
console.clear(); // Console was cleared
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable) , 배열 , 리스트 에서 사용된다.
const array = [1, 2, 4, 5];
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear(); // Console was cleared
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
const user5 = {};
Object.assign(user5, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 있는 아이가 앞에 이미 존재하는 Key를 가지고 있으면 덮어씌워버린다.
console.log(mixed.color); // blue
console.log(mixed.size); // big
