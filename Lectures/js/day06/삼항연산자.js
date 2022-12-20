let num = 5;
const a = num === 5 ? '참' : '거짓';

console.log(a);     // 참

num < 5 ? console.log('작다') : console.log('크거나 같다');     // 크거나 같다

// 조건부 연산자
// 거짓일 때 실행하지 않고 참일 때만 실행
num < 5 && console.log('작다');         // 실행 X


/*
조건식 ? 참일 때 실행 : 거짓일 때 실행
------
t/f

조건식 && 참일 경우만 실행
*/

num ?  '참' : '거짓;'
// 값이 존재하기 때문에 true (false가 아니기 때문에)

num && '참';        // 참