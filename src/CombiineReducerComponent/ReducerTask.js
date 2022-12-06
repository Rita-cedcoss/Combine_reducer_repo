import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addition,
  clearResult,
  division,
  multiplication,
  subsTraction,
} from "../Combine_Reducers/action";

const ReducerTask = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  const ref1 = useRef();
  const ref2 = useRef();
  const [display, setDisplay] = useState("none");
  //for add,subtract,multiply,division opertation
  const operationHandler = () => {
    let val1 = ref1.current.value;
    let val2 = ref2.current.value;
    dispatch(addition(val1, val2));
    dispatch(subsTraction(val1, val2));
    dispatch(multiplication(val1, val2));
    dispatch(division(val1, val2));
    setDisplay("block");
    ref1.current.value = "";
    ref2.current.value = "";
  };
  const clearResult1 = () => {
    dispatch(clearResult(state));
    setDisplay("none");
  };
  return (
    <div id="multipleReducerOuter">
      <h1>Multiple Reducer</h1>
      <input ref={ref1} type="number" />
      <input ref={ref2} type="number" />
      <button onClick={operationHandler}>Submit</button>
      <button onClick={clearResult1}>Clear Answer</button>
      <div id="resultData" className={display}>
        <p>Addition Result={state.addReducer.result1}</p>
        <p>Substraction Result={state.subtractReducer.result2}</p>
        <p>Multiplication result={state.multiplytractReducer.result3}</p>
        <p>Diviion Result={state.divisionReducer.result4}</p>
      </div>
    </div>
  );
};

export default ReducerTask;
