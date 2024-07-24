// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// 객체를 결과값으로 갖는 새로운 프로미스를 반환하는 함수가 된다
// 애초에 프로미스 객체를 반환하는 함수라면 그대로 작동하도록 둔다
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "감자",
                id: "jimmee"
            });
        }, 1500);
    });
}

// await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();