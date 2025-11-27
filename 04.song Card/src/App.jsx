
import React from 'react'
import Navbar from './Component/Navbar'
import Card from './Component/Card'
import { useState } from 'react'

const App = () => {
  const data=[{
      name:"nenithu parthean",
      image:"https://plus.unsplash.com/premium_photo-1661315460685-0d7e6848c600?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29uZyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      artist:"Anuradha",
      added:false,
    },
  {
      name:"ne partha vizhigal",
      image:"https://media.istockphoto.com/id/1323063599/photo/man-try-to-sing-high-note-using-his-mic.webp?a=1&b=1&s=612x612&w=0&k=20&c=QD_H6d1cIdT4bqRs7IBesCxz9hXdnL2VuJSeRtt1HIc=",
      artist:"Anirdha",
      added:false,
    },
  {
      name:"Tum hi ho",
      image:"https://media.istockphoto.com/id/1125877063/photo/mixed-race-woman-singing-and-playing-guitar.webp?a=1&b=1&s=612x612&w=0&k=20&c=hp6EHUc7YHt4qB1gP8WZAiVxHsO85b1bFjuE7vGHZTs=",
      artist:"sangeetha",
      added:false,
    },
  {
      name:"life of love",
      image:"https://media.istockphoto.com/id/2161124245/photo/christians-raising-their-hands-in-praise-and-worship-at-a-night-music-concert.jpg?s=612x612&w=0&k=20&c=2Lt_xDFW_Wt4V20K_BA2fH43ta9hBbQP_y6NfvBjjI0=",
      artist:"Ramya",
      added:false,
    },
  {
      name:"Monica",
      image:"https://imgs.search.brave.com/nMcd0N1JY9q6XZ9Kwo02l-i1RhWSudXy-ODK_mfMzao/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vY2luZW1h/c3BpY2UuaW4vd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDgv/UmFqaW5pa2FudGgt/Q29vbGllLU1vbmlj/YS1zb25nLTEwMC1t/aWxsaW9uLXZpZXdz/LmpwZz9yZXNpemU9/MTIwMCwxMjAwJnNz/bD0x",
      artist:"pooja hegde",
      added:false,
    }]
    const [songdata,setSongData]=useState(data);
    const handleClick=(changidx)=>{
    setSongData((prev)=>{
      return prev.map((item,index)=>{
        if(index===changidx){
          return{...item,added:!item.added}
        }
        return item;
      })
    })

    }
  return (
    
    <div>
      <Navbar data={songdata}/>
      <div className="px-20 flex gap-5 flex-wrap mt-20 ">
{songdata.map((item,index)=>(<Card key={index} values={item}  index={index} handleclick={handleClick}/>))}
      </div>
      
    </div>
  )
}

export default App