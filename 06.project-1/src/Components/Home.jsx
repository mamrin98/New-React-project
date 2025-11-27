import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router';
import { productContext } from '../utiles/Context';
import Loading from './Loading';
import axios from '../utiles/Axios';
  
const Home = () => {
const [products] = useContext(productContext)
const{search}=useLocation();
const category=decodeURIComponent(search.split("=")[1]);

const[filteredproducts,setFilteredproducts]=useState(null)
const getproductcategory= async()=>{
  try{
     const {data}=await axios.get(`/products/category/${category}`)
     setFilteredproducts(data);
    
  }
  catch(err){
    console.log(err)

  }

}
useEffect(()=>{
if(!filteredproducts || category=="undefined"
) setFilteredproducts(products)
 if(category!="undefined") getproductcategory()
},[category,products])


  return (products ? (
    <>
    <Nav/>
<div className='w-[85%] p-10 pt-[5%] flex flex-wrap  overflow-x-hidden overflow-y-auto '>
  {filteredproducts && filteredproducts.map((p,i)=>{
    return(
       <Link  key={i} to={`/details/${p.id}` }className='card w-[18%] h-[30vh] rounded shadow border-transprent  p-3 mb-3 mr-3 flex-col flex justify-center items-center'>
    <div className='w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110'
    style={{backgroundImage:`url(${p.image})`}}>
</div>
<h1 className='hover:text-blue-300 text-sm'>{p.title}</h1>
  </Link>
    )
  })}
 

 
</div>
    </>):(<Loading/>)
  );
};

export default Home