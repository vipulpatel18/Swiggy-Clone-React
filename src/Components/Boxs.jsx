import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";


export default function Boxes({boxs}) {
  const [togle, setTogle] = useState(false)
  
  useEffect(()=>{
    setTogle(false)
  },[])

  return !togle ? (
    <div className="flex flex-wrap justify-center gap-4 p-4 w-full m-auto">
      {boxs.map((d, i) => (
        i < (window.innerWidth <= 883 ? 3 : 11) ? 
        <button
          key={i}
          className="px-4 py-4 border w-[260px] border-gray-300 rounded-2xl hover:bg-gray-100 transition-all truncate"
        >
          {d}
        </button> : ''
      ))}
      <button className="px-4 py-4 justify-center flex gap-4 items-center border w-[260px] border-gray-300 rounded-2xl hover:bg-gray-100 transition-all" 
      onClick={()=>{setTogle(true)}}
      >
        Show More <FaAngleDown className='text-xl font-thin' />
      </button>
    </div>
  ) : 
  (
    <div className="flex flex-wrap justify-center gap-4 p-4 w-full m-auto">
      {boxs.map((d, i) => (
        <button
          key={i}
          className="px-4 py-4 border w-[260px] border-gray-300 rounded-2xl hover:bg-gray-100 transition-all truncate"
        >
          {d}
        </button>
      ))}
      
    </div>
  ) 
}
