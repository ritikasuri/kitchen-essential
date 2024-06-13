import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Brass Utensils"
          title="Brass Utensils"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Steel Utensils"
          title="Steel Utensils"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Copper Utensils"
          title="Cooper Utensils"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Kansa Utensils"
          title="Kansa Utensils"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
