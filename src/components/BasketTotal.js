import React from "react";
function BasketTotal(props) {
  //console.log(props.basketTotal);
  return <h1 className="total">Total: {props.basketTotal} </h1>;
}

export default BasketTotal;
