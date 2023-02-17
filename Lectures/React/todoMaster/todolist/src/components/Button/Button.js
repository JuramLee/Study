// import { Button } from "./style";
import * as S from "./style";

function Button(props) {
  const { variant, shape, size, children, ...rest } = props;
                                          // 나머지 매개변수
  return (
    <S.Button variant={variant} shape={shape} size={size} {...rest}> // 속성들이 return에 있는 버튼들에 그대로 전달된다
      {children}
    </S.Button>
  );
}

export default Button;
