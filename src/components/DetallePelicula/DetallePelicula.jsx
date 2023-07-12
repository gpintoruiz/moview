import './DetallePelicula.css';
import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import rottenT from '../../img/rottenTomatoes.png';
import Metta from '../../img/Metacritic.png';
import imdb from '../../img/IMDB.png';
import Related from '../../components/Related/Related';
import Trailer from '../../components/Trailer/Trailer';
import Reseña from '../../components/Reseña/Reseña';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function DetallePelicula() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const API_URL = 'https://api.themoviedb.org/3';
      const API_KEY = '49149d975d5c0df0a79802f0a64ad893';
      const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

      const response = await axios.get(`${API_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      });

      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <h1>Loading...</h1>; // Mensaje de "Cargando" mientras se obtienen los datos de la película
  }

  return (
    <>
      {/* Div que contiene toda la descripcion basica de la pelicula */}
      <div className='DP-container d-flex'>
        {/* Fila "principal" que divide el div en 2 columnas */}
        <Row className='d-flex align-items-center justify-content-center' style={{ margin: '0px' }}>
          {/* Columna del poster de la pelicula */}
          <Col xs={10} sm={4} lg={4} className='DP-poster d-flex align-items-center justify-content-center'>
            <Trailer id={movie.id}/>
          </Col>

          {/* Columna con la informacion de la pelicula */}
          <Col xs={11} sm={8} lg={8} className='DP-informacion d-flex flex-column'>
            {/* Fila que contiene titulo, clasificacion, publicacion, genero principal y duracion */}
            <Row className='d-flex justify-content-left' style={{ margin: '0px' }}>
              <Col xs={12} sm={12} lg={12} className='DP-informacion d-flex flex-column text-center'>
                <h2 style={{ marginTop: '5px' }}>
                  <b>{movie.title}</b> ({movie.release_date.slice(0, 4)})
                </h2>
                <p>
                  {movie.vote_average} - {movie.release_date} - {movie.runtime} min
                </p>
              </Col>
            </Row>

            {/* Fila que contiene las calificaciones segun RottenTomatoes, IMDB y Metacritics */}
            <Row className='d-flex ' style={{ margin: '0px' }}>
              <Col xs={4} sm={3.5} lg={3.5} className='DP-informacion d-flex flex-column text-center'>
                <img src={rottenT} style={{ width: '60px', alignSelf: 'center' }} alt='RottenTomatoes Icon' />
                <p>
                  Puntuacion de Rotten Tomatoes: <b>{movie.vote_average}%</b>
                </p>
              </Col>

              <Col xs={4} sm={3.5} lg={3.5} className='DP-informacion d-flex flex-column text-center'>
                <img src={Metta} style={{ width: '60px', alignSelf: 'center' }} alt='Mettacritics Icon' />
                <p>
                  Puntuacion de MetaCritics: <b>{movie.vote_average}%</b>
                </p>
              </Col>

              <Col xs={4} sm={3} lg={3} className='DP-informacion d-flex flex-column text-center'>
                <img src={imdb} style={{ height: '60px', alignSelf: 'center' }} alt='RottenTomatoes Icon' />
                <p>
                  Puntuacion de Imdb: <b>{movie.vote_average}/10</b>
                </p>
              </Col>
            </Row>

            {/* Fila que contiene una frase caracteristica sobre la pelicula */}
            <Row className='d-flex ' style={{ margin: '0px' }}>
              <Col xs={12} sm={12} lg={12} className='DP-informacion d-flex flex-column text-center'>
                <em>"{movie.tagline}"</em>
              </Col>
            </Row>

            {/* Fila que contiene la sinopsis de la pelicula */}
            <Row className='d-flex ' style={{ margin: '0px' }}>
              <Col xs={12} sm={11} lg={11} className='DP-informacion d-flex flex-column text-justify'>
                <h4>Sinopsis: </h4>
                <p style={{ textAlign: 'justify' }}>{movie.overview}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      {/* Div que contiene la llamada al componente que genera el carrusel de peliculas similares */}
      <div>
        <h2 style={{ margin: '8px', color: 'white' }}>Peliculas similares:</h2>
        <Related />
      </div>

      {/* Div que contiene el componente que genera las reseñas */}
      <div>
        {/* link que lleva a la pagina de reseñas Completas */}
        {/* No se alcanzo a Implementar esa pagina por lo que lleva a la pagina de error */}
        <Link style={{ textDecoration: 'none' }} to='*'>
          <h2 style={{ color: 'white', marginLeft: '10px' }}> Reseñas:</h2>
        </Link>

        {/* 1era fila que contiene 2 reseñas incompletas */}
        <Row className='d-flex ' style={{ margin: '0px' }}>
          <Col xs={12} sm={6} lg={6} className='DP-informacion d-flex flex-column mb-3'>
            <Reseña />
          </Col>
          <Col xs={12} sm={6} lg={6} className='DP-informacion d-flex flex-column mb-3'>
            <Reseña />
          </Col>
        </Row>

        {/* 2da fila que contiene 2 reseñas incompletas */}
        <Row className='d-flex' style={{ margin: '0px' }}>
          <Col xs={12} sm={6} lg={6} className='DP-informacion d-flex flex-column mb-3'>
            <Reseña />
          </Col>
          <Col xs={12} sm={6} lg={6} className='DP-informacion d-flex flex-column mb-3'>
            <Reseña />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DetallePelicula;
