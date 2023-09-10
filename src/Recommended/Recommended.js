import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick, handleInputChange, query, selectedCategory }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button selectedCategory={selectedCategory} onClickHandler={handleClick} value="" title="All Products" />
          <Button selectedCategory={selectedCategory} onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button selectedCategory={selectedCategory} onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button selectedCategory={selectedCategory} onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button selectedCategory={selectedCategory} onClickHandler={handleClick} value="Vans" title="Vans" />
        <div className="nav-container" style={{ marginLeft: '15px' }}>
          <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
