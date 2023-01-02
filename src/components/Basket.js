import Product from "./Product";
//import { BasketTotal } from "./BasketTotal";
//import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";

const Basket = ({ basket, removeFromBasket }) => {
  return (
    <div>
      {basket.map((el) => (
        <Product
          key={el.trackId}
          kind={el.kind}
          id={el.trackId}
          name={el.trackName}
          thumbnail={el.artworkUrl100}
          currency={el.currency}
          price={el.trackPrice}
          removeFromBasket={true}
          onClick={() => removeFromBasket(el.trackId)}
        />
      ))}
    </div>
  );
};
export default Basket;
