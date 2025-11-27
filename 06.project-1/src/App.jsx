import React from 'react'

import { Routes ,Route, Link, useLocation} from 'react-router'
import Home from './Components/Home'
import Details from './Components/Details'
import Create from"./Components/Create"


const App = () => {
  const{search,pathname}=useLocation();
  console.log(search,pathname)
  return (
    <div className="w-full h-screen  flex  relative">
   {(pathname!="/" || search.length>0) &&<Link  className="absolute right-[5%] top-[2%] bg-red-300 text-white font-semibold px-2 py-1 rounded "to="/"> Home</Link>
     }
   <Routes>
    <Route path="/create" element={<Create/>}/>
    <Route path="/"element={<Home/>}/>
    <Route path="/details/:id"element={<Details/>}/>
   </Routes>
 
   </div>
  )
}

export default App