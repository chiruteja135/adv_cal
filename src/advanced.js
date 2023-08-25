import React, { useState } from "react";
import * as math from "mathjs";

function Advanced({ input, setInput }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {setMenuOpen(!menuOpen);};

  function handleFunction(value) {
    if (value === "." && input.match(/\.\d*$/)) {return;}
    if (input === "") {setInput(value); }
    else {
      if (value === "sin") {setInput(input);}
      else if (value === "cos") {setInput(input);}
      else if (value === "tan") {setInput(input);}
      else if (value === "log") {setInput(input);}
      else if (value === "cot") {setInput(input);}
      else if (value === "sec") {setInput(input);}
      // else if (value === "cosec") {setInput(input);}
      else {setInput(input + value);}
    }}

  return (
    <>
      <div className="advanced">
        <h2 id="spl " onClick={toggleMenu}>
          Advanced
        </h2>
        {menuOpen && (
          <div className="toggle-menu">
            <div>
              <button className="adv_btn" onClick={() => handleFunction("sin")}>sin</button>
              <button className="adv_btn" onClick={() => handleFunction("cos")}>cos</button>
              <button className="adv_btn" onClick={() => handleFunction("tan")}>tan</button>
              <button className="adv_btn" onClick={() => handleFunction("cot")}>cot</button>
              <button className="adv_btn" onClick={() => handleFunction("sec")}>sec</button>

            </div>
            <div>
              <button className="adv_btn" onClick={() => handleFunction("log")}>log</button>
              <button className="adv_btn" onClick={() => handleFunction("(")}>(</button>
              <button className="adv_btn" onClick={() => handleFunction(")")}>)</button>
              <button className="adv_btn" onClick={() => handleFunction("^")}>^</button>
              <button className="adv_btn" onClick={() => handleFunction("√")}>√</button>
            </div>
            {/* <div>
              <button className="adv_btn" onClick={() => handleFunction("π")}>π</button>
              <button className="adv_btn" onClick={() => handleFunction("e")}>e</button>
              <button className="adv_btn" onClick={() => handleFunction("INV")}>INV</button>
              <button className="adv_btn" onClick={() => handleFunction("RAD")}>RAD</button>
              <button className="adv_btn" onClick={() => handleFunction("DEG")}>DEG</button> 
            </div> */}
          </div>
        )
        }
      </div>
    </>
  );
      }
      

export default Advanced;
