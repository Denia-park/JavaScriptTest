//드림코딩 유튜브 - 출처 : https://youtu.be/YBjufjBaxHo

// 1. string concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operator
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators : || (or) , && (and), ! (not) , | , & , ^
const value1 = true;
const value2 = false;

// || (or), finds the first truthy value : 처음에 true가 나와버리면 뒤에는 계산하지 않고 바로 넘어간다.
// value1 이 true 가 나오면 뒤에는 계산하지 않았다.
    //그러므로 계산이 헤비한 함수들 같은 것은 최대한 뒤로 뺴서 앞에서 진짜 다 false 가 나왔을 때만 확인을 하도록 해야함
console.log(`or : ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something  => nullableObject 가 null 이 아닐때에만 해당 object 에서 something을 받아온다.
//다음과 같다. [null 은 false 로 치기 때문에 && 연산이 들어가면 바로 처리됨]
// if(nullableObject != null){
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log("👩");
    }
    return true;
}

//!(not)
console.log(!false); // true

//7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);
// === strict equality , no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const hyunggi1 = {name: "hyunggi"};
const hyunggi2 = {name: "hyunggi"};
const hyunggi3 = hyunggi1;
console.log(hyunggi1 == hyunggi2); // 서로 주소값이 다르기 때문에 타입 컨벌젼 상관없이 false가 나옴
console.log(hyunggi1 === hyunggi2); // 서로 주소값이 다르기 때문에 타입 컨벌젼 상관없이 false가 나옴
console.log(hyunggi1 === hyunggi3); // 주소값이 동일하기 때문에 true 가 나온다.

//equality - puzzler
// 0 , null , emptyString 은 false 로 간주한다.
console.log(0 == false); // true
console.log(0 === false); // false => 0은 boolean 타입이 아니기 때문에 false
console.log("" == false); // true
console.log("" === false); // false => boolean 타입이 아니기 때문에 false
console.log(null == undefined); //true => 특이하게 둘은 같은것으로 취급
console.log(null === undefined); //false => 두개의 타입이 다르기 때문에 다른 타입으로 취급한다.

// 8. Conditional operators : if
// if, else if , else
const name = "hyunggi";
if(name === "hyunggi"){
    console.log("Welcome, Hyunggi");
}else if (namde === "coder") {
    console.log("You are amazing coder");
} else {
    console.log("unknown");
}

// 9.  Ternary operator : ?
// condition ? value1 : value2;
console.log(name === "hyunggi" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
    case "IE":
        console.log("Go away");
        break;
    case "Chrome":
        console.log("love you!");
        break;
    default:
        console.log("same All");
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
//body code is executed
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

//do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0)

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`for : ${i}`);
}

//nested loop
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

//break  와 continue 가 있다.
