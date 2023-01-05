import React from "react";
import Product from "./Product";
import BasketCount from "./BasketCount";

const Basket = ({ basket, ...props }) => {
  const { removeFromBasket, basketCount } = props;
  console.log(basket);

  return (
    <>
      <h1>Basket</h1>
      <BasketCount basketCount={basketCount} />
      {!basket || basket.length === 0 ? (
        <h1 className="empty">Sorry, no items in basket...</h1>
      ) : (
        <div className="product">
          {basket.map((item) => (
            <Product
              item={item}
              key={item.trackId}
              kind={item.kind}
              name={item.trackName}
              thumbnail={item.artworkUrl100}
              currency={item.currency}
              price={item.trackPrice}
              inBasket={item.inBasket}
              removeFromBasket={removeFromBasket}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default Basket;
