import React from 'react'
import '../styles/Global.css'
import CarouselFadeExample from '../components/Carrusel'
import Theater from '../components/inTheater'
// import StaticExample from '../components/Modal'

function Index() {
  return (
    <>
      <CarouselFadeExample />
      <h2 id="inTheater">In Theater:</h2> 
      <Theater />
      <h2 id="Trending">Trending Movies:</h2> 
    
    </>
  )
}

export default Index