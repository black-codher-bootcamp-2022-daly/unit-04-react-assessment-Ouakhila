import React from "react";
import Product from "./Product";

const Basket = ({ basket, removeFromBasket }) => {
  console.log(basket);

  return (
    <div>
      {!basket || basket.length === 0 ? (
        <h1 className="empty">Sorry, no items in basket...</h1>
      ) : (
        <div>
          {/* <h1> {basket.length}</h1> */}
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
      )}
    </div>
  );
};
export default Basket;
