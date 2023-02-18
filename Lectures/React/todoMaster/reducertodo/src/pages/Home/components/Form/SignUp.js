import { Button } from 'components/Button/style';
import useInputs from 'hooks/useInputs';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './Login';
import * as S from './style';

function SignUpForm({setForm}) {

    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
    const [isAllGood, setIsAllGood] = useState(false);
    const [isEmail, setIsEmail] = useState(true);
    const [isPassword, setIsPassword] = useState(true);
    const [{ email, password, passwordConfirm }, onChangeForm] = useInputs({
        email: "",
        password: "",
        passwordConfirm: ""
    })


    /*
    모든 필드가 채워지지 않았다면 button의 disabled는 true
        심화: 특정 필드를 지정 후 해당 필드가 채워지지 않으면 disabled는 false
        특정 필드는 유동적일 수 있다
    email의 이메일 양식이 갖춰지지 않으면 disabled는 true
    비밀번호가 8글자 이상이지 않으면 disabled는 true
    
    위의 유효성 검사 과정을 커스텀 훅(선택)으로 만들어보세요
    위의 유효성은 로그인 페이지에도 재사용합니다.
    */

    // useEffect(() => {
    //     if(!password || !passwordConfirm) return setIsPasswordConfirm(true);
    //     if(password !== passwordConfirm) {
    //         return setIsPasswordConfirm(false);
    //     } return setIsPasswordConfirm(true)0
    // }, [password, passwordConfirm])

    let emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    
    useEffect(() => {

        // 전체가 다 비어 있으면 비활성화
        // if(!password || !passwordConfirm || !email) return setIsAllGood(false);
        if(!password || !passwordConfirm) return setIsPasswordConfirm(true);
        
        if(password !== passwordConfirm) {
            console.log("aaa");
            return setIsPasswordConfirm(false);
        } else setIsPasswordConfirm(true);

        // console.log(password.length);
        // 비밀번호 조건 8글자이상
        if(password.length < 8) { 
            return setIsPassword(false);
        } else return setIsPassword(true);

        // 비밀번호랑 비밀번호 일치랑 동일한지 확인
        
    }, [ password, passwordConfirm])

    const checkEmail = () => {

        // 이메일 조건(정규표현식 조건이 일치되면 true)
        console.log(isEmail);
        setIsEmail((email) => {
            const emailRegex =
              /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        
            return emailRegex.test(email); // test()의 리턴값은 boolean
          });
        if(!isEmail) return alert('이메일 양식을 지켜주세요');
        
    }
    
    useEffect(() => {
        if(isPasswordConfirm && isEmail) return setIsAllGood(true);
        
    })

    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        if(!email || !password) return alert("정보를 입력해주세요");
        if(!isPasswordConfirm) return alert('비밀번호 확인이 일치하지 않습니다.')
        setForm ('login')
        };


    return(
        <S.Form>
            <S.InputBox>
                <input placeholder='email' name={'email'} onChange={onChangeForm} onSubmit={checkEmail}/>
                <span>이메일</span>
            </S.InputBox>
            <S.InputBox>
                <input type='password' placeholder='password' name={'password'} onChange={onChangeForm} />
                <span>비밀번호</span>
            </S.InputBox>
            <S.InputBox>
                <input type='password' placeholder='password confirm' name={'passwordConfirm'} onChange={onChangeForm}/>
                <span>비밀번호 확인</span>
            </S.InputBox>
            <S.Error visible={!isEmail}>이메일 양식을 지켜주세요</S.Error>
            <S.Error visible={!isPassword}>비밀번호는 8글자 이상이어야 합니다</S.Error>
            <S.Error visible={!isPasswordConfirm}>비밀번호 확인이 일치하지 않습니다</S.Error>
            {/* {!isPasswordConfirm && <S.Error>비밀번호 확인이 일치하지 않습니다</S.Error>} */}
            {/* <Button variant={'primary'} size={'full'} disabled={!isPasswordConfirm} onClick={handleSignUpSubmit}>회원가입</Button> */}
            <Button variant={'primary'} size={'full'} disabled={!isAllGood} onClick={handleSignUpSubmit}>회원가입</Button>
        </S.Form>
    );
}

export default SignUpForm;