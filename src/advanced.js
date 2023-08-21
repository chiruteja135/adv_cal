import React,{useState} from "react";
import * as math from "mathjs";

function Advanced({input,setInput}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function handleFunction(value) {
    if (value === "Sin") {
      setInput(Math.sin(input));
    } else if (value === "Cos") {
      setInput(Math.cos(input));
    } else if (value === "Tan") {
      setInput(Math.tan(input));
    } else if (value === "log") {
      setInput(Math.log(input));
    } else if (value === "ln") {
      setInput(Math.log(input));
    }

    if (value === "." && input.match(/\.(\d*)$/)) {
      return;
    }
    setInput(input + value);
  }

  
  return (
    <>
      <div className="advanced">
        <h2 id="spl " onClick={toggleMenu}>
          Advanced
        </h2>
        {menuOpen && (
          <div className="toggle-menu">
            <div>
              <button className="adv_btn" onClick={() => handleFunction("Sin")}>Sin</button>
              <button className="adv_btn" onClick={() => handleFunction("Cos")}>Cos</button>
              <button className="adv_btn" onClick={() => handleFunction("Tan")}>Tan</button>
              <button className="adv_btn" onClick={() => handleFunction("log")}>log</button>
              <button className="adv_btn" onClick={() => handleFunction("In")}>In</button>
            </div>

            <div>
              <button className="adv_btn" onClick={() => handleFunction('(')}>(</button>
              <button className="adv_btn" onClick={() => handleFunction(')')}>)</button>
              <button className="adv_btn" onClick={() => handleFunction("^")}>^</button>
              <button className="adv_btn" onClick={() => handleFunction("√")}>√</button>
              <button className="adv_btn" onClick={() => handleFunction("!")}>!</button>
            </div>

            <div>
              <button className="adv_btn" onClick={() => handleFunction("&pi;")}>&pi;</button>
              <button className="adv_btn" onClick={() => handleFunction("e")}>e</button>
              <button className="adv_btn" onClick={() => handleFunction("INV")}>INV</button>
              <button className="adv_btn" onClick={() => handleFunction("RAD")}>RAD</button>
              <button className="adv_btn" onClick={() => handleFunction("DEG")}>DEG</button>
            </div>
          </div>
        )}
        
      </div>
    </>
  );
}

export default Advanced;
