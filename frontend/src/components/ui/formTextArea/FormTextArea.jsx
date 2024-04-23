import React from 'react'

const FormTextArea = ( {label,placeholder,name,functionOnChange}) => {
  return (
    <div className='formTextArea formField'>
      <label>{label}</label>
      <textarea cols="30" rows="6" placeholder={placeholder} name={name} onChange={functionOnChange}></textarea>
    </div>
  )
}

export default FormTextArea