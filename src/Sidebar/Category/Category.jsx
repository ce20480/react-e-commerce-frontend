import "./Category.css";
import Input from "../../components/Input";

// Label is used for clicking purposes
// input of type radio is used to select one option from multiple options
// All other options with the same name attribute will be deselected
const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <Input handleChange={handleChange} value="" title="All" name="test" />
      <Input
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
      />
      <Input
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
      />
    </div>
  );
};

export default Category;
