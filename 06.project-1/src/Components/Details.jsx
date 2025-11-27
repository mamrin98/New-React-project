import React, {  useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import Loading from "./Loading";
import axios from "../utiles/Axios";
const Details = () =>  {
  const { id } = useParams();
 
  const [product, setProduct] = useState(null);
  const getSingleProduct = async () =>{
    try{
      const {data} = await axios.get(`/products/${id}`);
   
      setProduct(data);
    }catch(error){
      console.log(error)
    }
   };
  useEffect(() => {
     getSingleProduct();
}, []);

  return product ? (
    <div className="w-[70%] h-full m-auto  p-[10%] flex justify-between  items-center "
    >
      <img className="w-[40%] object-contain " src={`${product.image}`} alt="" />
      <div className="content  w-[50%] ">
        <h1 className="text-3xl font-semibold">{product.title}</h1>
        <h3 className="mt-3 text-md font-semibold text-blue-300 ">
          {product.category}
        </h3>
        <h2 className="text-red-300 my-2 "> {product.price}</h2>
        <p className="mb-5 text-sm text-gray-500 ">{product.description}</p>

        <Link to="/edit" className=" mr-4 bg-blue-500 text-white  px-5 py-1 rounded ">
          Edit
        </Link>
        <Link to="/delete" className="bg-red-500 text-white  px-3 py-1 rounded ">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
