const a = { name: '이주람' };
const b = { name: '이주람' };

const c = '김성용';
const d = '김성용';


console.log(a === b);
// false
// 참조에 의한 할당

console.log( c === d);
// true

const e = b;
console.log(e === b);
// true

e.name = "이주람";
console.log(b);

// 1. 전개 연산자 (깊은 복사 방법)
const f = { ...b }; // const arr = [ ...d ]
console.log(f);
f.name = "가나다";
console.log(b);
console.log(f);

// 2. Object.assign
const g = {};
const newObject = Object.assign(g, b);
// const newObject = Object.assign({}, b);  => 선언 안하고 바로 사용도 가능


// 3. Lodash deepclone ...