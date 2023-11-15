import React, { useEffect, useState } from "react";
import fetchProduct from "../api/fetchApi";

const Home = () => {
  const [data, setData] = useState([]);
  

 
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
  console.log(data);
  return (
    <div className="flex justify-center m-4">
      <div className="grid sm:grid-cols-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 object-center items-center justify-center ">
        {data &&
          data.map((item) => (
            <div className="border-2 flex justify-center flex-col items-center  p-1 hover:border-2 hover:border-gray-400 duration-300 cursor-pointer rounded ">
              <img
                src={item.images[0]}
                alt="Proudct-image"
                className="w-32 h-32 rounded"
              />
              <div className="flex justify-between items-start  flex-col text-sm mt-2 border-t border-black text-gray-600 font-semibold p-1 w-full">
                <div className="">
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
