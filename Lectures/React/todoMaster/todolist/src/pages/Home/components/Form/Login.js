import { Button } from 'components/Button/style';
import * as S from './style'

function LoginForm() {
    return(
        <S.Form>
            <S.InputBox>
                <input placeholder='email' />
                <span>이메일</span>
            </S.InputBox>
            <S.InputBox>
                <input type='password' placeholder='password' />
                {/* <div oncli></div> */}
                <span>비밀번호</span>
            </S.InputBox>
            <Button variant={'primary'} size={'full'}>
                로그인
            </Button>
        </S.Form>
    );
}

export default LoginForm;

