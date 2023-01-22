console.log(Math.min(1,2,3));   //1
console.log(Math.max(1,2,3));   //3
const a = [1,2,3,4,5];
console.log(Math.max(a))        //NaN
console.log(Math.max(...a))     //5  => 배열 안에 값 접근
console.log(Math.floor(4.5));   //4

console.log(Math.ceil(4.5));    //5
console.log(Math.sqrt(4));      //2(루트4)

// 0 ~ 1
// 0.01 x 45 = 0.45 = 0
// 0.99 x 45 = 44.xxx = 44
// 0 ~ 45까지의 랜덤한 수
console.log(Math.floor(Math.random() * 45));