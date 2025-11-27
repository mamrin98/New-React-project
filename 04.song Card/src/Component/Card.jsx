import React from "react";

const Card = ({values,index,handleclick}) => {
  const{name,image,artist,added}=values
  return (
    <div className="w-60 bg-zinc-200 p-3 rounded-md  flex    mt-10  gap-4 relative pb-8">
      <div className="  w-15 h-15 rounded-md  bg-orange-400  overflow-hidden">
        <img  className="h-full w-full object-cover  " src={image} alt="" />
      </div>
      <div className=" ">
        <h3 className="text-md font-semibold">{name}</h3>
        <h5 className="text-sm text-zinc-500
         ">{artist}</h5>
      </div>
      <button onClick={()=>handleclick(index)} className={`absolute left-1/2 
      translate-y-[50%] -translate-x-[50%] bottom-0  whitespace-nowrap text-xs text-white px-3 py-1 ${added ? "bg-teal-500": "bg-orange-500"} rounded-full font-semibold`} >{added ? "Favourite" :"Add to favourite"}
      </button>
    </div>
  );
};

export default Card;
