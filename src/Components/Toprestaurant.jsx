import React, { useState, useEffect } from "react";
import RestaurantItems from "./RestaurantItems";
import axios from "axios";

export default function Toprestaurant() {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

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

  const slideLeft = () => {
    setSlide(slide > 0 ? slide - 1 : 0);
  };

  const slideRight = () => {
    // Adjust the number of slides based on screen size (3 for large, 2 for medium, 1 for small)
    const itemsToShow =
      window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    setSlide(slide < data.length - itemsToShow ? slide + 1 : slide);
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-5 px-4">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-medium">What's on your mind?</h1>
        <div className="flex gap-4">
          <button
            onClick={slideLeft}
            className="bg-gray-200 text-gray-600 p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={slideRight}
            className="bg-gray-200 text-gray-600 p-2 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              slide *
              (100 /
                (window.innerWidth >= 1024
                  ? 3
                  : window.innerWidth >= 768
                  ? 2
                  : 1))
            }%)`,
          }}
        >
          {data.map((d, i) => (
            <RestaurantItems key={i} d={d} />
          ))}
        </div>
      </div>
      <hr className="max-w-7xl mx-auto h-5 mt-9 pb-6" />
    </div>
  );
}
