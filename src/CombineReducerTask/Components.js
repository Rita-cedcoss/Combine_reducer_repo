import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cakeOrder,
  chocolatesOrder,
  iceCreameOrder,
} from "../Combine_Reducer/action";
const Components = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  const refCakeInput = useRef();
  const refIceCreamInput = useRef();
  const refChocoInput = useRef();
  const [cakeMsg, setCakemsg] = useState("");
  const [iceCream, setIceCream] = useState("");
  const [chocolateMsg, setChocoMsg] = useState("");
  //Cake Handler
  const cakeHandler = () => {
    let inpValue1 = refCakeInput.current.value;
    let inpValue2 = refIceCreamInput.current.value;
    let inpValue3 = refChocoInput.current.value;
    console.log(state.cakeReducer.cakeQuantity);
    //For Cake
    if (inpValue1 !== "") {
      if (inpValue1 > 0) {
        if (inpValue1 > state.cakeReducer.cakeQuantity) {
          setCakemsg(
            "Limit Exceeded !! Please enter value below quantity value"
          );
        } else {
          dispatch(cakeOrder(inpValue1));
          refCakeInput.current.value = "";
          setCakemsg("");
        }
      } else {
        setCakemsg("please enter positive value quantity");
      }
    }
    //For IceCream
    if (inpValue2 !== "") {
      if (inpValue2 > 0) {
        if (inpValue2 > state.iceCreameReducer.icecreamQuantity) {
          setIceCream(
            "Limit Exceeded !! Please enter value below quantity value"
          );
        } else {
          dispatch(iceCreameOrder(inpValue2));
          refIceCreamInput.current.value = "";
          setIceCream("");
        }
      } else {
        setIceCream("Please Enter Positive Value Quantity");
      }
    }
    //For Chocolates
    if (inpValue3 !== "") {
      if (inpValue3 > 0) {
        if (inpValue3 > state.chocolatesReducer.chocolatesQuantity) {
          setChocoMsg(
            "Limit Exceeded !! Please enter value below quantity value"
          );
        } else {
          dispatch(chocolatesOrder(inpValue3));
          refChocoInput.current.value = "";
          setChocoMsg("");
        }
      } else {
        setChocoMsg("Please Enter Positive Value Quantity");
      }
    }
  };
  return (
    <>
      <div id="outer">
        <h1>For Cake </h1>
        <p>Cakes Quantity :{state.cakeReducer.cakeQuantity}</p>
        <p className="msg">{cakeMsg}</p>
        <input ref={refCakeInput} type="number" placeholder="Enter Quantity" />
        <h1>For Ice Cream</h1>
        <p>Ice Cream Quantity :{state.iceCreameReducer.icecreamQuantity}</p>
        <p className="msg">{iceCream}</p>
        <input
          ref={refIceCreamInput}
          type="number"
          placeholder="Enter Quantity"
        />
        <h1>For Chocolates</h1>
        <p>Chocolates Quantity :{state.chocolatesReducer.chocolatesQuantity}</p>
        <p className="msg">{chocolateMsg}</p>
        <input ref={refChocoInput} type="number" placeholder="Enter Quantity" />
        <br />
        <br />
        <button onClick={cakeHandler}>Buy</button>
      </div>
    </>
  );
};

export default Components;
