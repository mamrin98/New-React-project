import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const Card = () => {
  cosnt[(Val, setVal)] = useState(false);

  
  return (
    <div className="h-screen w-full bg-zinc-100 flex justify-center items-center">
      <div className=" relative w-53 h-32 bg-zinc-400 rounded overflow-hidden ">
        <img
          className={`h-full w-full object-cover shrink-0 -translate-x-[5%]  ${
            val ? "translate-x-[0%]": "translate-x-[100%]"}`}
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww"
        ></img>
        <img
          className={`h-full w-full object-cover  shrink-0 -translate-x-[5%] ${
            val ? "translate-x-[0%]": "translate-x-[100%]"}`}
          src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fHww"
        ></img>
        <span
          onClick={()=>setVal(()=>!val)}
          className="absolute w-10 h-10 flex justify-center items-center bg-[#dadada8e] rounded-full px-1 py-1 bottom-[0%] left-[50%] translate-x-[-50%] -translate-y-[50%] "
        >
          <FaArrowRight />
        </span>
      </div>
    </div>
  );

}
export default Card;
