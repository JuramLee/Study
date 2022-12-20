Array.isArray([]); //true
Array.isArray(new Array()); //true
Array.isArray({}); // false
Array.isArray('Array'); // false

// let obj = new Object(); //object
// 인자로 전달 받은 유사배열객체를 배열화 시킨다
// { length: 2, 0: 'a', 1: 'b' })
/* 
let arr = {
    0: 'a',
    1: 'b',
    length: 2
}
arr.length => 2
arr[0] ==> a
arr[1] ==> b

유사 배열 객체 ==> 객체인데 키값으로 배열의 속성을 가지고 있음
*/

const arr = Array.from({ length: 2, 0: 'a', 1: 'b' });
// 유사 배열 객체를 실제 배열화
console.log(arr); // ['a','b']

// 유사 배열 개체의 콜백함수가 return하는 값으로 배열을 만든 것
const newArr = Array.from({ length: 5 }, (el, index) => {
    return index;
});
console.log(newArr); //[0, 1, 2, 3, 4]

// 인자를 요소로 삼는 배열을 생성
const ofArr = Array.of(1);
console.log(ofArr); // [1]

const offArr2 = Array.of(1, 2);
console.log(offArr2); // [1,2]

//
const fillArr = Array(10).fill(0, 0, 3);
console.log(fillArr);

//
const fillArr2 = Array(10)
    .fill()
    // map의 콜백함수 매개변수는 el(요소), index(인덱스)
    .map((item, index) => {
        return index + 1;
    });

// 1 ~ 10
console.log(fillArr2);

// 7개의 계단
// Array(7).fill(0) [0,0,0,0,0,0,0]
// Array.from({length:7},(v,i)=> 0) [0,0,0,0,0,0,0]
