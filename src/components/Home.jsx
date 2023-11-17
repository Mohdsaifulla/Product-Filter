import React, { useEffect, useState } from "react";
import fetchProduct from "../api/fetchApi";
import { useSearchContext } from "../context/searchContext";

const Home = () => {
  const [data, setData] = useState([]);
  const { search } = useSearchContext();
  const { categorySearch } = useSearchContext();
  const { rangeSearch } = useSearchContext();
  // console.log(categorySearch);
  // console.log(rangeSearch);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetched = await fetchProduct();
        setData(fetched.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredData =
    data &&
    data.filter((item) => {
      const searchMathces = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const categoryMatches =
        item.category.toLowerCase() === categorySearch.toLowerCase() ||
        categorySearch === "all" ||
        !categorySearch;
      const priceInRange =
        (rangeSearch === "10-50" && item.price >= 10 && item.price <= 50) ||
        (rangeSearch === "50-100" && item.price >= 50 && item.price <= 100) ||
        (rangeSearch === "100-200" && item.price >= 100 && item.price <= 200) ||
        (rangeSearch === "200-300" && item.price >= 200 && item.price <= 300) ||
        (rangeSearch === "300-500" && item.price >= 300 && item.price <= 500) ||
        rangeSearch === "all" ||
        !rangeSearch;
      return (
        (search ? searchMathces : true) &&
        (categorySearch ? categoryMatches : true) &&
        (rangeSearch ? priceInRange : true)
      );
    });

  return (
    <div className="flex justify-center m-4">
      <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 object-center items-center justify-center ">
        {filteredData &&
          filteredData.map((item) => (
            <div className="border-2 flex justify-center flex-col items-center  p-1 hover:border-2 hover:border-gray-400 duration-300 cursor-pointer rounded ">
              <img
                src={item.images[0]}
                alt="Proudct-image"
                className="w-32 h-32 rounded"
              />
              <div className="flex justify-between items-start  flex-col text-sm mt-2 border-t border-black text-gray-600 font-semibold p-1 w-full">
                <div className="">
                  <p>Category: {item.category}</p>
                  <p>Model: {item.title.slice(0, 10)}</p>
                  <p>Price: ${item.price}</p>
                  <p>Brand: {item.brand.slice(0, 10)}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
