import React from "react";
//import PropTypes from "prop-types";

const Search = (props) => {
  const { keyword, setKeyword, findProduct } = props;

  function handleChange(e) {
    setKeyword(e.target.value);
    console.log(e);
  }

  function onSubmit(event) {
    event.preventDefault();
    findProduct(keyword);
  }
  return (
    <form className="Search">
      <p style={{ color: "black" }}>
        <em>{keyword && "Keywords Typed: " + keyword}</em>
      </p>
      <input
        className="Text-input"
        type="text"
        value={keyword}
        onChange={handleChange}
      />

      <button className="Button-submit" type="submit" onClick={onSubmit}>
        Find
      </button>
    </form>
  );
};
export default Search;
