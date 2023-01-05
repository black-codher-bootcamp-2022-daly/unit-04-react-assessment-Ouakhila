import "./styles/App.css";
import React from "react";
//import ReactPaginate from "react-paginate";
import data from "./models/data.json";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";
import About from "./pages/About";
import Basket from "./components/Basket";
import BasketTotal from "./components/BasketTotal";
import BasketCount from "./components/BasketCount";
import Paginate from "./components/Paginate";

function App() {
  const [items, setProducts] = useState(data);
  const [basket, setBasket] = useState([]);
  const [term, setTerm] = useState("");
  const [count, setCounter] = useState(0);
  const [removeProduct, setRemoveProduct] = useState(basket);
  const [totalPrice, setTotal] = useState(basket);

  const [productsPost, setProductsPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = productsPost.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(productsPost.length / postPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const basketTotal = basket.reduce(
    (accumulator, el) => accumulator + el.trackPrice,
    0
  );

  function addToBasket(trackId) {
    items.map((item) => {
      if (item.trackId === trackId) {
        console.log(item);
        item.inBasket = true;
        setCounter(count + 1);
        setBasket((prev) => [...prev, item]);
      }
    });
    setTotal(basketTotal);
  }

  function removeFromBasket(trackId) {
    // const arr = [];
    // basket.filter((item) => {
    //   if (item.trackId && item.trackId !== trackId) {
    //     //arr.shift(item.trackId);
    //     arr.push(item);
    //   }
    //   item.isInTheBasket = false;
    //   setBasket(arr);
    //item.isInTheBasket = !item.isInTheBasket;
    // });

    const newRemov = removeProduct;
    newRemov.filter((item) => {
      if (item.trackId !== trackId) {
        basket.push(item);
      }
      item.inBasket = false;
    });
    basket.shift(trackId);
    setRemoveProduct(newRemov);
    setCounter(count - 1);
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
        <h1 className="Media">Media Store</h1>
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
        <Search term={term} setTerm={setTerm} search={search}></Search>
        {productsPost ? (
          <div className="product-content-section">
            <Paginate
              postPerPage={postPerPage}
              totalPosts={productsPost.length}
              paginate={paginate}
              previousPage={previousPage}
              nextPage={nextPage}
            />
            <ProductList
              items={items}
              addToBasket={addToBasket}
              removeFromBasket={removeFromBasket}
              itemCount={data.length}
            />
          </div>
        ) : (
          <div>Loading....</div>
        )}
        {items.length === 0 && "Sorry, no items in basket..."}
      </>
    );
  }

  function BasketProducts() {
    return (
      <>
        <BasketCount basketCount={basket.length} />
        {
          <Basket
            basket={basket}
            removeFromBasket={removeFromBasket}
            basketCount={count}
            basketTotal={basketTotal}
          />
        }
        <BasketTotal basketTotal={basketTotal} />
      </>
    );
  }
}

export default App;
