import "./SelectCategory.css";

const SelectCategory = ({ category, setCategory }) => {
  function handleSelectedCategory(e) {
    console.log("Set Category:", setCategory);
    setCategory(e.target.value);
  }

  return (
    <div className="container category-container">
      <select
        className="form-select"
        aria-label="Default select example"
        value={category}
      >
        <option value="">All products</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's</option>
        <option value="women's clothing">Women's</option>
      </select>
    </div>
  );
};

export default SelectCategory;
