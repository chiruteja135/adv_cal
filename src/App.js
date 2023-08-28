import React, { useState } from "react";
import Navbar from "./navbar";
import Display from "./display";
// import History from './history'
import Theme from "./theme";
import Keypad from "./keypad";
import Advanced from "./advanced";
import "./App.css";
import * as math from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("dark"); 
  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };


  return (
    <>
      <center>
        <div className="container" >
        <div className={theme === "light" ? 'light' : 'dark'}>
          <Navbar theme={theme}/>
          <Display input={input} theme={theme}/>
          <div className="">
            {/* <History/> */}
            <Theme theme={theme} onThemeChange={handleThemeChange}/>
          </div>
          <Advanced setInput={setInput} input={input} theme={theme}/>
          <Keypad setInput={setInput} input={input} theme={theme} />
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
