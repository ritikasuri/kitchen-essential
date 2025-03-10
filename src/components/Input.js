const Input = ({ handleChange, value, title, name, Size }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" ></span>
      {title}
    </label>
  );
};

export default Input;
