// 1. Date 객체를 생성하는 방법
//  생성자
let date1 = new Date();
console.log(date1);

let date2 = new Date("2024.07.20");
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

// 인수로 타임 스탬프 값을 전달해주면 해당 시간만큼 지난 시점이 저장된다
let date4 = new Date(ts1);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes(); 
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds
);

// 4. 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
// 한국에서 통용되는 시간 양식으로 출력
console.log(date1.toLocaleString());
