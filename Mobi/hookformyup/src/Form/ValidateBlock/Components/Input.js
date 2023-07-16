import styled from 'styled-components';

const ControlledInput = ({ onChange, value, placeholder, type }) => {
  return (
    <S.Input
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  );
};

export default ControlledInput;

const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 20px;
`;

const S = { Input };
