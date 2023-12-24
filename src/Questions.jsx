import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Leftsidebar from './components/Leftsidebar/Leftsidebar'
import HomeMainbar from './components/HomeMainbar/HomeMainbar'
import Rightsidebar from './components/Rightsidebar/Rightsidebar'
import "./App.css"


function Questions() {
  return (
    <>
      <Navbar />
      <div className='home-container-1 '>
        <Leftsidebar />
        <div className='home-container-2'>
          <HomeMainbar />
          <Rightsidebar />
        </div>
      </div>
    </>
  )
}

export default Questions
