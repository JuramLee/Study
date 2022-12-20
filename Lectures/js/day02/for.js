for (let i = 0; i < 10; i++) {
    console.log(`현재숫자는${i + 1}입니다.`);
    // 1~10
}

// for문의 조건식이 언제 false인지 비교하고
// 그 바로 직전의 값을 i에 대입하면 그 때까지 반복

for (let i = 10; i > 0; i--) {
    console.log(`현재숫자는${i}입니다.`);
}
// 10~1

// 중첩 반복문
// => 반복문 안에 반복문

// 성용고등학교 (1,2,3학년 => 9반)

for (let i = 0; i < 9; i++) {
    console.log(`1학년 ${i + 1}반`);
}
for (let i = 0; i < 9; i++) {
    console.log(`2학년 ${i + 1}반`);
}
for (let i = 0; i < 9; i++) {
    console.log(`3학년 ${i + 1}반`);
}

// 중첩 for문
for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i}학년 ${j}반`);
    }
}

// quizz.
// 구구단 한번 만들어보세요
// 1 x 1 = 1;
// 1 x 2 = 2;

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}
