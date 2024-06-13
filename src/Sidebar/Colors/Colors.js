import "./Colors.css";
import Input from "../../components/Input";

const Size = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Size</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All SIZE
        </label>
        <Input
          handleChange={handleChange}
          value="Small"
          title="Small"
          name="test1"
          color="Small"
        />


        <Input
          handleChange={handleChange}
          value="Large"
          title="Large"
          name="test1"
          size="Large"
        />

        <Input
          handleChange={handleChange}
          value="Medium"
          title="Medium"
          name="test1"
          color="Medium "
        />

       
        

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="Large"
            name="test1"
          />
          {/* <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span> */}
          
        </label>
      </div>
    </>
  );
};

export default Size;
