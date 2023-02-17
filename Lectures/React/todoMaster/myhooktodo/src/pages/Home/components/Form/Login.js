// import Button from 'components/Button/Button';
import Button from 'components/Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style'

function LoginForm() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }


    const onLoginSubmit = (e) => {
        e.preventDefault();
        if(email === 'asd@naver.com' && password === '123123') {
        return navigate('/todo');
    }

    return alert('아이디와 비밀번호를 확인해주세요');
    }

    return(
        <S.Form>
            <S.InputBox>
                <input placeholder='email' onChange={onChangeEmail} />
                <span>이메일</span>
            </S.InputBox>
            <S.InputBox>
                <input type='password' placeholder='password' onChange={onChangePassword} />
                <span>비밀번호</span>
            </S.InputBox>
            <Button variant={'primary'} size={'full'} onClick={onLoginSubmit}>로그인</Button>
            {/* <Button variant={'primary'} size={'full'}>
                로그인
            </Button> */}
        </S.Form>
    );
}

export default LoginForm;

