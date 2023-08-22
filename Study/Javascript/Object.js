// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Object.assign()
/*
배열의 복사본을 만드는 함수.
매개변수로는 target, sources 두가지를 받고, target에 sources를 복사한다.
undefined나 null값이 있어도 그대로 진행.
깊은 복사까지는 아니고, 속성값이 객체에 대한 참조값이라면 해당 참조값만 복사한다.
객체 병합용으로도 쓰지만
*/

const objAssign = { a: 1, b: 2 };
const objAssign2 = { b: 10, c: 11 };
Object.assign(objAssign, objAssign2);
console.log(objAssign); // { a: 1, b: 10, c: 11 }

const copyAssign = Object.assign({}, objAssign);
// 첫번째 인자로 빈 객체를 주면 sources와 동일한 속성을 가진 객체가 생성. 복사 시 사용됨
console.log(copyAssign); // { a: 1, b: 10, c: 11 }

const objA = { 1: "a", 2: "b" };
const objB = { 과일: "사과", 자동차: "bmw" };
const newAssign = Object.assign({}, objA, objB);
console.log(newAssign); // { '1': 'a', '2': 'b', '과일': '사과', '자동차': 'bmw' }
