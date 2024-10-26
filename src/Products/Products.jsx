import "./Products.css";

const Products = ({ filteredProds }) => {
  return (
    <>
      <section className="card-container">{filteredProds}</section>
    </>
  );
};

export default Products;
