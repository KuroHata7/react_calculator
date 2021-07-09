import './App.css';
import React from "react";
import { useState } from 'react'

function App() {
  var [last, setLast] = useState("");
  var [cur, setCur] = useState(""); 
  var [op, setOp] = useState("");
  function HandleDigitClick(e) {
    var temp = cur + e.target.value;
    setCur(temp);
  }
  function HandleOperatorClick(e) {
    setLast(cur);
    setCur("");
    setOp(e.target.value);
  }
  function HandleClearAll() {
    setLast("");
    setCur("");
    setOp("");
  }
  function HandleRes() {
    if(op === "+"){
      setCur(+last + +cur);
      setLast("");
      setOp("");
    }
    else if (op === "-"){
      setCur(last-cur);
      setLast("");
      setOp("");
    }
    else if (op === "*"){
      setCur(last*cur);
      setLast("");
      setOp("");
    }
    else if (op === "/"){
      setCur(last/cur);
      setLast("");
      setOp("");
    }
  }
  return <div className="calculator">
      <input type="text" className="screen" value={cur} disabled/>
      <div className="keys">
        <button type="button" className="operator" value="+" onClick={e =>HandleOperatorClick(e, "value")}>+</button>
        <button type="button" className="operator" value="-" onClick={e =>HandleOperatorClick(e, "value")}>-</button>
        <button type="button" className="operator" value="*" onClick={e =>HandleOperatorClick(e, "value")}>&times;</button>
        <button type="button" className="operator" value="/" onClick={e =>HandleOperatorClick(e, "value")}>&divide;</button>

        <button type="button" className="digit" value="7" onClick={e =>HandleDigitClick(e, "value")}>7</button>
        <button type="button" className="digit" value="8" onClick={e =>HandleDigitClick(e, "value")}>8</button>
        <button type="button" className="digit" value="9" onClick={e =>HandleDigitClick(e, "value")}>9</button>

        <button type="button" className="digit" value="4" onClick={e =>HandleDigitClick(e, "value")}>4</button>
        <button type="button" className="digit" value="5" onClick={e =>HandleDigitClick(e, "value")}>5</button>
        <button type="button" className="digit" value="6" onClick={e =>HandleDigitClick(e, "value")}>6</button>

        <button type="button" className="digit" value="1" onClick={e =>HandleDigitClick(e, "value")}>1</button>
        <button type="button" className="digit" value="2" onClick={e =>HandleDigitClick(e, "value")}>2</button>
        <button type="button" className="digit" value="3" onClick={e =>HandleDigitClick(e, "value")}>3</button>
        

        <button type="button" className="digit" value="0" onClick={e =>HandleDigitClick(e, "value")}>0</button>
        <button type="button" className="decimal" value="." onClick={e =>HandleDigitClick(e, "value")}>.</button>
        <button type="button" className="clear-all" value="clear-all" onClick={HandleClearAll}>AC</button>

        <button type="button" className="equal-sign" value="=" onClick={HandleRes}>=</button>
      </div>
    </div>
}

export default App;