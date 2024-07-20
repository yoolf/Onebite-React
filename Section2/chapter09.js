// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 고전을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name: "Tom", hobby: "Tennis" },
    { name: "Kevin", hobby: "Tennis" },
    { name: "Jane", hobby: "Game" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "Tennis");

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
// 원본 배열을 반환한 새로운 배열을 생성할 수 있다
const mapResult1 = arr2.map((item, idx, arr) => {
    return item * 2;
});

console.log(mapResult1);

// item을 순회하면서 name만 받아서 배열을 생성할 수 있다
let names = arr1.map((item) => item.name);
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

// 숫자로 이루어져있다면 대소기준으로 실행되지 않는다 => 콜백함수에게 넘겨주어야 한다
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
    if(a > b) {
        // b가 a 앞에 오도록 한다
        return 1;
    } else if (a < b) {
        // a가 b 앞에 오도록 한다
        return -1;
    } else {
        // 두 값의 자리를 바꾸지 마라 
        return 0;
    }
})

console.log(arr3);

// 4. toSorted
// 원본 배열을 그대로 두고 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐 반환하는 메서드
let arr6 = ["hi", "im", "potato"];
// 문자열 중간에 뭘 넣을 건지 지정 가능 
const joined = arr6.join(" ");
console.log(joined);