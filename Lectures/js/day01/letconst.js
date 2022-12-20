/* 
선언문
let a;
할당문
a = 5;
컴퓨터한테 변수명과 값을 기억시키기 위한 과정
*/

let a = 5;
a = 6;
/*
let a = 7;
'a' has already been declared
a가 이미 정의되었다. => 중복 선언 불가
*/

const b = 7;
/* 
b = 8;
Assignment to constant variable.
상수에 변수가 할당되었다. => 상수 값을 바꾸지마
*/

console.log('a', a);
console.log('b', b);
console.log(a, b);

/* 
console.log에 변수 혹은 상수를 찍는 방법
(1) ,
(2) +
(3) ``, ${}
*/
console.log('a의 값은', a, '입니다');
console.log('a의값은 ' + a + ' 입니다');
console.log(`a의 값은 ${a} 입니다`);
