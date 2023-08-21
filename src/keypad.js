import React, { useEffect } from "react";
import * as math from "mathjs";

function Keypad({ setInput, input }) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      if (/[0-9+\-*/.=]/.test(key)) {
        event.preventDefault();
        setInput((prevInput) => prevInput + key);
      } else if (key === "Backspace") {
        event.preventDefault();
        delFunction();
      } else if (key === "Enter") {
        event.preventDefault();
        calculate();
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input, setInput]);

  function clearinput() {
    setInput("");
  }

  function handleFunction(value) {
    setInput(value);

    if (value === "." && input.match(/\.(\d*)$/)) {
      return;
    }
    setInput(input + value);
  }

  function delFunction() {
    setInput(input.slice(0, -1));
  }

  function calculate() {
    try {
      if (input.includes("√")) {
        const rep = input.match(/√\((.*?)\)/)[1];
        const result = math.sqrt(parseFloat(rep));
        setInput(result.toString());
      } else {
        const result = math.evaluate(input);
        setInput(result.toString());
      }
    } catch (error) {
      setInput("Error");
    }
  }
  return (
    <div className="keypad grid-auto grid-gap:5px">
      <button className="btn" onClick={() => clearinput()}>
        C
      </button>
      <button className="btn" onClick={() => handleFunction("%")}>
        %
      </button>
      <button className="btn" onClick={() => delFunction()}>
        ⌫
      </button>
      <button className="btn" onClick={() => handleFunction("/")}>
        ÷
      </button>
      <button className="btn" onClick={() => handleFunction("7")}>
        7
      </button>
      <button className="btn" onClick={() => handleFunction("8")}>
        8
      </button>
      <button className="btn" onClick={() => handleFunction("9")}>
        9
      </button>
      <button className="btn" onClick={() => handleFunction("*")}>
        X
      </button>
      <button className="btn" onClick={() => handleFunction("4")}>
        4
      </button>
      <button className="btn" onClick={() => handleFunction("5")}>
        5
      </button>
      <button className="btn" onClick={() => handleFunction("6")}>
        6
      </button>
      <button className="btn" onClick={() => handleFunction("-")}>
        -
      </button>
      <button className="btn" onClick={() => handleFunction("1")}>
        1
      </button>
      <button className="btn" onClick={() => handleFunction("2")}>
        2
      </button>
      <button className="btn" onClick={() => handleFunction("3")}>
        3
      </button>
      <button className="btn" onClick={() => handleFunction("+")}>
        +
      </button>
      <button className="btn" onClick={() => handleFunction("00")}>
        00
      </button>
      <button className="btn" onClick={() => handleFunction("0")}>
        0
      </button>
      <button className="btn" onClick={() => handleFunction(".")}>
        .
      </button>
      <button className="btn" onClick={() => calculate()}>
        =
      </button>
    </div>
  );
}

export default Keypad;
