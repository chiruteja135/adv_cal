import React from 'react';
import "./App.css";
// import CurrencyConverter from "./exchange_rate.js";

function Navbar({ theme,setCurrentPage }) {
  return (
    <div className={`navComp ${theme === "light" ? 'light' : 'dark'}`}>
      <label className='navLabel' onClick={() => setCurrentPage('calculator')}>
        Calculator
      </label>
      <label className='navLabel' onClick={() => setCurrentPage('exchange_rate')}>
        Exchange rate
      </label>
      {/* <label className='navLabel' onClick={() => setCurrentPage('unit_conversion')}>
        Converter
      </label> */}
      {/* <label className='navLabel'>Calculator</label> */}
      {/* <label className='navLabel'><a style={{ textDecoration: 'none',color:'inherit' }} href='./exchange_rate'>Exchange rate</a></label> */}
      {/* <label className='navLabel'><a style={{ textDecoration: 'none',color:'inherit' }} href='./exchange_rate'>Unit conversion</a></label> */}
    </div>
  );
}

export default Navbar;
