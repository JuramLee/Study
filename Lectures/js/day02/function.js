/* 
add라는 이름을 갖고 있는 함수를
컴퓨터에게 기억 시킬 것,

add라는 함수는
파라미터를 2가지 전달

전달 받은 2개의 파라미터는 숫자이며
이 두개의 파라미터를 더한 값을 반환값으로 삼는 함수

선언만
*/
function add(num1, num2) {
    // return num1 + num2;
    let result = num1 + num2;
    // return result;
}

let addNumber = add(1, 2); //3
console.log(addNumber);

/* 
문자열을 전달받은
print 함수
pritn 함수를 실행하면 반환 값은 없이
console.log() 전달 받은 문자열을 콘솔창에 로그하는 함수
*/

// 선언부
function print(str) {
    console.log(str);
}

// const print = (str) => {
//     console.log(str);
// };

print('안녕하세요'); //실행부
