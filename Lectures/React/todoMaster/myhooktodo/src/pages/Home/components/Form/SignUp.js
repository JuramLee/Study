import { Button } from 'components/Button/style';
import { useEffect, useState } from 'react';
import * as S from './style';

function SignUpForm({ setForm }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [isPasswordMatch, setIsPasswordMatch] = useState(false);
    const [isEmailOkay, setIsEmailOkay] = useState(false);
    const [isAllGood, setIsAllGood] = useState(false);


    // input창 입력값 할당
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)
    }

    // 비밀번호 일치 여부 확인
    useEffect(() => {
        if(!password || !passwordConfirm) return setIsPasswordMatch(true);
        if( password !== passwordConfirm ) return setIsPasswordMatch(false);
        setIsPasswordMatch(true)
    }, [password, passwordConfirm])
    
    // 이메일 양식 확인
    useEffect(() => {
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        setIsEmailOkay(regex.test(email));
    }, [email])

    // 전체다 양식 맞춰서 채워졌는지 확인
    useEffect(() => {
        if( !email && !password && !passwordConfirm ) return setIsAllGood(true);
        setIsAllGood(false)
        if( isEmailOkay && isPasswordMatch ) {
            return setIsAllGood(true);
        }
    });

    // 조건 다 맞춰서 채운 후 제출하면 login으로 이동
    const onFormSubmit = (e) => {
        e.preventDefault();
        if( !email && !password && !passwordConfirm ) return;
        setForm('login');
    }

    return(
        <S.Form onSubmit={onFormSubmit}>
            <S.InputBox>
                <input placeholder='email' onChange={onChangeEmail} />
                <span>이메일</span>
            </S.InputBox>
            <S.InputBox>
                <input type='password' placeholder='password' onChange={onChangePassword}/>
                <span>비밀번호</span>
            </S.InputBox>
            <S.InputBox>
                <input type='password' placeholder='password confirm' onChange={onChangePasswordConfirm} />
                <span>비밀번호 확인</span>
            </S.InputBox>
            <S.ErrorText visible={!isPasswordMatch}>비밀번호가 일치하지 않습니다.</S.ErrorText>
            <Button variant={'primary'} size={'full'} disabled={!isAllGood}>회원가입</Button>
        </S.Form>
    );
}

export default SignUpForm;