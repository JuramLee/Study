let seongyong = {
    name: '김성용', // ,가 없아면 Parse
    age: 20, // prettier, 오타가 있거나 작동이 안되면 prettier가 먹지 않는다
    height: 190,
    hobby: '축구',
};

console.log(seongyong.name); // 김성용
console.log(seongyong['age']); // 20
console.log(seongyong); // object

seongyong.hobby = '코딩';
console.log(seongyong);

// 자주 사용하지 않습니다.
// new -> 생성자
// 붕어빵 기계(틀) ===> 새로운 붕어빵(객체)

let kong = new Object();
kong.name = '콩이';
kong.food = '회';
console.log(kong);

// 두 객체를 합치는 기능
// 중복 키 값이 있으면, 키 값은 유니크해야하기 때문에 덮어씌어집니다.
const newObj = Object.assign(seongyong, kong);
console.log(newObj);
