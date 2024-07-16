// 2.6 반복문으로 배열과 객체 순회하기
// 1. 배열 순회
let arr = [1, 2, 3];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
    // console.log(arr2[i]);
}

// 1.2 for of 반복문
// 배열에만 할당
for(let item of arr) {
    // console.log(item);
}

// 2. 객체 순회
let person = { 
    name: "J",
    age: 25,
    hobby: "Game",
};

// 2.1 Object.keys 사용
// 객체에서 key 값들만 뽑아서 개로운 배열로 반환한다
let keys = Object.keys(person);
// console.log(keys);

for (let key of keys) {
    // key와 value 순회
    // console.log(key, person[key]);
    // 더 깔끔하게 유지
    const value = person[key];
    // console.log(key, value);
}

// 2.2 Onject.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환

let values = Object.values(person);

// console.log(values);

for (let value of values) {
    console.log(value);
}

// 2.3 for in 
// person 객체의 프로퍼티 키를 순서대로 key라는 변수에 할당 
// 객체에만 할당
for (let key in person) {
    const value = person[key];
    console.log(key, value);
}