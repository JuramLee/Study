/* 
자판기라는 함수를 정의
자판기 함수는 처음에  실행되었을 때 '자판기가 가동되었습니다' console
매겨변수로는 coin과 메뉴이름

리턴 값은
잔돈이 0원이면 음료수 이름을 리턴
잔돈이 있으면 음료수 이름과 잔돈을 리턴

선택한 음료수의 값이 coin보다 클 경우
console 금액이 부족합니다.

메뉴

솔의눈  : 300원
비타500 :  500원
콜라    : 1000원

없는 메뉴를 선택하면 존재하지 않는 상품입니다.(선택)

트랜드 a~z 깊이 전문분야

*/

// const drink1 = {
//     name: "솔의눈",
//     price: 300
// }

// const drink2 = {
//     name: "비타500",
//     price: 500
// }

// const drink3 = {
//     name: "콜라",
//     price: 1000
// }

// function menu() {
//     console.log("-------------------메뉴-----------------");
//     console.log("1 = " + drink1.name + "가격" + drink1.price);
//     console.log("2 = " + drink2.name + "가격" + drink2.price);
//     console.log("3 = " + drink3.name + "가격" + drink3.price);
// }

// function machine( coin, name ) {
//     console.log("자판기가 가동되었습니다.");
//     menu();
//     if( coin < drink)

// }










// let err = {
//     100: () => {
//         console.log('금액이 부족합니다');
//     },
//     101: () => {
//         console.log('금액을 잘못 투입하셨습니다');
//     },
//     102: () => {
//         console.log('존재하지 않는 상품입니다.');
//     },
// };

// function changes(coin, productPrice) {
//     return coin - productPrice;
// }

// function result(product, change) {
//     console.log(`주문하신 ${product}이/가 나왔습니다. 잔돈은 ${change}원 입니다`);
// }

// function 자판기(coin, product) {
//     let change; //  잔돈
//     let menu = { 솔의눈: 300, 비타500: 500, 콜라: 1000 }; // 메뉴 객체
//     // 키 = 메뉴이름, 값 = 가격
//     let productPrice = menu[product]; // 300 => 여러분이 선택한 product 의 가격 menu['콜라'] = 1000
//     // 내가 선택한 메뉴의 가격

//     // 예외처리
//     if (coin < 300) return err[101](); // 금액 잘못 투입
//     if (!productPrice) return err[102](); // 없는 메뉴 고른 것
//     if (coin < productPrice) return err[100](); // 금액 부족

//     change = changes(coin, productPrice); // 잔돈 반환
//     if (change === 0) return console.log(product); // 결과 2가지 1. 잔돈이 0원일 때, 2. 잔돈이 0원이 아닐 때
//     return result(product, change);
// }

// 자판기(1000, '솔의눈');
// //coin, product(내가 선택한)
