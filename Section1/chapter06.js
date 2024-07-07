// 형변환

// 묵시적 형변환
// Js 엔진이 알아서 형변환 하는 것
let num = 10;
let str = "20";

const result = num + str;
console.log(result);
// 1020 출력
// 특정 형만 변경하여 연산이 정상적으로 수행이 될 때 명시적 형변환됨

// 명시적 형변환
// 프로그래머 내장 함수등을 사용해 직접 형변환을 명시
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);
// 20 출력

let str2 = "10개";
let strToNum2 = parseInt(str1);
// 숫자가 아닌 값을 포함하는 변수를 숫자로 변환해준다
// 그러나 숫자가 문자열의 앞에 나와있어야 원활하게 된다
console.log(strToNum2);
// 20 출력

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
