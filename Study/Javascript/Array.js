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

// Array.entries() : 배열의 각 인덱스에 대한 key-value를 가지는 새로운 배열 객체 반환
/*
sparse arrays와 사용하면 entries() 메서드가 빈 슬롯을 undefined 가 있는 것처럼 순회한다.
*sparse arrays란?
	배열의 길이보다 원소의 개수가 무조건 작은 배열이다.(빈 값도 포함)
	전체 원소들 중 임의의 원소에 대해 해당 원소에 N번째 앞에 있는 원소를 빠르게 찾기 위해 사용하는 자료 구조
	N번째 정점을 찾기 위해선 매 정점마다 +1씩 가야하므로 O(N)의 시간이 든다.
	하지만 이때 sparse를 이용하면 O(logN)만에 갈 수 있다.

	즉 한번에 한개씩 이동하는 것이 아니라 2^i개씩 이동하여 찾는 방식이다.
*/
const charArr = ["가", "나", "다", "라", "마"];
for (let [idx, el] of charArr.entries()) {
  console.log(idx, el);
  /*
 0 가
 1 나
 2 다
 3 라
 4 마 
  */
}

// Array.every() : 배열 안 모든 요소가 주어진 판별 함수를 통과하는지 테스트 후 boolean으로 반환
/*
callbackFn : 각 요소를 시험할 함수. 아래 3가지 인자를 받는다.
	element : 처리되는 현재요소
	index : 현재 요소의 인덱스
	array : every를 호출한 배열
thisArg : callbackFn을 실행할 때 this로 사용하는 값

every는 빈 슬롯에 콜백함수를 실행하지 않는다.
*/
console.log(charArr.every((el, idx, arr) => arr.includes("사"))); // false
console.log([2, , 2].every((x) => x === 2)); // true

// Array.flat() : 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열 생성
// depth의 기본값은 1이다. flat()은 결국 평탄화 작업이라고 생각하자.

const arr1 = [1, 2, [3, 4]];
const arr2 = [1, 2, [3, 4], , 5, 6, , [8, 9, [10, 11]]];
const arr3 = [
  1,
  2,
  [3, 4],
  ,
  5,
  6,
  ,
  [8, 9, [10, 11, [12, 13, [14, 15, 16], 17]]],
];
console.log(arr1.flat()); // [1, 2, 3, 4]
console.log(arr2.flat()); // [ 1, 2, 3, 4, 5, 6, 8, 9, [ 10, 11 ] ]
// 공백 제거해주고 인자로 아무 값도 없으면 한번의 배열만 평탄화
console.log(arr2.flat(2)); // [ 1, 2, 3, 4, 5, 6, 8, 9, 10, 11 ]
// 인자로 2를 주면 2depth까지 평탄화
console.log(arr3.flat(Infinity));
// infinity는 1depth 배열이 될때까지 평탄화
// [ 1,  2,  3,  4,  5,  6, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17 ]

// 대안으로 reduce와 concat이 있다. 아래 두 함수는 동일한 결과를 출력한다.
console.log(arr1.flat());
// [1, 2, 3, 4]
console.log(arr1.reduce((acc, currentValue) => acc.concat(currentValue), []));
// [1, 2, 3, 4]

// Array.flatMap()
/*
먼저 매핑함수를 사용해 각 요소에 대해 map 실행 후 결과를 새로운 배열로 평탄화.
depth가 1인 flat이 뒤따르는 map과 동일하지만, 이중 배열을 하나의 메소드로 병합할 때 더 효율적이다.
*/

let flatArr = [1, 2, 3, 4];

flatArr.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

flatArr.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// 한 레벨만 평탄화됨
flatArr.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

let flatMapArr = ["it's Sunny in", "", "California"];

console.log(flatMapArr.map((x) => x.split(" ")));
// [["it's","Sunny","in"],[""],["California"]]

console.log(flatMapArr.flatMap((x) => x.split(" ")));
// ["it's","Sunny","in","","California"]
