// import { CSSProperties } from "styled-components";
import * as S from "./Button.style";
import React, { CSSProperties, PropsWithChildren } from "react";

export interface myProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "primary-text";
  shape: "round" | "default";
  size: "small" | "medium" | "large" | "full";
  containerStyle?: CSSProperties; // 어떤 타입인지 모르는 상황 => 일부러 틀린다 => 타입 추천을 받는다 => 70% 해결
  //   children: React.ReactNode;
  //   onClick --> X 이렇게 하면 안되고 extends로 가져와야함
}

// function

// const () =>
const MyButton: React.FC<PropsWithChildren<myProps>> = ({
  variant,
  shape,
  size,
  children,
  containerStyle,
  ...rest
}) => {
  return (
    <div style={containerStyle}>
      {/* styled components의 props로 전달하면 해당 styled에 props type을 주어야만 한다 */}
      <S.Button variant={variant} size={size} shape={shape}>
        {children}
      </S.Button>
    </div>
  );
};

export default MyButton;
