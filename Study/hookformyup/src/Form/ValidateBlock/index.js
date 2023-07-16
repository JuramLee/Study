import { Controller } from 'react-hook-form';
import ControlledInput from './Components/Input';
import styled from 'styled-components';

const ValidateBlock = ({ label, control, placeholder, name, type }) => {
  return (
    <S.SignupItem>
      <S.Label>{label}</S.Label>
      <Controller
        name={name}
        control={control}
        defaultValue={''}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <ControlledInput
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </S.SignupItem>
  );
};

export default ValidateBlock;

const SignupItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  color: darkblue;
  margin-bottom: 5px;
`;

const S = {
  SignupItem,
  Label,
};
