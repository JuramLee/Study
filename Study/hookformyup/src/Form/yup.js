import * as yup from 'yup';

export const signUpValidation = yup.object({
  email: yup
    .string()
    .required('아이디를 입력해주세요.')
    .matches('[a-z0-9]+@[a-z]+.[a-z]{2,3}', '이메일 양식을 지켜주세요.'),
  pw: yup
    .string()
    .required('비밀번호를 입력해주세요.')
    .matches(
      '^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8}$',
      '비밀번호는 숫자와 특수문자를 포함한 8자 이상이어야 합니다.'
    ),
  pwCheck: yup
    .string()
    .required('비밀번호를 한 번 더 입력해주세요.')
    .oneOf([yup.ref('pw'), null], '비밀번호가 일치하지 않습니다.'),
  phone: yup
    .string()
    .required('핸드폰 번호를 입력해주세요.')
    .matches(
      '^010-[0-9]{4}-[0-9]{4}$',
      '하이픈(-)을 포함하여 핸드폰 번호를 입력해주세요.'
    ),
  age: yup
    .string()
    .required('나이를 입력해주세요.')
    .matches('[0-9]{4}-[0-9]{2}-[0-9]{2}', '0000-01-01 양식을 지켜주세요.'),
});
