import React, { useState } from "react";

export const CALCULATOR_TITLE = "Calculator";

const INPUTS = [
  [7, 8, 9, "%"],
  [4, 5, 6, "*"],
  [1, 2, 3, "-"],
  [0, ".", "+", "="],
];

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  clickHandler = (event) => {
    const input = event.target.innerHTML;
    let newResult = this.state.result;
    if (input === "=") {
      newResult = eval(newResult);
    } else {
      newResult += input;
    }
    this.setState({ result: newResult });
  };

  render() {
    return (
      <div>
        <h2>{CALCULATOR_TITLE}</h2>
        <div className="calc">
          <div className="display">{this.state.result}</div>
          {INPUTS.map((inputArray) => (
            <div className="row">
              {inputArray.map((input) => (
                <button onClick={this.clickHandler}>{input}</button>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export function CalculatorFn() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    const input = event.target.innerHTML;
    let newResult = result;
    if (input === "=") {
      newResult = eval(newResult);
    } else {
      newResult += input;
    }
    setResult(newResult);
  };

  return (
    <div>
      <h2>{CALCULATOR_TITLE}</h2>
      <div className="calc">
        <div className="display">{result}</div>
        {INPUTS.map((inputArray) => (
          <div className="row">
            {inputArray.map((input) => (
              <button onClick={clickHandler}>{input}</button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
