import React from 'react';

function ButtonPrimary({ label, clickFunction }) {
  return (
    <button className="buttonPrimary" onClick={clickFunction}>
        {label}
    </button>
  );
}

export default ButtonPrimary;
