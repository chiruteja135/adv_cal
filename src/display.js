import React from 'react';
import * as keypad from './keypad';

function display({input,theme}) {
  
  return (
    <div className={theme === "light" ? 'light' : 'dark'}>
      <input className='display ' type='text' readOnly value={input}></input>
    </div>
  )
}

export default display;