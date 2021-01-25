import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';
import './App.css';

function App() {
  const [state, setState] = useState({
    active: true
  })
  const handleChange = () => {
    setState({
      active: !state.active
    })
  }

  return (
    <div className="App">
      <Checkbox active={state.active} handleChange={handleChange} />
      <Button active={state.active} handleChange={handleChange} />
    </div>
  )
}
export default App