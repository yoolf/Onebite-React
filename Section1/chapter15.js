// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// 객체 내부에 선언된 속성들
// 속성의 타입에는 제한이 없다. key에는 숫자와 문자만이 허용, 띄어 쓸 경우 큰 따옴표로 묶어야 한다.  
let person = { 
    name: "감자",
    age: 25,
    hobby: "game",
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근법 (점 표기법 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

// 괄호 표기법은 변수에 키 값을 담아올 수 있어 동적으로 사용 가능하다. 
let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "student";
person["favoriteFood"] = "주먹밥";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "gamer";
person["favoriteFood"] = "새우깡";

console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1);
console.log(result2);
