import React from "react";
import Product from "./Product";

const Basket = ({ basket, removeFromBasket }) => {
  console.log(basket);

  return (
    <div>
      {basket ? (
        <div>
          <h1> {basket.length}</h1>
          {basket.map((item) => (
            //console.log(el.trackId)
            <Product
              item={item}
              key={item.trackId}
              kind={item.kind}
              name={item.trackName}
              thumbnail={item.artworkUrl100}
              currency={item.currency}
              price={item.trackPrice}
              isInTheBasket={true}
              //addToBasket={props.addToBasket}
              removeFromBasket={removeFromBasket}
              //onClick={() => removeFromBasket(props.trackId)}
            />
          ))}
        </div>
      ) : (
        <h1> No products yet</h1>
      )}
    </div>
  );
};
export default Basket;
