// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

// 대괄호 내에 변수를 넣어주고 배열을 할당해주면 각각 해당하는 원소들이 변수에 할당된다
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);
// 새로운 변수를 추가하는 것도 가능하다

// 2. 객체의 구조 분해 할당
let person = {
    name: "감자",
    age: 25,
    hobby: "게임",
};

// 배열의 구조 분해 할당과 동일
// 객체의 이름을 다른 이름으로 받는 것도 가능하다
let {
    name, age: myAge, hobby, extra = "hello",
} = person;
console.log(name, myAge, hobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
    console.log(name, age, hobby, extra);
};

// 객체를 넘겨야 하고 매개변수를 받을 때는 중괄호를 사용하여 구조 분해 할당이라는 것을 명시해야 한다
func(person);