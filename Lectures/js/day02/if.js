let num = 5;
let answer;

if (num > 0) {
    answer = '양수';
} else {
    answer = '음수';
}

console.log(answer); // 양수

if (num > 0) {
    answer = '양수';
} else if (num < 0) {
    answer = '음수';
} else {
    answer = '0';
}

console.log(answer); // 양수

// early return
// p.s
// if (num > 0) return (asnwer = '양수');
// if (num < 0) return (asnwer = '음수');
// if (num === 0) return (asnwer = '0');
// console.log(answer);
