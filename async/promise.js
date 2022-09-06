//출처 : https://youtu.be/JB_yU6Oe2eE

'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...'); // 프로미스 클래스를 인스턴스로 생성할때 executor 는 무조건 실행된다.
    setTimeout(() => {
        resolve('ellie'); // 성공
        // reject(new Error('no network')); // 에러
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
    .then(value => { // 성공[resolve] 시에 들어옴
        console.log(value);
    })
    .catch(error => { // 에러[reject] 시에 들어옴
        console.log(error);
    })
    .finally(() => { // 성공 , 에러 상관없이 무조건 실행되는 함수
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

//catch 의 위치를 어디에 두는지에 따라서 오류를 잘 처리 할 수 있다.
getHen() //
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log);

