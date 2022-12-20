// 순회 가능한 객체 => map, set, arr
// [Symbol,iterater]()리는 매서드를 가지고 있는 객체
// 대표적으로 size와 length와 같은 길이를 가지고 있음

let obj = {
    name: '김성용',
    age: 20,
    height: 190,
};

// 일반 객체는 순회 가능하지 않습니다.
// 그러나 순회가능하지 않은 객체도 사용할 수 있는 반복문이 존재
// 키를 가지고 있는 오브젝트라면 적용이 가능한 for in문
// 객체를 반복해서 데이터를 조작하고 싶을 때 사용
// 배열 또한 객체이기 때문에 배열도 사용할 수 있음

for (const key in obj) {
    console.log(obj[key]);
}

// 순회 가능한 객체에서 사용할 수 있는 반복문

// forEach
const arr = [0, 1, 2, 3];
// (요소, 인덱스, 원본배열)
arr.forEach((el, index, arr) => {
    console.log(el, index, arr);
    //0, 0,  [0,1,2,3]
    //1, 1,  [0,1,2,3]
});

// for of
// 반복문에서 인덱스 번호가 필요 없고, 증감식이 필요 없다면(전체를 순회해야한다면)

/* 
for (let i=0; i<arr.length; i++2){
    console.log(arr[i-1])
}
*/

// 단순히 배열 전체 요소의 값만 필요하다면
// ES6
for (const el of arr) {
    console.log(el); // 0,1,2,3
}
