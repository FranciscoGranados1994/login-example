import React from 'react';
import Input from './InputGeneral';
import InputPassword from './InputPassword';
import { useHandleData } from '../hooks/useHandleData';
import style from '../../styles/Atoms/button.module.css';

const Form: React.FC = () => {
  const signUpSchema = {
    email: {
      value: '',
      error: '',
      regex: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      isValid: false,
    },
    password: {
      value: '',
      error: '',
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      isValid: false,
    },
    password_confirmation: {
      value: '',
      error: '',
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
      isValid: false,
    },
  };
  const { handleData, submitData, isDisable } = useHandleData(signUpSchema);
  return (
    <form onSubmit={submitData}>
      <Input handleData={handleData} name="email" />
      <InputPassword handleData={handleData} name="password" />
      <InputPassword handleData={handleData} name="password_confirmation" />
      <button className={style.button} disabled={isDisable}>
        Sign Up
      </button>
    </form>
  );
};
export default Form;
