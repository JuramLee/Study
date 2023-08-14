/*
배열을 얕은 복사하는 방법
* 얕은 복사란? 배열의 최상위 요소가 원시값이라면 복사하지만, 객체라면 원본 배열을 참조하게 된다(주소값만 복사)
	1. 전개 연산자 ...
	2. Array.slice();
	3. Array.from();
배열을 깊은 복사하는 방법
	JSON.stringfy()를 사용해 문자열로 변환 후 JSON.parse()로 재구성 하는 방법이 유일하다
*/

const myArr = [0, 1, 2, 3, 4, 5];

const spread = [...myArr];
const sliced = myArr.slice();
const fromed = Array.from(myArr);

console.log("spread", spread); // [ 0, 1, 2, 3, 4, 5 ]
console.log("sliced", sliced); // [ 0, 1, 2, 3, 4, 5 ]
console.log("fromed", fromed); // [ 0, 1, 2, 3, 4, 5 ]

const deepCopy = JSON.parse(JSON.stringify(myArr));
console.log("deepCopy", deepCopy); // [ 0, 1, 2, 3, 4, 5 ]

// ---------------------------------------------------------------------------------------------------------------

/*
정적 메소드
1. Array.from()
2. Array.isArray()
	3. Array.of()
*/

const staticArr = ["a", "b", "c"];

const arrFrom = Array.from(staticArr); // [ 'a', 'b', 'c' ]
const isArr = Array.isArray(staticArr); // true
const ofArr = Array.of(staticArr); // [ [ 'a', 'b', 'c' ] ]

console.log("static", arrFrom, isArr, ofArr);

// ---------------------------------------------------------------------------------------------------------------

// 인스턴스 메소드 (모르는것만 해보자)

// Array.[@@iterator]()
const arr = ["q", "w", "e", "r", "t", "y"];
const eArr = arr[Symbol.iterator]();

// 방법1 for of
for (let one of eArr) {
  console.log(one);
  /*
	q
	w
	e
	r
	t
	y
  */
}

// 방법2 next()를 사용한 순회
console.log(eArr.next().value); // { value: "q", done: false }
console.log(eArr.next().value); // { value: "w", done: false }
console.log(eArr.next().value); // { value: "e", done: false }
console.log(eArr.next().value); // { value: "r", done: false }
console.log(eArr.next().value); // { value: "t", done: false }
console.log(eArr.next().value); // { value: "y", done: false }
console.log(eArr.next().value); // { value: undefined, done: true }

// ---------------------------------------------------------------------------------------------------------------

// Array.at() : 배열의 끝 값 반환
const cart = ["사과", "바나나", "배"];

console.log(cart.at(-1)); // 배 (-1은 제일 마지막 요소를 의미)

// Array.copyWithin() : 배열의 일부를 얕게 복사한 뒤 동일한 배열의 다른 위치에 덮어쓰고 그 배열 반환(length 수정없이 반환)
/* 
Array.copyWithin(target, start, end);
	- target : 복사한 값을 넣을 위치를 가리키는 인덱스. 음수면 끝에서부터 계산함
			   만약 배열의 길이보다 크거나 같으면 아무것도 복사X
			   target 값이 start 이후라면 복사한 값은 길이에 맞춰 자른다.
	- start : 복사를 시작할 위치를 가리키는 0 기반 인덱스.
			  default는 0, start를 지정하지 않으면 배열의 처음부터 복사
	- end : 복사를 끝낼 위치를 가리키는 0 기반 인덱스.
			end값 이전까지 복사하므로 end값은 제외됨. 값을 지정하지 않으면 배열의 끝까지 복사함
*/

const copyArr = [1, 2, 3, 4, 5, 6];
const copy1 = copyArr.copyWithin(1, 2, 4);
console.log(copy1); // 1, 3, 4, 4, 5, 6
