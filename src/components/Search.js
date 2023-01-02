import React from "react";
//import PropTypes from "prop-types";

const Search = (props) => {
  const { term, setTerm, search } = props;

  function handleChange(e) {
    setTerm(e.target.value);
    console.log(e);
  }

  function onSubmit(event) {
    event.preventDefault();
    search(term);
  }
  return (
    <form className="Search">
      <p style={{ color: "black" }}>
        <em>{term && "Keywords Typed: " + term}</em>
      </p>
      <input
        className="Text-input"
        type="text"
        value={term}
        onChange={handleChange}
      />

      <button className="Button-submit" type="submit" onClick={onSubmit}>
        Find
      </button>
    </form>
  );
};
export default Search;
