const print = require('./export');

function add(a, b) {
    return a + b;
}

print(add(1, 2)); // 3

/* 
1. 재활용
2. 독립성(단일책임원칙), 유지 보수가 쉬워진다.
=> print라는 기능의 함수를 바깥으로 따로 분리하여 사용한 것을 모듈화(reactJS, vueJS)
*/
