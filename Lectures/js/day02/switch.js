let month = 2;

/* 
변수
1. 재사용
2. 가독성
변수의 기본은 어떤 변수인지 알아 볼 수 있도록 변수명을 작성하셔야합니다.
*/

switch (month) {
    case 1:
        console.log('January');
        break; // 탈출문 비슷한 용어로 return
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('None');
}

/* 
대부분의 경우에는 if문으로 해결 (if문은 길어지면 길어질 수록 가독성이 좋지 않아요)
조건식이 아니며 (특정한 값) 경우의 수가 굉장히 많은 경우 switch문
*/
