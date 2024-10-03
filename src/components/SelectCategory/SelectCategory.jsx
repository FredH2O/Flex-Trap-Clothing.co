import { useState } from "react";
import "./SelectCategory.css";
const SelectCategory = () => {
  const [category, setCategory] = useState("");
  function handleSelectedCategory(e) {
    setCategory(e.target.value);
  }

  return (
    <div className="container category-container">
      <select
        className="form-select"
        aria-label="Default select example"
        value={category}
        onChange={handleSelectedCategory}
      >
        <option value="">Category</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default SelectCategory;
