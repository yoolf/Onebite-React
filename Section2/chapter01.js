// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if(!f1) {
    console.log("falsy");   
}

// 2. Truthy한 값
// 7가지 Falsy한 값을 제외한 모든 값 

// 3. 활용 사례
function printName(person) {
    // undefined나 null이 들어왔을 경우 falsy로 함수가 실행되지 않도록 한다
    if(!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

let person;
printName(person);