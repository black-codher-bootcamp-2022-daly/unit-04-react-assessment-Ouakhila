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
            <Product
              item={item}
              key={item.trackId}
              kind={item.kind}
              name={item.trackName}
              thumbnail={item.artworkUrl100}
              currency={item.currency}
              price={item.trackPrice}
              isInTheBasket={true}
              removeFromBasket={removeFromBasket}
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
