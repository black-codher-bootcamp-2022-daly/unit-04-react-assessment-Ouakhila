import "./styles/App.css";
import React from "react";
import data from "./models/data.json";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";
//import Home from "./pages/Home";
import About from "./pages/About";
import Basket from "./components/Basket";
import BasketTotal from "./components/BasketTotal";
import BasketCount from "./components/BasketCount";

function App() {
  const [products, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [term, setTerm] = useState("");
  const [count, setCounter] = useState(0);
  const [removeProduct, setRemoveProduct] = useState(basket);
  const [totalPrice, setTotal] = useState(basket);
  const [message, setMessage] = useState(" ");
  useEffect(() => {
    console.log("useEffect");
    setMessage(() => "Sorry, no items in basket...");
    // if ((count = 0)) {
    //   return <h1>Sorry, no items in basket...</h1>;
    // }
  }, [count]);

  const total = basket.reduce(
    (accumulator, el) => accumulator + el.trackPrice,
    0
  );

  function addToBasket(id) {
    const productToAdd = basket;

    productToAdd.push(id);
    setBasket(productToAdd);
    setCounter(count + 1);
    setTotal(total);
    console.log({ productToAdd, basket, total, totalPrice });
  }

  function removeFromBasket(trackId) {
    const newRemov = removeProduct.filter((item) => item.trackId !== trackId);
    basket.shift(trackId);
    setRemoveProduct(newRemov);
    setCounter(count - 1);
    console.log({ newRemov, basket, total });
  }

  async function search(value) {
    const url = `https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setProducts(results.items);
    }
  }

  return (
    <Router>
      <div className="App">
        <h1>Media Store</h1>

        <Header itemCount={count}></Header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/basket" element={<BasketProducts />}></Route>
        </Routes>
      </div>
    </Router>
  );

  function Home() {
    return (
      <>
        <ProductList addToBasket={addToBasket}>
          <Search term={term} setTerm={setTerm} search={search}></Search>
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
      </>
    );
  }

  function BasketProducts() {
    return (
      <div>
        <BasketCount basketCount={count} />
        <Basket
          basket={basket}
          removeFromBasket={removeFromBasket}
          basketCount={count}
          basketTotal={total}
        />
        <BasketTotal basketTotal={total} />
      </div>
    );
  }
}

export default App;
