import React from 'react';

function Checkbox(props) {
  return (
    <input type="checkbox" onChange={props.handleChange} checked={props.active} />
  )
}

export default Checkbox;