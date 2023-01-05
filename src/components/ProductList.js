import Product from "./Product";
//import data from "./models/data.json";
//import { useState, useEffect } from "react";

function ProductList(props) {
  console.log(props.items);
  return (
    <main>
      <h1> Suggested for you </h1>{" "}
      {!props.items || props.items.length === 0 ? (
        <h1>No items found...</h1>
      ) : (
        props.items.map((item) => (
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
        ))
      )}
      {/* {props.children} */}
      {/* {props.books.map((item) => (<Book title={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} authors={item.volumeInfo.authors} selflink={item.selfLink}></Book>))} */}
    </main>
  );
}
export default ProductList;
