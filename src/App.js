import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [display, setDisplay] = useState(""); // Stores current input
  const [storedValue, setStoredValue] = useState(""); // Stores the first number
  const [operator, setOperator] = useState(""); // Stores the operator
  const [animate, setAnimate] = useState(false); // Controls animation effects
  const [history, setHistory] = useState([]); // Stores history of calculations
  const [showHistory, setShowHistory] = useState(false); // Controls visibility of history
  const [resultShown, setResultShown] = useState(false); // Tracks if a result is shown

  // Determines if a character is an operator
  const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

  // Handles button clicks and updates the display accordingly
  const handleClick = (value) => {
    if (value === "=") {
      if (storedValue !== "" && operator !== "" && display !== "") {
        try {
          const result = eval(`${storedValue}${operator}${display}`);
          const roundedResult = Math.round(result * 100) / 100; // Round to 2 decimal places
          setHistory([...history, `${storedValue} ${operator} ${display} = ${roundedResult}`]);
          setDisplay(roundedResult.toString());
          setStoredValue("");
          setOperator("");
          setResultShown(true);
        } catch {
          setDisplay("Error");
        }
      }
    } else if (value === "C") {
      setDisplay(""); // Clear display
      setStoredValue("");
      setOperator("");
    } else if (value === "+/-") {
      // Toggle positive/negative sign
      if (display && !isOperator(display.slice(-1))) {
        setDisplay((prev) => (prev.charAt(0) === "-" ? prev.slice(1) : "-" + prev));
      }
    } else if (isOperator(value)) {
      if (display !== "") {
        setStoredValue(display);
        setDisplay("");
        setOperator(value);
      } else if (storedValue !== "") {
        setOperator(value);
      }
    } else {
      if (resultShown) {
        setDisplay(value); // Replace result with new number
        setResultShown(false);
      } else {
        setDisplay((prev) => prev + value); // Adds numbers as usual
      }

      // ⚡ Trigger Lightning Effect on Number Click
      setAnimate(true);
      setTimeout(() => setAnimate(false), 200);
    }
  };

  const handleDelete = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const toggleHistory = () => {
    setShowHistory((prev) => !prev);
  };

  const closeHistory = () => {
    setShowHistory(false);
  };

  return (
    <div className="parchment-bg flex items-center justify-center min-h-screen relative">
      <Helmet>
        <title>Themed-Calculator</title>
        <meta name="description" content="A themed calculator with a techy glass pane design and interactive history panel." />
        <meta name="keywords" content="calculator, themed calculator, techy design, glass pane, interactive history" />
      </Helmet>
      <div className="techy-glass">
        {/* Display Section */}
        <div className={`mirror-display ${animate ? "pulse-effect surge-effect" : ""}`}>{display || "0"}</div>

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
            <button key={index} className="holographic-button" onClick={() => handleClick(btn.value)}>
              {btn.label}
            </button>
          ))}
        </div>

        {/* Utility Buttons */}
        <div className="utility-buttons">
          <button className="clear-button" onClick={() => handleClick("C")}>
            C
          </button>
          <button className="utility-button" onClick={handleDelete}>
            DEL
          </button>
          <button className="utility-button" onClick={toggleHistory}>
            <FontAwesomeIcon icon={faHistory} />
          </button>
        </div>
      </div>

      {/* History Panel */}
      {showHistory && (
        <div className="history-panel">
          <div className="history-header">
            <h2>History</h2>
            <button className="close-button" onClick={closeHistory}>
              X
            </button>
          </div>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
