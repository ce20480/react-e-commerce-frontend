import "./index.css";
import Nav from "./Navigation/Nav";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

// Database
import products from "./db/data"; // can import as anythin because of export default in data.jsx
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  // Radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Buttons fitler
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filter by category
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected,
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
      ),
    );
  }

  const filteredProds = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
