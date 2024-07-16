// 6가지의 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가
// 요소를 추가한 뒤 변경된 배열의 길이를 반환한다
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(shiftedItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드, 새로운 배열 길이를 반환한다
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4);

// shift, unshift는 push, pop 보다 오래 걸린다

// 5. slice
// 배열의 특정 범위를 잘라 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5];
// 2번째 인덱스부터 5번째 인덱스 전까지 잘라낸다
let sliced = arr5.slice(2, 5);
// 2번째 인덱스부터 끝까지 잘라낸다
let sliced2 = arr5.slice(2);
// 뒤에서부터 3개 자를 것
let sliced3 = arr5.slice(-3);

console.log(sliced);
console.log(sliced2);
console.log(sliced3);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concatArr = arr6.concat(arr7);
console.log(concatArr);