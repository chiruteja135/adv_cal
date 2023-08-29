import React, { useEffect } from "react";
import * as math from "mathjs";

function Keypad({ setInput, input, theme, addToCalculations }) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;
      if (key.startsWith("F")) {
        return;
      } else if (/[0-9+\-*/.=]/.test(key)) {
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

  // function calculate() {
  //   try {
  //     if (input.includes("√")) {
  //       const match = input.match(/√\((.*?)\)/);
  //       if (match) {
  //         const rep = match[1];
  //         const result = math.sqrt(parseFloat(rep));
  //         setInput(result.toString());
  //       } else {
  //         setInput("Invalid input");
  //       }
  //     }
  //     else if (input.includes("sin")) {
  //       const match = input.match(/sin\((.*?)\)/);
  //       if (match) {
  //         const rep = match[1];
  //         const angleInRadians = parseFloat(rep) * (Math.PI / 180);
  //         const result = Math.sin(angleInRadians);
  //         setInput(result.toString());
  //       } else {
  //         setInput("Invalid input");
  //       }
  //     }
  //     else if (input.startsWith("sin")) {
  //       const rep = input.slice(3); // Remove "sin" from the input
  //       const result = Math.sin(parseFloat(rep) * (Math.PI / 180));
  //       setInput(result.toString());
  //     }
  //     else {
  //       const result = math.evaluate(input);
  //       setInput(result.toString());
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setInput("Error");
  //   }
  // }
  function calculate() {
    try {
      if (input.includes("√")) {
        const match = input.match(/√\((.*?)\)/);
        if (match) {
          const rep = match[1];
          const result = math.sqrt(parseFloat(rep));
          setInput(result.toString());
        } else {
          setInput("Invalid input");
        }
      }
      // if (input.includes("sin") || input.includes("cos") || input.includes("tan")) {
      //   const rep = input.match(/\((.*?)\)/);
      //   if (rep) {
      //     const value = rep[1];
      //     const functionStartIndex = input.indexOf("sin") !== -1 ? input.indexOf("sin") : input.indexOf("cos");
      //     const functionName = input.substring(functionStartIndex, functionStartIndex + 3);

      //     let result;

      //     if (functionName === "sin") {
      //       result = Math.sin(parseFloat(value) * (Math.PI / 180));
      //     } else if (functionName === "cos") {
      //       result = Math.cos(parseFloat(value) * (Math.PI / 180));
      //     } else if (functionName === "tan") {
      //       result = Math.tan(parseFloat(value) * (Math.PI / 180));
      //     }

      //     setInput(result.toString());
      //   } else {
      //     setInput("Invalid input");
      //   }
      // }
      else if (
        input.includes("sin") ||
        input.includes("cos") ||
        input.includes("tan") ||
        input.includes("cot") ||
        input.includes("sec")
      ) {
        const repWithParentheses = input.slice(3);
        const repWithoutParentheses = input.slice(4);
        let result;
        if (input.includes("sin")) {
          if (!isNaN(parseFloat(repWithParentheses))) {
            result = Math.sin(parseFloat(repWithParentheses) * (Math.PI / 180));
          } else if (!isNaN(parseFloat(repWithoutParentheses))) {
            result = Math.sin(
              parseFloat(repWithoutParentheses) * (Math.PI / 180)
            );
          } else {
            setInput("Invalid input");
            return;
          }
          setInput(result.toString());
        } else if (input.includes("cos")) {
          if (!isNaN(parseFloat(repWithParentheses))) {
            result = Math.cos(parseFloat(repWithParentheses) * (Math.PI / 180));
          } else if (!isNaN(parseFloat(repWithoutParentheses))) {
            result = Math.cos(
              parseFloat(repWithoutParentheses) * (Math.PI / 180)
            );
          } else {
            setInput("Invalid input");
            return;
          }
          setInput(result.toString());
        } else if (input.includes("tan")) {
          if (!isNaN(parseFloat(repWithParentheses))) {
            result = Math.tan(parseFloat(repWithParentheses) * (Math.PI / 180));
          } else if (!isNaN(parseFloat(repWithoutParentheses))) {
            result = Math.tan(
              parseFloat(repWithoutParentheses) * (Math.PI / 180)
            );
          } else {
            setInput("Invalid input");
            return;
          }
          setInput(result.toString());
        } else if (input.includes("cot")) {
          if (!isNaN(parseFloat(repWithParentheses))) {
            result =
              1 / Math.tan(parseFloat(repWithParentheses) * (Math.PI / 180));
          } else if (!isNaN(parseFloat(repWithoutParentheses))) {
            result =
              1 / Math.tan(parseFloat(repWithoutParentheses) * (Math.PI / 180));
          } else {
            setInput("Invalid input");
            return;
          }
          setInput(result.toString());
        } else if (input.includes("sec")) {
          if (!isNaN(parseFloat(repWithParentheses))) {
            result =
              1 / Math.cos(parseFloat(repWithParentheses) * (Math.PI / 180));
          } else if (!isNaN(parseFloat(repWithoutParentheses))) {
            result =
              1 / Math.cos(parseFloat(repWithoutParentheses) * (Math.PI / 180));
          } else {
            setInput("Invalid input");
            return;
          }
          setInput(result.toString());
        }
      } else if (input === "log") {
        setInput(Math.log10(parseFloat(input)));
        console.log(setInput);
      } else if (input === "ln") {
        setInput(Math.log(parseFloat(input)));
      } else if (input === "e") {
        setInput(Math.exp(parseFloat(input)));
      }

      // else if (input.startsWith("sin")) {
      //   const repWithParentheses = input.slice(3);
      //   const repWithoutParentheses = input.slice(4);
      //   let result;
      //   if (!isNaN(parseFloat(repWithParentheses))) {
      //     result = Math.sin(parseFloat(repWithParentheses) * (Math.PI / 180));
      //   } else if (!isNaN(parseFloat(repWithoutParentheses))) {
      //     result = Math.sin(parseFloat(repWithoutParentheses) * (Math.PI / 180));
      //   } else {
      //     setInput("Invalid input");
      //     return;
      //   }
      //   setInput(result.toString());
      // }

      // else if (input.startsWith("cos")) {
      //   const repWithParentheses = input.slice(3);
      //   const repWithoutParentheses = input.slice(4);
      //   let result;
      //   if (!isNaN(parseFloat(repWithParentheses))) {
      //     result = Math.cos(parseFloat(repWithParentheses) * (Math.PI / 180));
      //   } else if (!isNaN(parseFloat(repWithoutParentheses))) {
      //     result = Math.cos(parseFloat(repWithoutParentheses) * (Math.PI / 180));
      //   } else {
      //     setInput("Invalid input");
      //     return;
      //   }
      //   setInput(result.toString());
      // }

      // else if (input.startsWith("tan")) {
      //   const repWithParentheses = input.slice(3);
      //   const repWithoutParentheses = input.slice(4);
      //   let result;
      //   if (!isNaN(parseFloat(repWithParentheses))) {
      //     result = Math.tan(parseFloat(repWithParentheses) * (Math.PI / 180));
      //   } else if (!isNaN(parseFloat(repWithoutParentheses))) {
      //     result = Math.tan(parseFloat(repWithoutParentheses) * (Math.PI / 180));
      //   } else {
      //     setInput("Invalid input");
      //     return;
      //   }
      //   setInput(result.toString());
      // }
      else {
        const result = math.evaluate(input);
        setInput(result.toString());
        addToCalculations(`${input} = ${result}`);
        
      }
    } catch (error) {
      console.error("Error:", error);
      setInput("Error");
    }
  }

  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <div className="keypad grid-auto grid-gap:5px" >
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => clearinput()}>
          C
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("%")}>
          %
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => delFunction()}>
          ⌫
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("/")}>
          ÷
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("7")}>
          7
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("8")}>
          8
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("9")}>
          9
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("*")}>
          x
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("4")}>
          4
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("5")}>
          5
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("6")}>
          6
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("-")}>
          -
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("1")}>
          1
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("2")}>
          2
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("3")}>
          3
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff" }} onClick={() => handleFunction("+")}>
          +
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff", height: "45px", width: "100px" }} onClick={() => handleFunction("00")}>
          00
        </button>

        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff", height: "45px", width: "100px" }} onClick={() => handleFunction("0")}>
          0
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff", height: "45px", width: "100px" }} onClick={() => handleFunction(".")}>
          .
        </button>
        <button style={{ Color: theme === "dark" ? "#000000" : "#ffffff", height: "45px", width: "100px" }} onClick={() => calculate()}>
          =
        </button>
      </div>
    </div>
  );
}

export default Keypad;
