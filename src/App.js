import { useState } from "react";

import Navigation from "./Navigation/Nav";
import products from "./db/data";
import Card from "./components/Card";
import { Provider } from "react-redux";
import store from "./utils/store";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <BrowserRouter>
      <Provider store={store} >
        <Navigation />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path='/' element={<ProductDetails selectedCategory={selectedCategory}  query={query} handleChange={handleChange} handleClick={handleClick} result={result} handleInputChange={handleInputChange}  />} />
          </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
