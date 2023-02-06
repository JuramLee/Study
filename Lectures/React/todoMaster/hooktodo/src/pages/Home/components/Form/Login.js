// import Button from 'components/Button/Button';
import Button from "components/Button/Button";
import useInput from "hooks/useInput";
import useInputs from "hooks/useInputs";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

function LoginForm() {
  const navigate = useNavigate();
  // location.ref하면 페이지 다시 받아오지만 useNavigate쓰면 캐싱되있는거 사용

  const [{email, password}, onChangeForm] = useInputs({
    email: '',
    password: '',
  })
//   const [email, onChangeEmail, setEmail] = useInput('');
//   const [password, onChangePassword, setPassword] = useInput('');

  /*
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const onChangePassword = (e) => {
    setEmail(e.target.value);
  }
  */

// const email = useRef();
// const password = useRef();
// react-hook-form 정말 좋은 라이브러리인데 사용법이 어려움 (zod랑 사용)

  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (email === "test@test.com" && password === "testtest") {
        return navigate("/todo");
    }

    return alert('아이디와 비밀번호를 확인해주세요');
  };

  return (
    <S.Form onSubmit={onLoginSubmit}>
      <S.InputBox>
        <input placeholder="email" name='name' onChange={onChangeForm} />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input type="password" placeholder="password" name='password' onChange={onChangeForm} />
        {/* <div onclick></div> */}
        <span>비밀번호</span>
      </S.InputBox>
      <Button variant={"primary"} size={"full"}>
        로그인
      </Button>
      {/* <Button variant={'primary'} size={'full'}>
                로그인
            </Button> */}
    </S.Form>
  );
}

export default LoginForm;
