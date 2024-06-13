import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="CookWare" title="CookWare" />
          <Button onClickHandler={handleClick} value="TableWare" title="TableWare" />
          <Button onClickHandler={handleClick} value="KitchenWare" title="KitchenWare" />
          <Button onClickHandler={handleClick} value="Tiffins" title="Tiffins" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
