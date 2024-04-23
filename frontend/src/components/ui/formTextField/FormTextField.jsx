import React from 'react';

const FormTextField = ({ label, type, placeholder, name, functionOnChange }) => {
  return (
    <div className='formTextField formField'>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={functionOnChange}
      />
    </div>
  );
};

export default FormTextField;

