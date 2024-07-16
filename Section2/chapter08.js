// 5가지 요소 순휘 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드

let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스를 찾아 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index);

// 배열에 중복된 값이 있을 경우 가장 앞에 있는 요소의 인덱스를 반환한다

// 배열에 존재하지 않을 경우 -1을 반환한다

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 특정 요소의 인덱스를 반환하는 메서드

let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 2);

console.log(findedIndex);

// indexOf는 얕은 비교를 사용하기 때문에 참조값을 기준으로 비교하기 때문에 property로는 비교할 수 없다 따라서 객체를 찾으려고 할 때는 제대로 동작하지 않는다 findIndex는 프로퍼티의 값을 기준으로 비교시켜줄 수 있기 때문에 객체의 위치를 찾아낼 수 있다

// 5. find
// 모든 요소를 순회함녀서 콜백함수를 만족하는 요소를 찾고 해당 요소를 반환한다

let arr5 = [
    { name: "Jake" },
    { name: "Anna" },
];

const finded = arr5.find((item) => item.name === "Anna");

console.log(finded);