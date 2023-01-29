// import { Button } from "./style";
import * as S from './style';

function Button(props) {
  const { variant, shape, size, children, ...rest } = props;
										  // 나머지 매개변수
  return <S.Button variant={variant} shape={shape} size={size}></S.Button>;
}

export default Button;
