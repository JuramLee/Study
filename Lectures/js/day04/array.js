const arr1 = [2, 3, 1];
const arr2 = ['banana', 'apple', 'orange'];

arr1.sort();
console.log(arr1); // 123

arr2.sort();
console.log(arr2); // apple banana orange

// 파라미터가 없다면 오름차순으로 정렬
// 원본 훼손

// 유니코드로 기준 (0,1)
const arr3 = [1, 10, 2, 3, 5];
arr3.sort();
console.log(arr3); // [ 1, 10, 2, 3, 5 ]

// sort를 사용할 때는 파라미터를 값을 전달하고 이전값과 현재 값을 비교하여 정렬하는 방식을 사용

arr3.sort((a, b) => {
    if (a > b) return 1; // 1이 앞으로고
    if (a === b) return 0; // 0은 그대로
    if (a < b) return -1; // -1은 뒤로
});

console.log(arr3); // [ 1, 2, 3, 5, 10 ] // 숫자, 영어, 한글, 날짜 모두 정렬 가능
// sort를 이해하기 위해 sort 알고리즘을 이해 할 필요는 없습니다.

const arr4 = [1, 2, 3, 4];
arr4.reverse();
console.log(arr4); // 4 , 3, 2, 1

const arr5 = [1, 2, 3, 4];
const text = arr5.join(':'); // " 1,2,3,4 ", " 1:2:3:4 "
const text2 = arr5.join(''); // 1234;
// 배열을 문자열화
console.log(text2);
