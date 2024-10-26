import "./index.css";
import Nav from "./Navigation/Nav";
import Recommended from "./Recommended/Recommended";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";

function App() {
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
