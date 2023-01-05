import Product from "./Product";
//import data from "./models/data.json";
//import { useState, useEffect } from "react";

function ProductList(props) {
  console.log(props.items);
  return (
    <main>
      <h1 className="title"> Suggested for you </h1>{" "}
      {!props.items || props.items.length === 0 ? (
        <div className="empty"> No items found...</div>
      ) : (
        props.items.map((item) => (
          <div className="product" key={item.trackId}>
            <Product
              key={item.trackId}
              item={item}
              kind={item.kind}
              id={item.trackId}
              name={item.trackName}
              thumbnail={item.artworkUrl100}
              currency={item.currency}
              price={item.trackPrice}
              addToBasket={props.addToBasket}
              removeFromBasket={props.removeFromBasket}
            />
          </div>
        ))
      )}
    </main>
  );
}
export default ProductList;
