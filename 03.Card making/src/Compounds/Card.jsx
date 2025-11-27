import React from "react";

const Card = ({values,handleClick,index}) => {
  const{name,profession,image,Friends}=values;
  return (
    <div className="w-52 bg-gray-100 rounded overflow-hidden  ">
      <div className="w-full h-32  rounded overflow-hidden">
        <img className="h-full w-full object-cover object-[top_center]" src={image} alt="" />
      </div>
      <div className="p-2">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h5 className="text-sm ">{profession}</h5>
        <button onClick={()=>{handleClick(index)}} className={`px-2 py-1 ${Friends ? "bg-green-500" :"bg-blue-500"} text-sm text-white font-semibold rounded mt-2`}>{Friends?"Friends":"Add Friends"}
</button>
      </div>
    </div>
  );
};

export default Card;
