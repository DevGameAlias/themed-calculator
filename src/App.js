import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // Stores user input
  const [animate, setAnimate] = useState(false); // Controls animation effects

  // Determines if a character is an operator
  const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

  // Handles button clicks and updates the display accordingly
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluate the input safely
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // Clear display
    } else if (value === "+/-") {
      // Toggle positive/negative sign
      if (input && !isOperator(input.slice(-1))) {
        setInput((prev) =>
          prev.charAt(0) === "-" ? prev.slice(1) : "-" + prev
        );
      }
    } else if (isOperator(value)) {
      setInput((prev) => {
        if (prev === "" || isOperator(prev)) return prev; // Prevents operator as first character
  
        if (isOperator(prev.slice(-1))) {
          // If last input is an operator, replace it
          return prev.slice(0, -1) + value;
        }
  
        return prev + value; // Otherwise, add operator normally
      });
    } else {
      setInput((prev) => prev + value); // Adds numbers as usual
  
      // ⚡ Trigger Lightning Effect on Number Click
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }
  };
  
  

  return (
    <div className="parchment-bg flex items-center justify-center min-h-screen">
      <div className="techy-glass">
        {/* Display Section */}
        <div className={`mirror-display ${animate ? "pulse-effect surge-effect" : ""}`}>
          {input || "0"}
        </div>

        {/* Button Grid */}
        <div className="button-container">
          {[
            { label: "7", value: "7" },
            { label: "8", value: "8" },
            { label: "9", value: "9" },
            { label: "/", value: "/" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "*", value: "*" },
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "-", value: "-" },
            { label: "+/-", value: "+/-" },
            { label: "0", value: "0" },
            { label: "=", value: "=" },
            { label: "+", value: "+" },
          ].map((btn, index) => (
            <button
              key={index}
              className="holographic-button"
              onClick={() => handleClick(btn.value)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Large Clear Button */}
        <button className="clear-button" onClick={() => handleClick("C")}>
          C
        </button>
      </div>
    </div>
  );
}

export default App;
