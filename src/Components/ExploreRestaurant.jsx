import React from "react";

export default function ExploreRestaurant() {
  return (
    <div className="max-w-6xl m-auto mb-9">
      <h1 className="text-2xl font-bold ms-9">Explore Every Restaurants Near Me</h1>
      <div className="flex flex-wrap justify-center gap-4 p-4 w-full m-auto">
        <button
          className="px-4 py-4 border w-[46%] border-gray-300 rounded-2xl hover:bg-gray-100 transition-all truncate"
        >Explore Restaurants Near Me
        </button>
        <button
          className="px-4 py-4 border w-[46%] border-gray-300 rounded-2xl hover:bg-gray-100 transition-all truncate"
        >Explore Top Rated Restaurants Near Me
        </button>
    </div>
    </div>
  );
}
