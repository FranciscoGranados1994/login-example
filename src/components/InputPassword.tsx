import React from 'react';
import style from '../../styles/Atoms/input.module.css';

const InputPassword: React.FC = ({ handleData, name }) => {
  return (
    <section>
      <label htmlFor="Password">Password</label>
      <input
        name={name}
        id="Password"
        placeholder="Password"
        className={style.input}
        onChange={handleData}
      />
      <section>{/* error or format rules */}</section>
    </section>
  );
};

export default InputPassword;
