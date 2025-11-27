import React from 'react'

const Create = () => {
  return (
   <form className=" w-screen  h-screen  p-[5%] flex items-center flex-col " action="
   ">
    <h1  className="text-2xl font-semibold w-1/2 mb-5 "> Add New Products</h1>
    <input className="w-1/2 bg-zinc-200 p-2 rounded mb-3  text-xl " type="text" placeholder='Title'/>
    
   </form>
  )
}

export default Create