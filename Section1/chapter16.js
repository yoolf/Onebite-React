// 1. 상수 객체
const animal = {
    type: "cat",
    name: "navi",
    color: "black",
};

console.log(animal);
// 상수 객체에는 새로운 객체를 생성해 할당하는 것은 오류
// animal = { a : 1 };

// 그러나 객체 프로퍼티를 추가, 수정, 삭제하는 것은 괜찮다
animal.age = 2;
animal.name = "까망";
delete animal.color;

console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티를 말함

const person = {
    name: "감자",
    // 메서드 선언
    // 함수 프로퍼티로, 객체의 동작을 정의
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();