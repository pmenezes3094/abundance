import React from 'react'

const FormSearch = ({label, name}) => {
  return (
        <div className='formSearch formTextField formField'>
        <label>{label}</label>
        <input
          type="search"
          name={name}
          placeholder='Enter your keywords'
        />
      </div>
  )
}

export default FormSearch
