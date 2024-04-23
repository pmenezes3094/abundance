import React from 'react';
import { Link } from 'react-router-dom';

function ButtonIcon({ IconComponent, label, pageroute, tooltip }) {
  return (
    <span hover-tooltip={tooltip} tooltip-position="bottom">
    <button className="buttonIcon" aria-label={label}>
      <Link to={pageroute}>
        <IconComponent />
      </Link>
    </button>
    </span>
  );
}

export default ButtonIcon;
