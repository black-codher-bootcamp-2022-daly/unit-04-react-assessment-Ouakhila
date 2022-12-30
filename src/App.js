import "./styles/App.css";
import React from "react";
import data from "./models/data.json";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Basket } from "./components/Basket";
import { BasketTotal } from "./components/BasketTotal";
import { BasketCount } from "./components/BasketCount";

function App() {
  const [products, setProducts] = useState(data);
  const [product, setBasket] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [count, setCounter] = useState(0);
  const [removeProduct, setRemoveProduct] = useState(product);
  const [totalPrice, setTotal] = useState(product);
  const [message, setMessage] = useState(" ");
  useEffect(() => {
    console.log("useEffect");
    setMessage(() => "Sorry, no items in basket...");
    // if ((count = 0)) {
    //   return <h1>Sorry, no items in basket...</h1>;
    // }
  }, [count]);

  const total = product.reduce(
    (accumulator, el) => accumulator + el.trackPrice,
    0
  );

  function addToBasket(id) {
    const productToAdd = product;

    productToAdd.push(id);
    setBasket(productToAdd);
    setCounter(count + 1);
    setTotal(total);
    console.log({ productToAdd, product, total, totalPrice });
  }

  function removeFromBasket(trackId) {
    const newRemov = removeProduct.filter((item) => item.trackId !== trackId);
    product.shift(trackId);
    setRemoveProduct(newRemov);
    setCounter(count - 1);
    console.log({ newRemov, product, total });
  }

  async function findProducts(value) {
    const url = `curl https://itunes.apple.com/search?term=orange&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(results.items);
    }
  }

  return (
    <div className="App">
      <h1>Media Store</h1>

      <Header itemCount={count}></Header>
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
                    kind={item.kind}
                    id={item.trackId}
                    name={item.trackName}
                    thumbnail={item.artworkUrl100}
                    currency={item.currency}
                    price={item.trackPrice}
                    onClick={() => addToBasket(item)}
                  ></Product>
                ))}
              </ProductList>
            </Home>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/basket"
          element={
            <div>
              <BasketCount basketCount={count} />
              <Basket basket={product} removeFromBasket={removeFromBasket} />
              <BasketTotal basketTotal={total} />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
