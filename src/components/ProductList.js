import Product from "./Product";
//import data from "./models/data.json";
//import { useState, useEffect } from "react";

function ProductList(props) {
  console.log(props.products);
  return (
    <main>
      <h1> Suggested for you </h1>{" "}
      {!props.products || props.products.length === 0 ? (
        <h1>No items found</h1>
      ) : (
        props.products.map((item) => (
          <Product
            key={item.trackId}
            item={item}
            kind={item.kind}
            // id={product.trackId}
            name={item.trackName}
            thumbnail={item.artworkUrl100}
            currency={item.currency}
            price={item.trackPrice}
            addToBasket={props.addToBasket}
            //removeFromBasket={props.removeFromBasket}
          />
        ))
      )}
      {/* {props.children} */}
      {/* {props.books.map((item) => (<Book title={item.volumeInfo.title} subtitle={item.volumeInfo.subtitle} authors={item.volumeInfo.authors} selflink={item.selfLink}></Book>))} */}
    </main>
  );
}
export default ProductList;
