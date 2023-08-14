/*
해당 객체는 다수의 오류가 한 오류로 포장되어야 할 때 사용한다.
Error의 하위 클래스이다.

- try/catch 블록을 사용할 때 오류 처리 방식
- Promise.all()로 묶어 모든 promise들이 해결되었는지 확인할 떄 사용
- 비동기 함수를 사용할 때 올바른 구문을 사용하여 함수가 올바른 순서로 실행되는지 확인
- 동시에 여러 오류를 표시할 수 있으므로 문제를 쉽게 추적할 수 있다.
*/

try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); //[Error: some error]
}
