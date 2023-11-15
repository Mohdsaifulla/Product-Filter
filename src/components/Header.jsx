import React, { useState } from "react";


const Header = () => {
  const [search, setSearch] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  return (
    <div className=" border bg-gray-400">
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
