import React, { useEffect, useState } from "react";
import RestaurantItems from "./RestaurantItems";
import { MdOutlineTune } from "react-icons/md";
import { FaAngleDown , FaAngleUp } from "react-icons/fa";
import axios from "axios";

export default function RestaurantFilters() {
  const [data, setData] = useState([]);
  const [togle, setTogle] = useState(false)
  useEffect(() => {
    axios
      .get("http://localhost:5000/top-restaurant-chains")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-full max-w-6xl m-auto my-5 text-[12.6px] font-medium">
      <h1 className="text-xl ms-2 md:text-2xl font-semibold mb-4">
        Restaurants with online food delivery in Jaipur
      </h1>
      <div className="flex gap-3 ms-2 me-2 flex-wrap">
        <button className="flex items-center border border-gray-300 px-4 py-2 rounded-full text-gray-700">
          <span className="material-icons mr-1">
            <MdOutlineTune />
          </span>
          Filter
        </button>

        <div className="relative">
          <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-700 flex items-center">
            Sort By
            <span className="ml-2 material-icons">
              <FaAngleDown className="text-xl" />
            </span>
          </button>
        </div>
        <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-700">
          Fast Delivery
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-700">
          New on Swiggy
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-700">
          Ratings 4.0+
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-700">
          Pure Veg
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-700">
          Offers
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-700">
          Rs. 300–Rs. 600
        </button>
        <button className="border border-gray-300 px-4 py-2 rounded-full text-gray-700">
          Less than Rs. 300
        </button>
      </div>
      <div className="flex flex-wrap mt-5 gap-y-6">
        {data.map((d, i) => (
          <FilterItems key={i} i={i} d={d} togle={togle} />
        ))}

        <div className="w-full flex items-center">
          <hr className="w-1/3"/>
         {
          !togle ?  <button
          className="px-4 py-4 justify-center flex gap-4 items-center border w-[260px] border-gray-300 rounded-2xl hover:bg-gray-100 transition-all"
          onClick={() => {
            setTogle(true);
          }}
        >
          Show More <FaAngleDown className="text-xl font-thin" />
        </button> : 
         <button
         className="px-4 py-4 justify-center flex gap-4 items-center border w-[260px] border-gray-300 rounded-2xl hover:bg-gray-100 transition-all"
         onClick={() => {
           setTogle(false);
         }}
       >
         Show Less <FaAngleUp className="text-xl font-thin" />
       </button>
         }
          <hr className="w-1/3"/>
        </div>
      </div>
    </div>
  );
}

function FilterItems({ d, i ,togle}) {
  return !togle ? (
    i < (window.innerWidth <= 978 ? 2 : 3) ?
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2">
      <div
        className="h-[200px] w-full cursor-pointer flex items-end bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: `url('http://localhost:5000/images/${d.image}')`,
        }}
      >
        <h1 className="text-2xl font-bold mb-5 text-white p-2">{d.offer}</h1>
      </div>
      <div className="p-2">
        <h1 className="cursor-pointer text-xl font-bold">{d.name}</h1>
        <h2 className="text-xl font-bold cursor-pointer">({d.rating}/5)</h2>
        <h4 className="text-[#02060C99] font-medium cursor-pointer">
          {d.title}
        </h4>
        <address className="text-[#02060C99] font-medium cursor-pointer">
          {d.place}
        </address>
      </div>
    </div> : " "
  ) : (
    i < 9 ?
    <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2">
      <div
        className="h-[200px] w-full cursor-pointer flex items-end bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage: `url('http://localhost:5000/images/${d.image}')`,
        }}
      >
        <h1 className="text-2xl font-bold mb-5 text-white p-2">{d.offer}</h1>
      </div>
      <div className="p-2">
        <h1 className="cursor-pointer text-xl font-bold">{d.name}</h1>
        <h2 className="text-xl font-bold cursor-pointer">({d.rating}/5)</h2>
        <h4 className="text-[#02060C99] font-medium cursor-pointer">
          {d.title}
        </h4>
        <address className="text-[#02060C99] font-medium cursor-pointer">
          {d.place}
        </address>
      </div>
    </div> : " "
  );
}
