import "./App.css";
import React from "react";
import data from "./models/example-data.json";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Basket } from "./components/Basket";

function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [count, setCounter] = useState(0);

  function addProduct(id) {
    const productToAdd = basket;
    productToAdd.push(id);
    setBasket(productToAdd);
    setCounter(count + 1);
    console.log({ productToAdd, basket });
  }

  async function findProducts(value) {
    const url = `> curl https://itunes.apple.com/search?q=${value}term=orange&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(results.items);
    }
  }

  return (
    <div className="App">
      Ouakhila was here
      <Header count={count}></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Home>
              <ProductList>
                <Search
                  keyword={keyword}
                  setKeyword={setKeyword}
                  findProducts={findProducts}
                ></Search>
                {products.map((item) => (
                  <Product
                    key={item.id}
                    trackName={item.trackName}
                    artistName={item.artistName}
                    currency={item.currency}
                    trackPrice={item.trackPrice}
                    artworkUrl30={item.artworkUrl30}
                    onClick={() => addProduct(item)}
                  ></Product>
                ))}
              </ProductList>
            </Home>
          }
        ></Route>
        <Route path="About" element={<About />}></Route>
        <Route
          path="Basket"
          element={<Basket listOfProducts={basket}></Basket>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
