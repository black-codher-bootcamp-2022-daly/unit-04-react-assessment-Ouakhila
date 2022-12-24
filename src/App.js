import "./App.css";
import React from "react";
import data from "./models/data.json";
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
  const [itemCount, setCounter] = useState(0);
  const [removeProduct, setRemoveProduct] = useState(basket);

  function addToBasket(id) {
    const productToAdd = basket;
    productToAdd.push(id);
    setBasket(productToAdd);
    setCounter(itemCount + 1);
    console.log({ productToAdd, basket });
  }

  function removeFromBasket(trackId) {
    const newRemov = removeProduct.filter((item) => item.trackId !== trackId);
    basket.shift(trackId);
    setRemoveProduct(newRemov);
    setCounter(itemCount - 1);
    console.log({ newRemov, basket });
  }

  // const removeFromBasket = () => {
  //   setRemoveProduct((item) =>
  //     item.filter((el) => {
  //       return el.id !== item;
  //     })
  //   );
  //   console.log(setRemoveProduct);
  // };

  async function findProducts(value) {
    const url = `curl https://itunes.apple.com/search?q=${value}term=orange&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(results.items);
    }
  }

  return (
    <div className="App">
      <h1>Media Store</h1>
      <Header itemCount={itemCount}></Header>
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
                    key={item.trackId}
                    trackName={item.trackName}
                    artistName={item.artistName}
                    currency={item.currency}
                    trackPrice={item.trackPrice}
                    artworkUrl30={item.artworkUrl30}
                    onClick={() => addToBasket(item)}
                    //removeFromBasket={removeFromBasket}
                  ></Product>
                ))}
              </ProductList>
            </Home>
          }
        ></Route>
        <Route path="about" element={<About />}></Route>
        <Route
          path="basket"
          element={
            <Basket
              basket={basket}
              removeFromBasket={removeFromBasket}
            ></Basket>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
