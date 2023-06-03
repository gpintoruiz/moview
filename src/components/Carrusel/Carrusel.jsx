import React from 'react'
import './Carrusel.css'
import Carousel from 'react-bootstrap/Carousel';
import estrella from '../../img/estrella.png';
import clock from '../../img/duration-white.png'

function MainCarrusel() {
  return (
      <Carousel id="Carousel">
        {/* Creacion Del 1er "slide" del carrusel */}
        <Carousel.Item >
        {/* Imagen de fondo */}
        <img id="poster1"src="https://lumiere-a.akamaihd.net/v1/images/p_cruella_21672_ba40c762.jpeg?region=0%2C0%2C540%2C810" alt="Cruella"/>
          {/* El caption del carrusel que contiene todo el texto que se muestra en el slide */}
          <Carousel.Caption className="caption">
          <h2 id="titulo-poster1">Cruella</h2>
                  <div id="puntuacion-poster1"/>
                      <img id="pos1-estrella1" className="estrella" src={estrella} alt="Estrella"/>
                      <img id="pos1-estrella2" className="estrella" src={estrella} alt="Estrella"/>
                      <img id="pos1-estrella3" className="estrella" src={estrella} alt="Estrella"/>
                      <img id="pos1-estrella4" className="estrella" src={estrella} alt="Estrella"/>
                      <img id="pos1-estrella5" className="estrella" src={estrella} alt="Estrella"/>
                  <p id="generos-poster1">Genres: Adventure, Comedy, Crime</p>
                  <p id="duracion-poster1" className="duracion"><img src={clock} alt="clock"/> Duracion: 134 minutos </p>
                  <p id="sinopsis-poster1">Plot: A live-action prequel feature film following a young Cruella de Vil and how she was 'raised'.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Creacion Del 2do "slide" del carrusel */}
        <Carousel.Item>
          {/* Imagen de fondo */}
          <img  id="poster2" src="https://i.ebayimg.com/images/g/4gcAAOSwxPJhyxYq/s-l1600.jpg" alt="SpaceJam2"/>
          {/* El caption del carrusel que contiene todo el texto que se muestra en el slide */}
          <Carousel.Caption className="caption">
            <h2 id="titulo-poster2">Space Jam 2</h2>
            <img id="pos2-estrella1" className="estrella" src={estrella} alt="Estrella"/>
            <img id="pos2-estrella2" className="estrella" src={estrella} alt="Estrella"/>
            <img id="pos2-estrella3" className="estrella" src={estrella} alt="Estrella"/>
            <img id="pos2-estrella4" className="estrella" src={estrella} alt="Estrella"/>
            <img id="pos2-estrella5" className="estrella" src={estrella} alt="Estrella"/>
            <p id="generos-poster2">Genres: Short, Comedy, Sport</p>
            <p id="duracion-poster2" className="duracion"><img src={clock} alt="clock"/> Duracion: 115 minutos </p>
            <p id="sinopsis-poster2">Plot: La superestrella del baloncesto LeBron James se une a la banda de los Looney Tunes para derrotar al Goon Squad y salvar a su hijo.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Creacion Del 3er "slide" del carrusel */}
        <Carousel.Item>
        {/* Imagen de fondo del Slide */}
        <img id="poster3" src="https://palomaynacho.com/wp-content/uploads/2023/04/guardianes-de-la-galaxia-vol-3-poster-2-imax.jpg" alt="SpaceJam2"/>
          {/* El caption del carrusel que contiene todo el texto que se muestra en el slide */}
          <Carousel.Caption className="caption">
            <h2 id="titulo-poster3">Guardianes de la galaxia vol 3</h2>
            <img id="pos3-estrella1" className="estrella" src={estrella} alt="Estrella"/>
            <img id="pos3-estrella2" className="estrella" src={estrella} alt="Estrella"/>
            <img id="pos3-estrella3" className="estrella" src={estrella} alt="Estrella"/>
            <img id="pos3-estrella4" className="estrella" src={estrella} alt="Estrella"/>
            <img id="pos3-estrella5" className="estrella" src={estrella} alt="Estrella"/>
            <p id="generos-poster3">Genres: Adventure, Sci-fi, Action, Superheroes, Fantasy</p>
            <p id="duracion-poster3" className="duracion"><img src={clock} alt="clock"/> Duracion: 144 minutos</p>
            <p id="sinopsis-poster3">Plot: Los Guardianes de la Galaxia se están adaptando a la vida en Knowhere cuando partes del pasado de Rocket resurgen. 
            Para protegerlo, Peter Quill debe liderar a los Guardianes en una peligrosa misión que podría conducir a la disolución del equipo actual.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      /* Nota, El carrusel tiene tantos ids diferentes, porque se espera que al implementar la base de 
      datos y el backend cosas como el titulo, la puntuacion (cantidad de estrellas), los generos, la 
      duracion y la sinopsis de cada pelicula se actualize automaticamente */
  );
}

export default MainCarrusel;