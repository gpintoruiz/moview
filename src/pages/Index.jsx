import React from 'react'
import '../Global.css'
import MainCarrusel from '../components/Carrusel/Carrusel'
import Theater from '../components/InTheater/InTheater'
import Trending from '../components/Trending/Trending'
// import StaticExample from '../components/Modal'

function Index() {
  return (
    <>
      <MainCarrusel />
      <h3 className='h1 text-white m-4'>En cines</h3> 
      <Theater />
      <h3 className='h1 text-white m-4'>En tendencia</h3> 
      <Trending />
    </>
  )
}

export default Index