import AuthApi from 'apis/authApi';
import axios from 'axios';
import Button from 'components/Button/Button';
import { useAuth } from 'contexts/auth';
import useInput from 'hooks/useInput';
import useInputs from 'hooks/useInputs';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TokenService from 'repository/TokenService';
import * as S from '../style';

function LoginForm() {
  const navigate = useNavigate();
  // const [email, onChangeEmail, setEmail] = useInput('');
  // const [password, onChangePassword, setPassword] = useInput('');

  const auth = useAuth();
  const { state } = useLocation();

  const [{ email, password }, onChangForm] = useInputs({
    email: '',
    password: '',
  });

  // react-hook-form, zod
  // const email = useRef();
  // const password = useRef();

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await AuthApi.login(email, password);
    auth.login(res.data.token);
  
    TokenService.setToken(res.data.token)
   
    // if(TokenService.getToken()) {
    //   navigate('/todo');
    // }

    // token == access_token이 담겨있다
    // token 값을 저장 -> token이 있다면 로그인이 성공한 것
    // 프론트엔드에서의 로그인 유무 판단해야함
    /* 로그인 유무 판단 방법
          1. 웹스토리지(로컬, 세션스토리지)
          2. state (redux-persist)
          3. refreshToken 사용
             access_token은 어디에 저장하든 탈취 위험
             따라서 access_token이 탈취되어도 이 토큰에 기간을 설정해서
             해커한테 제어권이 넘어가는 시간을 최소화
             access_token -> 만료 -> 사용자는 접근 권한 X -> 프론트엔드 로그아웃 처리
              ㄴ 사용자가 불편함을 느낌
             요청할 때 access_token -> refresh -> access_token 만료(error)
             프론트엔드에서는 access_token 재발급 -> 다시 http request에 실어서 재요청
    */
        // navigate('/todo');
    } catch (err) {
      console.error(err);
      alert('아이디와 비밀번호를 확인해주세요');
    }
    // try {
    //   // env는 수정 후 서버를 다시 한 번 종료 후 재실행 해야함
    //   const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + '/user/login', {
    //     email,
    //     password,
    //   });

    //   localStorage.setItem('access_token', data.data.token);
    //   if(localStorage.getItem('access_token')) {
    //   }
    //   // sessionStorage.setItem(); sessionToken에 넣을 때
    //   // console.log(res)
    // } catch(err) {
    //   console.log(err);
    //   alert('아이디와 비밀번호를 확인해주세요');
    // }
  };

  // 해당 로직은 필수가 아니라 어떻게 로그아웃 후 처리를 할 건지 설계에 따라 달라짐
  useEffect(() => {
    if(!auth.accessToken) return;
    if(!state) return navigate('/todo');
    navigate(state.from);
  }, [auth])

  // 로그인 되있다면(accessToken이 있다면) 페이지 접근을 막고 메인페이지로 이동
  useEffect(() => {
    if(auth.accessToken) return navigate('/todo');
  }, [])

  return (
    <S.Form onSubmit={onLoginSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" name="email" onChange={onChangForm} />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input type="password" placeholder="password" name="password" onChange={onChangForm} />
        <span>비밀번호</span>
      </S.InputBox>
      <Button variant={'primary'} size={'full'}>
        로그인
      </Button>
    </S.Form>
  );
}
export default LoginForm;
