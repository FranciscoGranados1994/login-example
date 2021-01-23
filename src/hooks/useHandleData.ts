import React, { useState } from 'react';
export const useHandleData = (stateSchema) => {
  /* Goal
    -get the values
    -verify its regex are valid or not  => show warning
    -if the value is completely ok show css style
    -if the value is coorect but the request send error => show error
    -if all values are completly ok => enable button
    */
  const [state, setState] = useState(stateSchema);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  
  function checkState(){
    const result = Object.keys(state).some((value)=>{
      const {isValid}=state[value]
      return isValid ===false
    })
    setIsDisable(result)
  }

  function verifyRegexp(regexp, value) {
      return regexp.test(value)
  }

  function submitData(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Submit data');
  }

  function handleData(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    const {regex} = state[name]
    const formatValidation =verifyRegexp(regex,value)
    state[name].isValid=formatValidation
    state[name].value=value
    checkState()
    console.log('result =>', state)
  }
  return {
    handleData,
    submitData,
    isDisable,
  };
};
