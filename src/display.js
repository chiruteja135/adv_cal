import React from 'react';
import * as keypad from './keypad';

function display({input}) {
  
  return (
    <div>
      <input className='display ' type='text' readOnly value={input}></input>
    </div>
  )
}

export default display;