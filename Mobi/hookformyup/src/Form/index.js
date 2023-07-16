import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidation } from './yup';
import ErrorMessage from './ValidateBlock/Components/errorMessage';
import ValidateBlock from './ValidateBlock';

const SignupForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpValidation), mode: 'onChange' });

  const onSubmitSignup = handleSubmit((data) => {
    console.log('회원가입이 성공했습니다.');
  });

  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <form onSubmit={onSubmitSignup}>
        <S.Container>
          <ValidateBlock
            control={control}
            name={'email'}
            label={'이메일'}
            placeholder={'id123@example.com'}
            errors={errors}
            type={'text'}
          />
          {errors.email && <ErrorMessage errorMessage={errors.email.message} />}
        </S.Container>
        <S.Container>
          <ValidateBlock
            control={control}
            name={'pw'}
            label={'비밀번호'}
            placeholder={'숫자와 특수문자를 포함한 8자 이상'}
            errors={errors}
            type={'password'}
          />
          {errors.pw && <ErrorMessage errorMessage={errors.pw.message} />}
        </S.Container>

        <S.Container>
          <ValidateBlock
            control={control}
            name={'pwCheck'}
            label={'비밀번호 확인'}
            placeholder={'비밀번호와 일치해야 합니다.'}
            errors={errors}
            type={'password'}
          />
          {errors.pwCheck && (
            <ErrorMessage errorMessage={errors.pwCheck.message} />
          )}
        </S.Container>
        <S.Container>
          <ValidateBlock
            control={control}
            name={'phone'}
            label={'휴대폰'}
            placeholder={'010-0000-0000'}
            errors={errors}
            type={'text'}
          />
          {errors.phone && <ErrorMessage errorMessage={errors.phone.message} />}
        </S.Container>
        <S.Container>
          <ValidateBlock
            control={control}
            name={'age'}
            label={'나이'}
            placeholder={'0000-00-00'}
            errors={errors}
            type={'text'}
          />
          {errors.age && <ErrorMessage errorMessage={errors.age.message} />}
        </S.Container>
        <S.Button type='submit'>회원가입</S.Button>
      </form>
    </S.Wrapper>
  );
};

export default SignupForm;

const Wrapper = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 50px;
`;

const Container = styled.div`
  position: relative;
`;

const Title = styled.span`
  width: 75px;
  padding-bottom: 5px;
  border-bottom: 2px solid purple;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: purple;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
`;

const S = {
  Wrapper,
  Container,
  Title,
  Button,
};
