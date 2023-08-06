export {};

/* useRef란
.current 프로퍼티에 데이터를 저장하는 hook함수이다.
클래스형일 땐 createRef() / 함수형이면 useRef()

    1. DOM 객체를 직접 가리켜 내부 값을 변경하거나 focus() 메소드를 사용할 때 사용
    2. ref로 관리하는 값이 변경되어도 리랜더링 하지 않을 때 사용

TS에서 useRef에 대한 정의는 3가지가 있다.
    1) useRef<T>(initialValue: T): MutableRefObject<T>;
    2) useRef<T>(initialValue: T|null): RefObject<T>;
    3) useRef<T = undefined>(): MutableRefObject<T | undefined>;
*/

/*
MutableRefObject<T>
current 프로퍼티 자체를 직접 변경 가능한 타입

RefObject<T>
인자 타입이 null을 허용하는 경우에 사용. current 프로퍼티를 직접 수정할 수 없다.

MutableRefObject<T | undefined>
제네릭의 타입이 undefined인 경우(타입을 제공하지 않은 경우), MutableRefObject<T | undefined>를 반환 */

/* 만약에 ref를 props로 전달할 경우는?
   forwardRef를 사용하면 되지만 사용하지 않는다면 아래와 같이 전달해야한다.
   
    1) ref 객체
        current라는 프로퍼티를 가지는 경우
        RefObject<T>, MutableRefObject<T>는 ref 객체만 가진다.
    2) ref 콜백
        current라는 프로퍼티를 가지지 않는 경우
        Ref<T>는 객체와 콜백 둘다 가진다.

   이렇기 때문에 ref를 props로 넘길 때에는
   Ref<T> 대신 RefObject<T> 혹은 MutableRefObject<T>를 사용하여
   Ref의 타입을 ref 객체로 좁히고 current 프로퍼티를 조회하는 방식으로 코드를 수정하면 된다.
*/

import { useRef } from 'react';

export const Ref = () => {
  const myRef1 = useRef<number>(0); // const myRef1: React.MutableRefObject<number>
  const myRef2 = useRef<number>(null); // const myRef2: React.RefObject<number>
  const myRef3 = useRef<HTMLInputElement>(null); // const myRef3: React.RefObject<HTMLInputElement>
  // const myRef4 = useRef<HTMLInputElement>(); // const myRef4: React.MutableRefObject<HTMLInputElement | undefined>

  const onClickBtn = () => {
    if (myRef1.current) {
      myRef1.current += 1;
      console.log(myRef1.current);
    }
  };

  const onClickBtnHTML = () => {
    if (myRef3.current) {
      myRef3.current.value = '';
      // RefObject 지만 값을 변경할 수 있는 것은 current가 아닌 current.value를 변경하기 때문에 가능
      // myRef3.current = ''; // Cannot assign to 'current' because it is a read-only property.
      // 이처럼 current를 바꾸려하면 동일한 읽기전용 프로퍼티라는 에러가 뜬다.
    }
  };

  console.log(myRef2.current);
  // console.log((myRef2.current += 1));
  // Cannot assign to 'current' because it is a read-only property.

  return (
    <div>
      <button onClick={onClickBtn}>1증가</button>
      <input ref={myRef3} />
      <button onClick={onClickBtnHTML}>input 태그 내용 바꾸기</button>
      {/* <input ref={myRef4} /> // ref는 RefObject만 받는데 정의상 MutableRefObject가 되서 뜨는 에러 */}
    </div>
  );
};

/* 
따라서 DOM 조작이 아닌 변수 용으로 useRef를 사용할 경우,
MutableRefObject<T>를 사용해야 하므로 제네릭 타입과 같은 타입의 초깃값을 넣어주자.

DOM 조작용으로 사용한다면, 
RefObject<T>를 사용해야 하므로 초깃값으로 null을 넣어주자
 */

/* Reference
- TypeScript React에서 useRef의 3가지 정의와 각각의 적절한 사용법(https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5)
 */
