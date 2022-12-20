//비교 연산자

5 == 5; // true
5 == '5'; // true
5 == 8; // false

false == '0'; // true
false == 'false'; // false

false == undefined; // false
false == null; // false
null == undefined; // true
null === undefined; // false

5 === 5; // true
5 === '5'; // false

NaN === NaN; //false
// NaN은 JS에서 자신과 일치하지 않는 유일한 값 따라서 숫자인지 확인하기 위해서는
// 자바스크립트의 빌트인(내장, 기본적으로 설정되어있는) 객체의 isNaN(a) ;; true
/* 
let a = NaN;
a === NaN; // false
isNaN(a) // true
*/
0 === -0; //true

5 != 8; // true
5 != 5; // false
5 != '5'; // false

5 !== 8; //true
5 !== 5; // false
5 !== '5'; // true

// 값은 5, //  false
// 타입 number, string // true ---> true
// 값이 같아 그러니까 false[값이 같아] 아니야? 아니야 타입이 다르니까 true[값이 달라]야

// 논리연산자
