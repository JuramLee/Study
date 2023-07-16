import styled from 'styled-components';

const ErrorMessage = ({ errorMessage }) => {
  return <S.Error>{errorMessage}</S.Error>;
};

export default ErrorMessage;

const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 10px;
  padding-left: 5px;
  position: absolute;
  top: -8px;
  right: 10px;
`;

const S = { Error };
