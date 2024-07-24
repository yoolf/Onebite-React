// Promise는 비동기 작업을 감싸는 객체
// 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행 등의 기능을 제공
// pending: 아직 작업이 완료되지 않은 상태
// fulfilled: 비동기 작업이 성공적으로 마무리된 상태
// rejected: 비동기 작업이 실패한 상태
// resolve: pending -> fulfilled
// reject: pending -> rejected

// resolve: 비동기 작업을 성공 상태로 바꾸는 함수
// reject: 비동기 작업을 실패 상태로 바꾸는 함수
const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // excutor

    setTimeout(() => {
        // console.log("안녕");
        // resolve로 성공을 알리고 싶은 경우
        // resolve("성공");
        // reject로 비동기 작업이 실패하게 된다
        // reject("왜 실패했는지 이유...");

        const num = null;

        if (typeof num === "number") {
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다");
        }
    },  2000);
});

setTimeout(() => {
    console.log(promise);
}, 3000);

// then 메서드
// 인수로 콜백함수를 전달하면 프로미스가 성공하게 되면 콜백 함수를 실행하고 resolve에 인수로 제공한 결과값 또한 매개변수로 제공한다
promise.then((value) => {
    console.log(value);
})
// then은 promise가 성공했을 경우에만 실행되기 때문에 실패시 catch가 실행된다 
promise.catch((error) => {
    console.log(error);
})