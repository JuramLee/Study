// 선언부 호이스팅
console.log(a); // error ?? => undefined

var a = 5;
console.log(a); // 5
a = 6;
console.log(a); // 6

//
var a; // 선언만 되어있을 뿐 값이 할당 되어있지 않음 ===> undefined
console.log(a);
a = 5;
console.log(a);
a = 6;
console.log(a);

//
var a = null; // 명확히 값이 비어있다고 할당한 것 ===> null
var a = '';
console.log(a);
console.log(1 + 1 + '2');
