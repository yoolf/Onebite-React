// 함수 내부에 또다른 함수를 선언할 수 있다.
// 중첩 함수라고 한다.

// 함수의 선언을 호출보다 이후에 두어도 호이스팅 덕분에 선언과 호출 순서는 문제 없다. 
function getArea(width, height) {
    function another() {
        console.log("another");
    }

    another();
    let area = width * height;

    return area;
}

let area1 = getArea(10, 20);
console.log(area1);