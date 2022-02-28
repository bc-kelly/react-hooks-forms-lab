import React from "react";

function Filter({ onSearch, onSearchChange, onCategoryChange }) {

  function handleChange(event) {
    console.log("changed")
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={onSearch}
        onChange={handleChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
