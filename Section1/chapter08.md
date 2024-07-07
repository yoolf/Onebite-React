1. null 병합 연산자   
존재하는 값을 추려내는 기능  
null, undefined가 아닌 값을 찾아내는 연산자  

```
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
// 10 출력
let var5 = var1 ?? var3;
// 20 출력
let var6 = var3 ?? var2;
// 20 출력

let userName = "감자";
let nserNickName = "Jh12";

let displayName = userName ?? userNickName;
```
null이나 undefined가 아니면 처음에 적힌 값이 반환된다.


2. typeof 연산자
값의 타입을 문자열로 반환하는 기능  

```
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
// string 출력
```

3. 삼항 연산자
항을 3개 사용하는 연산자  
조건식을 사용하여 참, 거짓일 때의 값을 다르게 반환

```
let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
// 짝수 출력
```