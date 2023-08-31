import React, { useState } from "react";
import Navbar from "./navbar";
import Display from "./display";
import History from './history'
import Theme from "./theme";
import Keypad from "./keypad";
import Advanced from "./advanced";
import "./App.css";
import CurrencyConverter from "./exchange_rate";
// import * as math from "mathjs";


function App() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("dark"); 
  const [calculations, setCalculations] = useState([]);
  const [currentPage, setCurrentPage] = useState('calculator');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };
  const addToCalculations = (calculation) => {
    setCalculations([...calculations, calculation]);
  };
  const clearHistory = () => {
    setCalculations([]);
  };

    let mainContent;
  if (currentPage === 'calculator') {
    mainContent = (
      <>
        <Display input={input} theme={theme}/>
        <div className="" style={{ display: "flex", justifyContent: "space-evenly" }}>
          <History calculations={calculations} clearHistory={clearHistory} />
          <Theme theme={theme} onThemeChange={handleThemeChange}/>
        </div>
        <Advanced setInput={setInput} input={input} theme={theme}/>
        <Keypad setInput={setInput} input={input} theme={theme} addToCalculations={addToCalculations} />
      </>
    );
  } else if (currentPage === 'exchange_rate') {
    mainContent = <CurrencyConverter theme={theme} onThemeChange={handleThemeChange}/>;
  }

  return (
    <>
      <center>
        <div className="container">
          <div className={theme === "light" ? 'light' : 'dark'}>
            <Navbar theme={theme} setCurrentPage={setCurrentPage}/>
            {/* <Theme theme={theme} onThemeChange={handleThemeChange}/> */}
            {mainContent}
          </div>
        </div>
      </center>
    </>
  );
}



export default App;
