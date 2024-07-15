// 1. Spread 연산자
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1, 
    b: 2,
};
let obj2 = {
    // a: obj1.a,
    // b: obj1.b,
    // 스프레드 연산자를 사용하여 간략화
    ...obj1,
    c: 3,
    d: 4,
};

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

// spread 연산자를 이용하여 객체나 배열의 값을 받아올 수 있다
funcA(...arr1);

// 2. Rest 매개변수
// 함수를 호출하면서 받아온 모든 인수들이 배열 형태로 저장
// 매개변수를 받아오는 괄호 내에 사용되었기 때문에 ...는 spread 연산자와 다르다는 것을 주의할 것
// rest 뒤에 추가적인 매개변수를 받아올 수는 없다, 지금부터 뒤에 나오는 모든 인수들을 배열에 저장한다는 의미이기 때문에

function funcB(...rest){
    console.log(rest);
}

funcB(...arr1)