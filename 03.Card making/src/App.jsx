import React from 'react'
import Card from './Compounds/Card'
import { useState } from 'react'

const App = () => {
  const raw=[{
    name:"Harsh",
    profession:"developer",
    image:"https://images.unsplash.com/photo-1620147789860-6cbe6a1f1159?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFuJTIwcG9ydHJhaXRzfGVufDB8fDB8fHww" 
  ,Friends:false },
    {
      name:"Johan",
      profession:"painter",
      image:"https://images.unsplash.com/photo-1618353446411-c221ae85034e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW4lMjBwb3J0cmFpdHN8ZW58MHx8MHx8fDA%3D",
      Friends:false ,
    },
    {
      name:"priya",
      profession:"artist",
      image:"https://plus.unsplash.com/premium_photo-1733424749245-2d997e475dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBwb3J0cmFpdHN8ZW58MHx8MHx8fDA%3D",Friends:false,
    }]
  
    const[data,setData]=useState(raw);
    const handleButtonClick=(changingindex)=>{
      setData((prev)=>{
        return prev.map((item,index)=>{
          if(index===changingindex){
            return{...item,Friends:!item.Friends}
          }
          return item;

        })
      })
    }
  return (
    <div className='w-full h-screen bg-zinc-400 flex justify-center items-center gap-4 '>
      {data.map((item,index)=>(<Card key={index} index={index} values={item} handleClick={handleButtonClick}/>
      ))}
    </div>
  )
}

export default App