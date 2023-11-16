import React, { useState } from "react";
import { useSearchContext } from "../context/searchContext";

const Header = () => {
  const { handleSearch } = useSearchContext();
  const handleInput = (e) => {
    handleSearch(e.target.value);
  };
  // console.log(search);
  return (
    <div className=" border bg-gray-400 sticky top-0 left-0 w-full">
      <div className="p-2 rounded-lg">
        <input
          type="text"
          className="border rounded-lg p-1"
          placeholder="Search.."
          onChange={handleInput}
        />
      </div>
    </div>
  );
};

export default Header;
