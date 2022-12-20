// 010-1234-1234

const num = "010-1234-1234";

function cut(num) {
    const hasCut = num.split('-');
    console.log(hasCut);
    hasCut[1] = "****";
    console.log(hasCut.join('-'));
    return hasCut;
}

cut('010-1234-1234');

function parsePhone(phone) {
    const origin = phone.split('-');
    origin[1] = '*'.repeat(origin[1].length);
    console.log(origin.join('-'));
}

const lotto = Array(7)
.fill()
// [ <7 empty>]     0~1 * 45 ===> 0~45
// Math.floor(Math.random() * 44 +1)); ===> 1~45
.map(() => Math.floor(Math.random() * 45));

console.log(lotto);