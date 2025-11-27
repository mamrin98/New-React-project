import React from 'react'

const Navbar= ({data}) => {
  return (
    <div className="w-full px-20 p-5 flex justify-between items-center">
      <h3 className="text-md font-semibold ">Orange</h3>
      <div className="flex gap-1 items-center  bg-orange-600 text-white px-3 py-1 rounded-md shadow-lg  text-sm">
        <h3 className="">Favourite</h3>
        <h3>{data.filter((item)=>item.added).length}</h3>
      </div>

    </div>
  )
}

export default  Navbar
