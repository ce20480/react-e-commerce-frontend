import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title-price-title">Price</h2>

      <label className="sidebar-label-container">
        <input type="radio" name="test" />
        <span className="checkmark"></span>All
      </label>
    </div>
  );
};

export default Price;
