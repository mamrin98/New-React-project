import React from 'react'
import { useState } from 'react'

const Context = (props) => {
  const[users,setUsers]=useState([]);
  const getUser=()=>{
    axios.get()
  }
  
  return (
    <div>{props.children}</div>
  )
}

export default Context