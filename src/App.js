import React from "react";
import "./App.css";
import { incNumber, decNumber, mulNumber, divNumber } from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  // it alternative to the useContext hooks in react / consumer from context API
  const myState = useSelector((state) => state.changeTheNumber);
  const myOtherState = useSelector((state) => state.mulTheNumber);

  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div class="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a
              class="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={myState}
            />
            <a
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(1))}
            >
              <span>+</span>
            </a>
          </div>
        </div>

        <div class="container my-5">
          <h1>Multiply/Division counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a
              class="quantity__minus"
              title="Multiplication"
              onClick={() => dispatch(mulNumber(5))}
            >
              <span>*</span>
            </a>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={myOtherState}
            />
            <a
              class="quantity__plus"
              title="Division"
              onClick={() => dispatch(divNumber())}
            >
              <span>/</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
