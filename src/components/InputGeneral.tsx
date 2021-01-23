import React from 'react';
import style from '../../styles/Atoms/input.module.css';
const Input: React.FC = ({ handleData, name }) => {
  return (
    <section>
      <label htmlFor="email">Email</label>
      <input
        name={name}
        id="email"
        placeholder="Email"
        className={style.input}
        onChange={handleData}
      />
      <section></section>
    </section>
  );
};

export default Input;
