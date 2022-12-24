import Product from "./Product";
import { useState } from "react";
//import data from "./components/models/example-data.json";

export const Basket = ({ basket, removeFromBasket }) => {
  //   const [removeProduct, setRemoveProduct] = useState(basket);

  //   function removeFromBasket(id) {
  //     const newRemov = removeProduct.filter((item) => item.id !== id);
  //     setRemoveProduct(newRemov);
  //     console.log({ newRemov, basket });
  //   }

  return (
    <div>
      <h2> You have Added: {basket.length}</h2>
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
          //onClick={() => el.onClick(el.id)}
        />
      ))}
    </div>
  );
};
