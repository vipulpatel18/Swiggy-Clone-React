import React from "react";

export default function RestaurantItems({ d }) {
  return (
    <div className="flex-shrink-0 px-2 w-full sm:w-1/2 lg:w-1/3 mb-6">
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
    </div>
  );
}
