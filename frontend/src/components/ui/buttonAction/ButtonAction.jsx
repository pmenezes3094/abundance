import React from 'react';

function ButtonAction({ IconComponent, label, clickFunction, tooltip }) {
  return (
    <span hover-tooltip={tooltip} tooltip-position="bottom">
      <button className="buttonIcon" aria-label={label} onClick={clickFunction}>
          <IconComponent />
      </button>
    </span>
  );
}

export default ButtonAction;
