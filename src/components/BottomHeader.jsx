import React from "react";
import { useSearchContext } from "../context/searchContext";

const BottomHeader = () => {
    const {handleCategory,handleRange}=useSearchContext()
    const handleSelectCategory=(e)=>{
handleCategory(e.target.value)
    }

    const handleSelectRange=(e)=>{
handleRange(e.target.value)
    }
  return (
    <div className=" border bg-gray-50  w-full h-10 flex justify-around items-center">
      <div className="p-2 rounded-lg">
        <select onChange={handleSelectCategory}>
          <option value="all">Select category</option>
          <option value="smartphones">smartphones</option>
          <option value="laptops">laptops</option>
          <option value="fragrances">fragrances</option>
          <option value="skincare">skincare</option>
          <option value="groceries">groceries</option>
          <option value="home-decoration">home-decoration</option>
        </select>
      </div>
      <div>
        <select onChange={handleSelectRange}>
          <option value="all" >Price-range</option>
          <option value="10-50">$10-50</option>
          <option value="50-100">$50-100</option>
          <option value="100-200">$100-200</option>
          <option value="200-300">200-300</option>
          <option value='300-500'>300-500</option>
          {/* <option value="home-decoration">About 1000</option> */}
        </select>
      </div>
    </div>
  );
};

export default BottomHeader;
