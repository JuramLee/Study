const arr = ["arr", "arr", "arr", "arr", "map", "set"];
let set = new Set(arr);

console.log(set);

set.add('성용').add('주람');
// 체이닝
// 반환 값이 오브젝트이므로 해당 오브젝트의 내장함수를 사용 가능

console.log(set);
console.log(set.size);

const setArr = Array.from(set);
console.log(setArr);

const spreadSet = [...set];     // 스프레드 연산자로 새로운 배열 생성
console.log(spreadSet);