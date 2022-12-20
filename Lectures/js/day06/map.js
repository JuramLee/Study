/*
1. for of 사용 가능
2. 가독성 []접근법이 아닌 정확한 메서드를 통해 데이터를 찾아올 수 있음
3. 문자열이 아닌 값도 키로 사용가능
*/


// http response status code(http응답상태코드) ->  서버가 응답을 주는 http reponse
const errobj = {
    404: '페이지가 없습니다.',
    500: '서버오류',
    400: '사용자 오류',
    401: '권한 오류',
};          

const errMap = new Map([
    [404, '페이지가 없습니다'],
    [500, '서버오류'],
    [401, '권한오류'],
]);

// console.log(errobj.404); 오류
// console.log(errobj[404]); 오류

console.log(errMap.get(404));
errMap.set(200, '성공하셨습니다');

for (let key of errMap.keys()) {
    console.log(key);               //key 
}

for (let value of errMap.values()) {
    console.log(value);             //value
}

for (let entry of errMap) {
    console.log(entry);             //[key, value]
}

// 맵 -> 객체화
let mapObj = Object.fromEntries(errMap);
console.log(mapObj);

// 객체 -> 맵       => key값이 string으로 들어가는 단점이 있다
let map = new Map(Object.entries(errobj));
console.log(map);