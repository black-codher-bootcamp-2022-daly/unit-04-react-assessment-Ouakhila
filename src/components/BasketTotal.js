import React from "react";
function BasketTotal(props) {
  const { basketTotal } = props;
  //console.log(basketTotal);
  return <div>Total: {basketTotal} </div>;
}

export default BasketTotal;
