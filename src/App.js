import React, { useState } from "react";
import Navbar from "./navbar";
import Display from "./display";
import History from './history'
import Theme from "./theme";
import Keypad from "./keypad";
import Advanced from "./advanced";
import "./App.css";
import * as math from "mathjs";


function App() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("dark"); 
  const [calculations, setCalculations] = useState([]);
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };
  const addToCalculations = (calculation) => {
    setCalculations([...calculations, calculation]);
  };
  const clearHistory = () => {
    setCalculations([]);
  };



  return (
    <>
      <center>
        <div className="container" >
        <div className={theme === "light" ? 'light' : 'dark'}>
          <Navbar theme={theme}/>
          <Display input={input} theme={theme}/>
          <div className=""  style={{ display: "flex", justifyContent: "space-evenly" }}>
          <History calculations={calculations} clearHistory={clearHistory} />
            <Theme theme={theme} onThemeChange={handleThemeChange}/>
          </div>
          <Advanced setInput={setInput} input={input} theme={theme}/>
          <Keypad setInput={setInput} input={input} theme={theme} addToCalculations={addToCalculations} />
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
