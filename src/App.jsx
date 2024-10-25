import { useState } from "react";
import Nav from "./Navigation/Nav";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count: {count}</h1>
      <Nav />
      <Products />
      <Recommended />
    </>
  );
}

export default App;
