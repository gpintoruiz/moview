import './Carrusel.css';
import Carousel from 'react-bootstrap/Carousel';
// import estrella from '../../img/estrella.png';
// import clock from '../../img/duration-white.png';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


function MainCarrusel() {
  // Constantes de estilo
  const starSize = '2rem';

  // Constantes de la API
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '49149d975d5c0df0a79802f0a64ad893';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  // Declaracion de las variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [movie, setMovie] = useState({ titel: 'Loading Movies' });

  // Petición a la API
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? 'search' : 'discover';
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
        language: 'en-US',
        page: 1,
      },
    });

    setMovies(results);
    setMovie(results[0]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderSlides = () => {
    return movies.map((movie) => (
      <Carousel.Item key={movie.id}>
        <Row>
          <Card style={{ background: 'none', width:'100%' }} >
            <Card.Img
              src={`${URL_IMAGE}${movie.poster_path}`}
              alt="Card image"
            />
            <Card.ImgOverlay id="overlay">
              <Card.Text className="text-white">
                {[1, 2, 3, 4, 5].map((index) => (
                  <img
                    className="mb-3 m-1 bi bi-star-fill"
                    style={{ width: starSize, color: 'yellow' }}
                    key={index}
                  />
                ))}
                <h3>
                  <b>{movie.title}</b>
                </h3>
                <p>
                  <b>{movie.release_date}</b>
                </p>
                <p>
                  <b>{movie.genre_ids}</b>
                </p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
      </Carousel.Item>
    ));
  };

  return (
    <Carousel
      indicators={false}
      prevIcon={
        <span
          className="bi bi-caret-left-fill carousel-control-prev"
          style={{
            color: 'white',
            background: 'none',
            border: 'none',
            fontSize: '4vw',
          }}
        />
      }
      nextIcon={
        <span
          className="bi bi-caret-right-fill carousel-control-next"
          style={{
            color: 'white',
            background: 'none',
            border: 'none',
            fontSize: '4vw',
          }}
        />
      }
    >
      {renderSlides()}
    </Carousel>
  );
}

export default MainCarrusel;
