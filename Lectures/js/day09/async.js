// const { reject } = require("async");

const callback = (number) => new Promise((resolve, reject) => {
    setTimeout(() => {
        number += 1;
        if(number < 5) return resolve(number);
        reject('err');
    }, 3000);
});

const asyncAddNumber = async (number) => {
    /*
    try{
        ... 실패할 수도 있는 (에러가 날수도 있는 실행문)
    } catch (err) {
        ... 에러처리
        console.log(err);
    }
     */

    // const result = await callback(number);
    // console.log(result);
    // const result2 = await callback(result);
    // console.log(result2);

    try {
        const result = await callback(number);
        console.log(result);
        throw new Error(result); //여기서 해결 못하기 때문에 상위 에러처리시스템으로 넘기는 것
        // const result2 = await callback(result);
        // console.log(result2);
    } catch (err) {
        console.log(err, 123);
    }
};   //this바인딩을 사용하지 않을 거면 화살표 함수가 더 좋음

// async function asyncAddNumber(number) {} 랑 같은 말

asyncAddNumber(3);

// asyncAddNumber(3).catch((err) => {
//     console.log(err);
// })