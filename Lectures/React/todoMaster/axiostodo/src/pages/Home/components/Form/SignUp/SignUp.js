import axios from 'axios';
import Button from 'components/Button/Button';
import useInputs from 'hooks/useInputs';
import { useEffect, useState } from 'react';
import * as S from '../style';

function SignUpForm({setForm}) {

  const [{email, password, passwordConfirm}, onChangeForm] = useInputs({
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const [error, setError] = useState('');

  const handleSignUpSubmit = async (e) => {
    e.preventDefault()
    if(!email || !password) return alert("정보를 입력해주세요")
    if(password !== passwordConfirm) return alert("비밀번호 확인이 일치하지 않습니다")
    
    try {
      const res = await axios.post('http://localhost:9000/user/sign', {
        email,
        password,
      });
    if(!alert(res.data.data)) {
      setForm('login')
    };
    console.log(res);
    // if(!res) return;
  } catch (err) {
    setError(err.response.data.error)
    console.log(err);
    // throw new Error(err)
    // console.log(err);랑 같은 말
  }

  }


  useEffect(()=>{
    if(password !== passwordConfirm){
       return setError('비밀번호 확인이 일치하지 않습니다.');
    }
    setError('')
  },[password, passwordConfirm])

  useEffect(() => {
    setError('');
  }, [email])

  return (
    <S.Form onSubmit={handleSignUpSubmit}>
      <S.InputBox>
        <input placeholder="e-mail" name={"email"} onChange={onChangeForm}  />
        <span>이메일</span>
      </S.InputBox>
      <S.InputBox>
        <input type="password" placeholder="password" name={"password"} onChange={onChangeForm}/>
        <span>비밀번호</span>
      </S.InputBox>
      <S.InputBox>
        <input type="password" placeholder="password confirm" name={"passwordConfirm"} onChange={onChangeForm}/>
        <span>비밀번호 확인</span>
      </S.InputBox>
      <S.Error visible={error}>{error}</S.Error>
      <Button variant={'primary'} size={'full'} disabled={error || !email || !password}>
        회원가입
      </Button>
    </S.Form>
  );
}
export default SignUpForm;
