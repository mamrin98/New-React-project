import React from 'react'

const Card = () => {
 const data=[{
  image:"https://images.unsplash.com/photo-1763307411415-096281389c41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",name:"Amazon Basics",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptas.",instock:true,
 },{
 image:"https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW8lMjBlZGl0b3J8ZW58MHx8MHx8fDA%3D",name:"photes",description:"photes will be edited always" ,instock:false,
 },{
 image:"https://images.unsplash.com/photo-1763307411415-096281389c41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",name:"Amazon Basics",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, voluptas.",instock:true,
 },]
  return (
    <div className="h-screen w-full bg-zinc-200 flex justify-center items-center gap-5  flex-wrap">
   {data.map((elem,index)=>( <div key={index} className=' w-52  bg-zinc-100 rounded-md overflow-hidden'>
<div className="bg-red-300  w-full h-32 ">
  <img  className="w-full h-full object-cover
  "src={elem.image} alt="" />
</div>
<div className="px-2 py-4 w-full ">
  <h1 className=' font-bold'> 
    {elem.name}</h1>
    <p className="text-sm mt-3 tracking-tight">{elem.description}</p>
  <button oncl className={`px-2 py-1 rounded${elem.instock?"bg-blue-600":"bg-red-600"} text-white text-sm font-semibold mt-3 hover:scale-105`}>
{elem.instock?"Instock":"Out of Stock"}
  </button>
</div>
      </div>))}

   
    </div>
  )
}

export default Card