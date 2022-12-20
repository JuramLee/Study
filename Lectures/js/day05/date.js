const date = new Date();

console.log(date);

const date2 = new Date(2022, 8);
console.log(date2);

const year = date.getFullYear();
const month = date.getMonth();  // 0~11 1월~12월
const ill = date.getDate();
const day = date.getDay();      // 0~6 일~토

console.log(year, month, ill, day);

date.setFullYear(year-1);
date.setMonth(month -1);    //날짜끼리의 연산도 가능하다

console.log(date);

console.log(date.toLocaleDateString());

/*
p.s.
toString() 문자열화
toDateString() 시분초 생략 Sat Dec 10 2022
toLocalString() 여러분들 현재 지역에 맞는 시간(한국표준시) 2022.12.10 오후 3시 4분
toLocalDateStting() 현재 지역에 맞는 날짜 2022.12.10
*/

/*
동료학습

1. 토이 퍼블리싱 프로젝트 (1주)
2. 오픈 api, handmade api (1~2주)

커밋로그, 커밋메시지(컨벤션) => 미리 정해보기
readme 정리 및 배포할 예정

git flow
-developer 브런치 만들어라..

thrunk based => main 브랜치 하나만 사용하는 전략
pr만 날리고 merge하는거 연습하기
*/