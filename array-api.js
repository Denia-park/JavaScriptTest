// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange']; // API 설명 중 매개변수에서 ? 가 있으면 넣어도 되고 , 안 넣어도 되고
    // const result = fruits.join(); // apple,banana,orange : 둘 다 동일하게 나옴
    const result = fruits.join(','); // apple,banana,orange : 둘 다 동일하게 나옴
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(','); // limit 에 숫자를 넣으면 해당 하는 숫자 만큼 List가 짤린다.
    console.log(result); // ['🍎', ' 🥝', ' 🍌', ' 🍒'] , limit 에 2 넣으면 : ['🍎', ' 🥝'] 로 나온다.
    const result1 = fruits.split(); // separator 를 넣지 않으면 fruits 문자열이 그대로 List에 들어간다. (원소가 1개인 List)
    console.log(result1); // ['🍎, 🥝, 🍌, 🍒'] (원소가 1개인 List)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // ★ array 자체의 순서도 반대로 뒤집어 버린다.
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result0 = array.splice(0, 2); // 0번지에서 2개 지운다. [1,2] 가 return , array 는 [3,4,5]
    const result = array.slice(2, 5); // 2 : start , 5 : end
    console.log(result);
    console.log(array);
    // splice 는 배열 자체를 수정
    // slice는 배열에서 원하는 부분만 가져온다.
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90); // callback 함수의 return 값이 true 첫번째 요소를 가져온다.
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // console.clear();
    const result = students.some((student) => student.score < 50); // 50점 보다 낮은 애가 1명이라도 있으면 true
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50); // 모든 요소가 주어진 조건에 만족해야 true
    console.log(result2);
}
// console.clear();
// Q9. compute students' average score
{
    //reduce 는 어떤 값을 누적 할때 , 모아둘 때 사용한다.
    //한번에 이해하기는 어렵다.
    /*
    students.reduce((prev, curr) => {
    console.log("---------------");
    console.log(prev);
    console.log(curr);
    return curr;
    }, 0);
    * */
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result10 = students
        .map((student) => student.score)
        .join();

    const result = students
        .map((student) => student.score)
        .filter((score) => score >= 50)
        .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => b - a)
        .join();
    console.log(result);
}
