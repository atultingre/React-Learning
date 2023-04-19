import React from "react";
import { FcSearch } from "react-icons/fc";
const SearchItem = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="searchForm">
      <label htmlFor="search">
        <FcSearch role="button" tabIndex="1" />
      </label>
      <input
        type="text"
        role="search"
        id="searchBox"
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;
