import Product from "./Product";
//import { BasketTotal } from "./BasketTotal";
//import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";

export const Basket = ({ basket, removeFromBasket }) => {
  return (
    <div>
      {basket.map((el) => (
        <Product
          key={el.trackId}
          trackName={el.trackName}
          artistName={el.artistName}
          currency={el.currency}
          trackPrice={el.trackPrice}
          artworkUrl30={el.artworkUrl30}
          removeFromBasket={true}
          onClick={() => removeFromBasket(el.trackId)}
        />
      ))}
    </div>
  );
};
