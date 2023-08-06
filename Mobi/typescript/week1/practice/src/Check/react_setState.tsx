import { useState } from 'react';

export {};

/*
const [state, setState] = useState(0);을 하면
state는 타입이 number라는걸 알 수 있다. 

그렇다면 setState는?

    1. SetStateAction<T>
        여기서 T의 타입은 S타입(initial state의 타입)이라고 생각하면 된다.
        S타입의 매개변수(prevState)를 입력받아 S타입의 값을 리턴하는 함수
    2. Dispatch
        SetStateAction을 제네릭으로 받아 실행시키는 역할
*/

export const MotherComponent = () => {
  const [state, setState] = useState(0);
  // const setState: React.Dispatch<React.SetStateAction<number>>

  return (
    <div>
      <SonComponent setter={setState}>{state}</SonComponent>
    </div>
  );
};

type Props = {
  setter: React.Dispatch<React.SetStateAction<number>>;
  children: number;
};

export const SonComponent: React.FC<Props> = ({ setter, children }) => {
  console.log(children);

  return (
    <>
      <div>나는 아들 컴포넌트!</div>
      <button onClick={() => setter}>+1</button>
    </>
  );
};
