1. for 반복문
```
for (초기식; 조건식; 증감식) {
    console.log("반복");
}
```

일정 조건 이후로 중단하는 방법   
```
for (let idx = 1; idx <= 10; idx++) {
    console.log(idx);

    if (idx >= 5) {
        break;
    }
}

```

특정 회차를 건너뛰는 방법  
```
for (let idx = 1; idx <= 10; idx++) {
    if (idx % 2 === 0) {
        continue;
    }
    console.log(idx);

    if (idx >= 5) {
        break;
    }
}

```