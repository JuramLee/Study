import { useForm } from 'react-hook-form';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  console.log('register', register);
  console.log('handleSubmit', handleSubmit);
  console.log('errors', errors);

  return (
    // <form onSubmit={handleSubmit((data) => console.log(data))}>
    <form
      onSubmit={handleSubmit(async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        console.log('제출됨', data);
      })}>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='email'
        {...register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}></input>
      {errors.email && <small role='alert'>{errors.email.message}</small>}
      <input
        id='pw'
        type='password'
        name='password'
        placeholder='password'
        {...register('password', {
          required: '비밀번호는 필수 입력입니다.',
          minLength: {
            value: 8,
            message: '8자리 이상 비밀번호를 사용하세요.',
          },
        })}></input>
      {errors.password && <small role='alert'>{errors.password.message}</small>}
      <button type='submit' disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default SignIn;
