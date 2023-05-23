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
      <h2 id="inTheater">In Theater:</h2> 
      <Theater />
      <h2 id="Trending">Trending Movies:</h2> 
      <Trending />
    </>
  )
}

export default Index