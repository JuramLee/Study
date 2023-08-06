import React, { PropsWithChildren } from 'react';

/*
1) ReactElement : 리액트 컴포넌트를 JSON 형태로 표현한 느낌
                : JSX만 받도록 강제할 수 있어서 원시값을 부여하면 에러를 뱉는다.
                : 클래스형 컴포넌트의 반환타입
*/
type ReactElementType = {
  children: React.ReactNode;
};
export const Element = ({ children }: ReactElementType) => {
  console.log('ReactElementType', children);
  return <div>{children}</div>;
};

/*
2) ReactNode : ReactElement의 슈퍼셋으로 ReactNode는 ReactElement일 수도 있고
               null, undefined, boolean 등이 될 수 있는 유연한 타입이다.
             : 함수형 컴포넌트의 반환타입
*/
type ReactNodeType = {
  children: React.ReactNode;
};
export const Component = ({ children }: ReactNodeType) => {
  console.log('ReactNodeType', children);
  return <div>{children}</div>;
};

/*
3) JSX.Element : ReactElement를 상속받는 인터페이스이다.
               : 가장 제한적인 유형으로 React Element에만 사용가능(원시타입 불가)
*/
type JSXType = {
  children: JSX.Element; // <div>:)</div>
};
export const JSXTest: React.FC<JSXType> = ({ children }) => {
  console.log('JSXType', children);
  return <div>{children}</div>;
};

/*
4) PropsWithChildren : children을 선택적으로 포함하는 컴포넌트의 타이핑을 간추릴 수 있다.
   type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
*/
type WithChildrenType = PropsWithChildren<{
  id: number;
  name: string;
}>;
export const WithChildrenComponent = ({
  id,
  name,
  children,
}: WithChildrenType) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p>{children}</p>
    </div>
  );
};

/*
Reference
- [React] React 컴포넌트(children) 타이핑하기(https://handhand.tistory.com/279)
- React children with typescript. 리액트 children 컴포넌트 타이핑(https://itchallenger.tistory.com/entry/React-children-with-typescript-%EB%A6%AC%EC%95%A1%ED%8A%B8-children-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%83%80%EC%9D%B4%ED%95%91)
- React + TypeScript의 PropsWithChildren(https://www.frontoverflow.com/question/11/React%20+%20TypeScript%EC%9D%98%20PropsWithChildren)
*/
