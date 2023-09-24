import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import data from './data.js'

function App() {
  const arrayData = data.map( item =>{
    return(
      <Card 
      key = {item.id}
      { ...item }
  />
  )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-list">
        { arrayData }
      </div>
    </>
  )
}

export default App
