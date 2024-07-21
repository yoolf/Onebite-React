// function add(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }

// // 비동기 함수 외부에서 함수의 결과 값을 이용하려면 호출 시 콜백함수 인자로 넣어 비동기 함수 내부에서 콜백함수를 호출하도록 한다
// // add -> setTimeout -> 3초 후 -> 더하기 연산 -> sum(value) 출력
// add(1, 2, (value) => {
//     console.log(value);
// });


// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food); 
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

// 기능이 늘어날수록 가독성이 안좋아짐 => 콜백 지옥
orderFood((food) => {
    console.log(food);
    
    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    });
})