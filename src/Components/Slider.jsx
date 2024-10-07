import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Slider() {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setData(response.data);
        // console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const slideLeft = () => {
    // setSlide(slide > 0 ? slide - 1 : data.length - 3);
    setSlide(slide > 0 ? slide - 1 : slide);
  };

  const slideRight = () => {
    // setSlide(slide < data.length - 3 ? slide + 1 : 0);
    setSlide(slide < data.length - (window.innerWidth >= 1024
      ? 6
      : 3) ? slide + 1 : slide);
  };

  return (
    <div>
    <div className="flex items-center justify-center py-8">
    <div className=" w-full max-w-5xl">
      <div className='flex justify-between ms-5 content-center mb-7'>
        <h1 className='text-2xl md:text-3xl font-medium'>What's on your mind?</h1> 
      <div className='gap-4 flex me-4'>
      <button onClick={slideLeft} className="bg-gray-200 text-gray-600 p-2 rounded-full">
            ❮
          </button>
          <button onClick={slideRight} className="bg-gray-200 text-gray-600 p-2 rounded-full">
            ❯
          </button>
      </div>
      </div>
      <div className="flex overflow-hidden slider-container  snap-x snap-mandatory scroll-smooth py-4 px-3"
      >
        {
          data.map((d,i)=>{
            return <SliderItem key={i} d={d} slide={slide}/>
          })
        }
      </div>
    </div>
  </div>
    <hr className='max-w-5xl m-auto h-2 mt-3 pb-6' />
</div>
  )
}


function SliderItem({d,slide}){
  return(
    <div  className="flex-shrink-0 w-1/3 lg:w-1/6 text-center slider-item duration-200 cursor-pointer" 
    style={{
      transform: `translateX(-${slide * (100)}%)`
    }}
    >
          <img
            src={`http://localhost:5000/images/${d.image}`}
            className="mx-auto rounded-full mb-2"
            alt="Pure Veg"
          />
        </div>
  )
}