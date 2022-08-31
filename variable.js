//JS 공부
//참고 유튜브 :엘리 드림 코딩 [https://youtu.be/tJieVCgGzhs]

// 1. Use Strict
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict'; // ★★★바닐라 스크립트를 사용할때 말도 안되는 짓들을 일부 막아준다.
// a를 선언하지 않고 a = 6 을 할당하는 이런 짓들을 경고 하는 것으로 방지해줌
// 그리고 JS 엔진이 조금더 효율적으로 일하기 때문에 더 빠르게 JS를 분석이 가능함, 실행속도 UP 가능

//2. Variable , rw(read/write)
// let (added in ES6)
let name = "ellie";
console.log(name);
name = "hello";
console.log(name);

//var (don't ever use this!)
// 이런 미친짓이 가능하다. => let 은 불가능함
// var hoisting ( move declaration from bot to top) 어디서 선언했는지 상관없이 선언을 제일 상단으로 올려준다
// var has no block scope
age = 4;
console.log(age);
var age;

//3. Constant r(read only)
//use const whenever possible
//only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types : primitive , frozen objects (i.e. object.freeze())
//Mutable data types : all objects by default are mutable in JS
//favor immutable data type always for a few reasons
// - security
// - thread safety
// - reduce human mistake


//4. variable types
//primitive - 값 자체가 저장됨
//object - reference 가 저장되어있음 ( 주소 개념 )
//function , first-class function : 함수형 프로그래밍이 가능하다.

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count} , type: ${typeof count}`) //value : 17 , type: number
console.log(`value : ${size} , type: ${typeof size}`) //value : 17.1 , type: number

// number - special numeric values : infinity , -infinity , NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 0;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678945456465456465465464654445464564654654564545645645646545646546454n;  // over (-2**53) ~ 2*53
console.log(bigInt);
console.log(typeof bigInt);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

//boolean
// false :0, null, undefined, NaN, ""(empty string)
// true :any other value
const canRead = true;
const test = 3 < 1;//false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null - 너는 텅텅 비어있는 empty 값이야
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined - 선언은 되었지만 아무것도 아직 값이 지정되지 않음
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects , 고유한 식별자를 만들때 사용됨
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`); // symbol 을 표시할때는 항상 그냥은 표시 못하고 .description 을 사용해야함

// object, real-life object , data structure
const ellie = {name: "ellie", age: 20}; // ellie 자체는 const로 수정이 불가능하게 막혀있지만 name 과 age는 변경이 가능함
ellie = 3; // const 라서 변경 불가
ellie.age = 21; // 이건 변경 가능

// 5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = "7" + 5; // string
console.log(`value : ${text}, type : ${typeof text}`);
text = "8" / "2"; // number
console.log(`value : ${text}, type : ${typeof text}`);
text = "hello";
console.log(text.charAt(0)); //h
text = 1;
console.log(text.charAt(0)); //error !!! 의도한 에러
