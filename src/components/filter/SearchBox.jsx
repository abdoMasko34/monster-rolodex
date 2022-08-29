import React from "react";
import "./filter-style.css";
const SearchBox = ({ placeholder, handleChanges }) => (
  <div className="filter-wrapper">
    <input
      type="text"
      placeholder={placeholder}
      required
      className="search"
      onChange={handleChanges}
    />
  </div>
);

export default SearchBox;
