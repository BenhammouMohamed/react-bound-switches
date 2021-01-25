import React from 'react';

function Button(props) {
  const { active, handleChange } = props;
  return (
    <button
      className={active ? 'button-on' : 'button-off'}
      onClick={handleChange}
      type="button"
    >
      {active ? 'on' : 'off'}
    </button>
  )
}

export default Button;