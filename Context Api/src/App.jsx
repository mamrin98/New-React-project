import React from 'react'
import { Link, Routes } from 'react-router'
import Home from './Components/Home'
import { Route } from 'react-router'
import User from './Components/User'
import About from './Components/About'

const App = () => {
  return (
    <div>
      <nav className='text-l font-semibold flex justify-center mt-10 bg-gray-100 gap-10  p-4'>
        <Link  to="/">Home</Link>
         <Link  to="/user">User</Link>
          <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App