import { func } from "prop-types";


var a = 'var';
const b = 'const';

function foo() {
    const foo = 'global';
    bar()

    function bar() {
        const d = 'bar';
        console.log('juram');
    }
}

foo();

/*
가상의 실행컨텍스트

1. 전역 실행 컨텍스트 생성
2. 전역 실행 객체 생성 (빌트인 객체)
3. 전역 실행컨텍스트 평가
4. Lexical environment ( a, b, foo() )
5. 실행

6. foo() 실행
7. 함수 실행 컨텍스트 생성
8. 평가 ( foo, bar() )
9. 실행

10. bar() 실행
11. 함수실행컨텍스트 생성
12. 평가 ( d )
13. 실행 - 종료

* 자바스크립트의 실행은 콜스택 자료구조에서 이루어진다
  또한 실행이 종료된 실행컨텍스트는 콜스택에서 삭제

  global이 삭제되는 조건은 참조값이 0이면 삭제(모든 함수가 실행되었는데 남아있을 이유가 없음)

  글로벌 객체가 삭제되었는데 이후에 클릭이벤트를 일으켜서 전역 변수 값을 수정한다면?

  Lexical Environment는 실행 컨텍스트와는 별개. 따라서 실행 컨텍스트는 참조하는 값이 0이 되어야만 삭제되고, 
  해당 컨텍스트와는 별개로 저장소는 살아 잇음. 그 기능을 응용한 것이 클로저
*/