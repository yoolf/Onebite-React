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

// then 메서드는 promise 객체를 그대로 반환한다
// 따라서 then과 catch를 따로 호출하지 않고 함께 사용하는 것이 가능하다
// promise chaining
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

// 비동기 작업을 함수 내에서 프로미스 객체를 생성하면서 동적으로 매개변수를 받아 숫자값을 바꿔가면서 사용하도록
function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise;
}

const p = add10(0);
p.then((result) => {
    console.log(result);

    const newP = add10(result);
    newP.then((result) => {
        console.log(result);
    });
    return newP;
    // then 메서드의 반환값은 프로미스 객체라고 했는데 콜백 지옥을 방지하기 위해 새로운 프로미스 객체를 반환하도록 해주면 p.then 의 리턴값이 newP가 된다
});

// then 메서드를 연달아 실행할 때는 중첩시키지 말고 리턴 값을 받아 실행하도록 해주면 간결해진다

add10(0)
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
    