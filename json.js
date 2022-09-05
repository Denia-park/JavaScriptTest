'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: function () { // 메서드는 json으로 변환되지 않음
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']); // replacer 에 해당하는 자료들만 json 으로 변환하겠다는 의미
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; // name이 들어오면 ellie 를 쓰고 나머지는 그냥 기존 value 를 쓰겠다.
});
console.log(json);

// 2. JSON to Object
// parse(JSON)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); //obj 에는 jump 라는 메서드가 존재하지 않는다.

console.log(rabbit.birthDate.getDate()); //rabbit을 만들때는 Date 객체가 들어갔기 때문에 메서드 사용이 가능
console.log(obj.birthDate.getDate()); // Date를 String으로  가져왔기 때문에 getDate 라는 메서드는 존재하지 않음
