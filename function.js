// 유튜브 - https://youtu.be/e_lU39U-5bQ

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// function showMessage(message, from) from 에 값을 넣지 않으면 Hi! by undefined 로 나온다.
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6) , ... 을 붙이게 되면 배열 형태로 전달된다.
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie'); // args 로 3개의 배열이 전달되게 된다.

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() { // 함수 안에 함수를 선언 가능
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();

// 6. Return a value , return이 없는 경우에는 return undefined 가 생략된것과 같다.
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit => 가독성 문제
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
    // 함수 선언 과 함수 표현식이 다른 점
        // 함수 선언을 하고 사용할때는 선언하기 전에 사용해도 된다.
        // => 그 이유는 JS 엔진이 선언한것을 제일 위로 올려주기 때문에
            /*
            sum(1, 2) => 사용 가능
            function sum(a, b) {
                return a + b;
            }
            */
// a function expression is created when the execution reaches it.
    //함수 표현식은 사용되기전에 반드시 선언이 되어있어야 한다.
        /*
        print() => 에러 발생
        const print = function () { // anonymous function
            console.log('print');
        };
        */

const printExample = function print() { // named function
    console.log('print');
};
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function => 디버깅 할때 사용한 함수의 이름이 나오기 때문에 디버깅 할때 더 유리하다.
// better debugging in debugger's stack traces
// recursions [재귀함수]
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const add2 = function sum(a, b) {
    return a + b;
};
const simpleMultiply = (a, b) => {
    // do something more
    return a * b; // 괄호를 쓰게 되면 반드시 return 을 사용해야함
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})(); //=> 함수를 선언하자 마자 사용하는 것

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('remainder', 2, 3));
