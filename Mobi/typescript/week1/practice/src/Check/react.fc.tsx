/* 1. React.FC
1) react 18 버전 이전까지 FC 사용을 지양했던 이유
    - children prop이 optional로 포함되어 있어 props 타입이 명확하지 않다.
    - TS의 제네릭 문법을 지원하지 않는다. 그 이유는 T를 넘겨줄 방법이 없다.
    - defaultProps가 잘 동작하지 않는다. 즉, defaultProps를 사용하여 props의 초기값을 설정해도 인식을 잘 못한다.
    - 네임스페이스 패턴을 이용할 때 불편하다
      네임스페이스란 앱이나 라이브러리를 위해 전역 범위에 많은 변수, 함수, 객체 등으로 어지럽히지 않도록 하기 위해
      전역 객체를 하나만 만들고 모든 기능을 이 객체에 추가하는 패턴을 말한다.
    - undefined, string, number를 반환할 수 없다. => 리액트 18부터 반환 가능
      React.FC의 리턴값이 React.ReactElement였지만 React.ReactNode로 변경되어 반환이 가능하다.
2) 대안
    - PropsWithChildren, PropsWithRef 등의 헬퍼 타입을 선언함으로 명시해준다..
    - props 옆에 타입을 명시해주는 것 (const App = (props: Props) => {})
*/

import React from 'react';

type ColorType = {
  color: string;
};

const ColorFC: React.FC<ColorType> = ({ color }) => {
  return <>{color}</>;
};

export default ColorFC;

// export default function ChildrenCheck() {
//   return (
//     <ColorFC color='red'>   // 여기서 children <div>가 ColorFC에서는 인지를 못한다.
//       <div>'이건 children인데 보여?'</div>
//     </ColorFC>
//   );
// };

export function ColorProps({ color }: ColorType) {
  return <>{color}</>;
}
// FC 말고 function을 사용해서 props 형식으로 가져와 사용하면 children으로 있는 <div> 때문에 에러가 생김

// Generic에서 Type을 넘길 방법이 없다. (#41 코드)
// type GenericProps<T> = {
//   prop: T;
//   callback: (t: T) => void;
// };

// const GenericComponent:React.FC<??> = <T>(props: GenericProps<T>) => {
//   /*...*/
// };

// React 18버전부터는 암묵적 children 선언이 제거되어 사용이 가능하다.
type ColorType2 = {
  color: string;
  children: React.ReactNode;
};

export const ColorFC2: React.FC<ColorType2> = ({ color, children }) => {
  return (
    <>
      {color}
      {children}
    </>
  );
};

/* Reference
- React.FC 사용 지양하기(https://velog.io/@yena1025/FunctionComponent-FC-%EC%82%AC%EC%9A%A9-%EC%A4%84%EC%9D%B4%EA%B8%B0-24jhm0wp)
- 리액트에서 FC를 사용하지 말아야 하는 이유(https://emewjin.github.io/why-not-fc/)
*/
