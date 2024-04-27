// 1. 함수 표현식
function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
    console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = () => {
    return 1;
};

console.log(varC());


// varC가 값을 반환하기만 한다면 return문도 필요 없다.
let varD = (value) => value + 1;

console.log(varD(11));