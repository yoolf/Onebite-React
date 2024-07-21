// 비동기함수는 JS 엔진이 아닌 Web APIs에서 실행됨 다른 함수는 JS 엔진에서 실행된다

console.log(1);

// 3초 후 2가 출력되는 비동기 함수 
// 비동기 작업과 콜백 함수를 Web APIs에 전달한다
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);