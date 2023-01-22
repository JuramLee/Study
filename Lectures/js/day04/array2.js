const mapArr = [1, 2, 3, 4, 5];

for (let i = 0; i < mapArr.length; i++) {
    console.log(mapArr[i]);
}

mapArr.map((item) => {
    console.log(item);
});

const newMapArr = mapArr.map((item) => item + 1);
// const newMapArr = mapArr.map((item) => {
//     console.log(item);
//     return item + 1;
// });

// {}블럭문이 있으면 return을 반드시 사용 그러나 복수의 실행문 사용 가능
// 그러나 없으면 return이 생략되기 때문에 return될 값 밖에 쓰지 못함
// {}를 쓰는 경우는 순회한 요소를 내가 다른 연산에 또 사용하고 싶은가

console.log(newMapArr); // [2,3,4,5,6]

// 단순히 반복을 돌려야한다면 for문을 사용해야하고
// 순회 후 새로운 배열을 반환해야한다면 map을 사용하는 것이 좋다.

// filter
// 조건식을 만족하는 값을 return하고 해당 값을 새로운 배열로 반환
const filterArr = [1, 2, 3, 4, 4, 5];
const newFilterArr = filterArr.filter((el) => el !== 4);
console.log(newFilterArr); // [1,2,3,5]

// find
const findArr = [1, 1, 2, 3, 4, 5];
const newFindArr = findArr.find((item) => item === 1);
console.log(newFindArr); // 1

const Posts = [
    {
        id: 1,
        content: 'content1',
        title: 'title1',
    },
    {
        id: 2,
        content: 'content2',
        title: 'title2',
    },
    {
        id: 3,
        content: 'content3',
        title: 'title3',
    },
];

const post = Posts.find((el) => el.id === 1);
post.content = 'content2';
console.log(Posts);

//findIndex
const postIndex = Posts.findIndex((post) => post.id === 1);
console.log(postIndex); // 0
console.log(Posts[postIndex].content); // content2
Posts[postIndex].content = 'content1';

console.log(Posts[0].content); // content1

// reduce
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sum은 누적값, 초기값 0
let result = numArr.reduce((sum, n) => {
    return sum + n;
});

// 1 + 2 + 3 .... + 10
// 총 게시물의 숫자, 총 댓글의 숫자

// 퀴즈
// 1~10까지의 합을 구할 것
// 누적될 때마다 누적 값을 요소로 갖는 배열을 구하세요
// ex [1+2, 1+2+3, 1+2+3+4... ]

let resultArr = [];
const quizzArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
quizzArr.reduce((sum, n) => {
    resultArr.push(sum + n);
    return sum + n;
});
console.log(resultArr);
