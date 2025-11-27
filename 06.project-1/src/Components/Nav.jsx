import React, { useContext } from 'react'
import { Link } from 'react-router'
import { productContext } from '../utiles/Context'
const Nav = () => {
  const[products]=useContext(productContext);
 let distinct_category= products && products.reduce((acc,cv)=>[...acc,cv.category],[]);
distinct_category=[...new Set(distinct_category)]
const color=()=>{
  return`rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.3)`

}
  return (
    <nav  className='h-full w-[15%] bg-zinc-100 flex flex-col items-center pt-5'>
  <a href="/create" className="border rounded border-blue-200 text-blue-300 py-2 px-4 text-sm font-semibold ">Add New Produt</a>
  <hr className="w-[80%] my-3 text-gray-300">
  </hr>
  <h1 className="text-xl w-[80%] font-semibold "> Category Filter</h1>
  {distinct_category.map((c,i)=>
    (<Link  key={i} to={`/?category/=${c}`} className=" w-[80%] mt-3">
  <li className='flex items-center mb-1 '>
  <span style={{backgroundColor:color()}} className='w-[15px] h-[15px] rounded-full flex items-center bg-blue-200 mr-2'>
    </span>
   {c}</li>
     
  </Link>)
 ) }
</nav>
  )
}

export default Nav