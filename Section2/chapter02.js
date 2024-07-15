function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue());
// 둘 다 True여야 하는데 Talse가 나왔으니 이미 False, 뒤의 함수는 실행하지 않는다
// F가 나오기 때문에 단락 평가로 인해 returnTrue가 실행되지 않는다
// false만 출력

console.log(returnTrue() && returnFalse());
// 둘 다 True여야 하기 때문
// T만으로는 결과를 알 수 없기 때문에 returnFalse까지 실행한다
// true, false 출력

// console.log(returnTrue() || returnFalse());
// 둘 중 하나만 True여도 되는데 True가 나왔으니 단락평가로 인해 다음 함수는 실행하지 않는다

// Truthy, Falsy한 값에 둘 다 적용이 된다

// 단락 평가 활용 사례

function printName(person) {
    // undefined일 경우 단락 평가로 인해 name에 접근하지 않고 undefined에 맞게 출력된다
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "감자" });
