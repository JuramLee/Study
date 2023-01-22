const arr = [];
console.log(arr[0]); // undefined
arr[1] = 1;
arr[3] = 3;
console.log(arr); // [ <1 empty item>, 1, <1 empty item>, 3 ]
console.log(arr.length); // 4

// -> 인덱스 3이라는 것은 방이 몇개 있다는 => 4개

const newArr = ['김성용', '조상현', '구현서'];

// if (newArr.indexOf('김태기') === -1) {
//     newArr.push('김태기');
// }

if (!newArr.includes('김태기')) {
    newArr.push('김태기');
}

console.log(newArr); // 김태기님 추가
console.log(newArr.indexOf('김태기')); // 3

// split
const phone = '010-1234-1234'; // ["0","1", .... ]
// 문자열(문자로 이루어진 배열) - 배열
console.log(phone.length);

const splitArr = phone.split('-');
console.log(splitArr);
// ['010', '1234', '1234'] // 3

// 내장함수
// push
const arr1 = [1, 2];
arr1.push(3, 4); // ==>[1,2,3,4]

// concat
const arr2 = [1, 2];
const arr3 = [3, 4];
const result = arr2.concat(3, 4); // ==> [1,2,3,4]
const result2 = arr2.concat(arr3); // ==> [1,2,3,4]
console.log(result, result2);

// 배열 관련 함수를 사용할 때 가장 주의해야되는 것
// 1. 반환 값 존재 여부
// 2. 원본 데이터 훼손 여부
// 개발자의 목적에 따른 올바른 알고리즘 선택

//pop
const arr4 = [1, 2, 3, 4];
const result3 = arr4.pop(); // pop은 원본을 훼손, 제거한 값을 반환
console.log(result3, arr4); // 4, [1,2,3]

//shift, unshift
const arr5 = [1, 2, 3, 4];
arr5.unshift(5);
console.log(arr5); // 5 1 2 3 4
arr5.shift();
console.log(arr5); // 1 2 3 4

// slice(start,end)
// start번째 인덱스부터 시작하여 end 직전까지의 요소만 배열을 복사하여 반환

const apart = ['민식님', '성훈님', '상현님', '석현님'];
console.log(apart.slice(1, 3)); // ['성훈님', '상현님'];
console.log(apart.slice(-3, -1)); // ['성훈님', '상현님'];
console.log(apart.slice(1, 1)); // []

// splice(start, deleteCount, additem);
// start번째 인덱스부터 시작하여 몇개의 데이터를 삭제할 것인지
// 그리고 제거한 위치에 어떠한 값을 추가할 것인지 (생략가능)

// 원본 훼손
const deleteItem = apart.splice(1, 2, '배고프다');
console.log(apart); // ["민식님", '배고프다', "석현님"]
console.log(deleteItem); // ["성훈님", "상현님"]

const miunsApart = ['민식님', '성훈님', '상현님', '석현님'];
miunsApart.splice(-1, 2);
// miunsApart.splice(-2, 2);
console.log(miunsApart); // [ '민식님', '성훈님', '상현님' ]
