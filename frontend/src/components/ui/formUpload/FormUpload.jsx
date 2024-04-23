import React from 'react'

const FormUpload = ({label, name, handleFileUpload}) => {
  return (
    <div className='formUpload formField'>
      <label>{label}</label>
      <input
        type="file"
        name={name}
        onChange={handleFileUpload}
        class="file-upload-field"
        placeholder="Select your file!"
      />
    </div>
  )
}

export default FormUpload
