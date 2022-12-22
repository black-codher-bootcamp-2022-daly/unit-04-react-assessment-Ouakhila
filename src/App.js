import "./App.css";
import React from "react";
import data from "./models/example-data.json";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { useState } from "react";

//trackName, artistName, trackPrice, currency, trackViewUrl

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="App">
      Ouakhila was here
      <ProductList>
        {products.map((item) => (
          <Product
            key={item.id}
            trackName={item.trackName}
            artistName={item.artistName}
            currency={item.currency}
            trackPrice={item.trackPrice}
            artworkUrl30={item.artworkUrl30}
          ></Product>
        ))}
      </ProductList>
    </div>
  );
}

export default App;
