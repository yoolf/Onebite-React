// 다른 함수의 인수로 들어가는 함수(sub)를 콜백 함수라고 한다. 
function main(value) {
    value();  // 매개 변수 자체를 호출하는 것도 가능
}

// 서브를 콜백함수라고 함
function sub() {
    console.log("i am sub");
}

main(sub);

// 선언문 자체(익명 함수)를 매개변수로 넣는 것을 추천한다. 화살표 함수로 선언해도 무관~
main(() => {
    // console.log("i am sub");
});

// 2. 콜백 함수의 활용
// 구조가 거의 흡사한 함수를 구현할 때 콜백함수를 사용하여 중독코드를 작성할 필요가 없다
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++ ) {
        callback(idx);
    }
}

// 매개변수로 함수를 넣어주고 화살표 함수로 구현
repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});