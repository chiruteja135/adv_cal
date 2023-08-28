import React from 'react';
import "./App.css";

function Navbar({ theme }) {
  return (
    <div className={theme === "light" ? 'light' : 'dark'}>
      <button className='button'>calculator</button>
      {/* <button className='button'>Exchange rate</button> */}
      {/* <button className='button'>Unit conversion</button> */}
    </div>
  );
}

export default Navbar;
