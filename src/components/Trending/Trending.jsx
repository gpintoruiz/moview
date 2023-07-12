import './Trending.css';
import Card from 'react-bootstrap/Card';
import star from '../../img/estrella.png'
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

function Trending() {
  const starSize = '2vw';

  // Constantes de la API
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '49149d975d5c0df0a79802f0a64ad893';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  // Declaracion de las variables de estado
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [movie, setMovie] = useState({ title: 'Loading Movies' });

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    setMovies(results);
    setMovie(results[0]);
  };

  const fetchGenres = async () => {
    const response = await axios.get(`${API_URL}/genre/movie/list`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    const genresMap = response.data.genres.reduce((acc, genre) => {
      acc[genre.id] = genre.name;
      return acc;
    }, {});
    setGenres(genresMap);
  };

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, []);

  const renderGenres = (genreIds) => {
    return genreIds
      .map((genreId) => genres[genreId])
      .filter((genre) => genre) // Filtrar los géneros que existen en la lista de géneros
      .join(', ');
  };

  const renderSlides = () => {
    return movies.map((movie) => (
      <div key={movie.id}>
        <Row className='g-4 align align-items-center justify-content-center'>
          <Link to={`/detalle/${movie.id}`}>
            <Card Classname='t-card' style={{ background: 'none', width: '30vw' }}>
              <Card.Img Classname='t-card-img'
                src={`${URL_IMAGE}${movie.poster_path}`}
                alt="Card image"
              />
              <Card.ImgOverlay id="t-overlay" >
                <Card.Text className="text-white t-text">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <img
                      src={star}
                      className=" star mb-3 bi bi-star-fill"
                      style={{ width: starSize, color: 'yellow' }}
                      key={index}
                      alt='estrella'
                    />
                  ))}
                  <h3>
                    <b>{movie.title}</b>
                  </h3>
                  <p>
                    <b>{movie.release_date}</b>
                  </p>
                  <p>
                    <b>Generos: {renderGenres(movie.genre_ids)}</b>
                  </p>
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Link>
        </Row>
      </div>
    ));
  };

  return (
    <Carousel
      showStatus={false} // Desactiva la visualización del estado
      showIndicators={false} // Desactiva la visualización de los indicadores
      showThumbs={false} // Desactiva la visualización de las miniaturas
      swipeable // Permite deslizar en dispositivos táctiles
      infiniteLoop // Hace que el carrusel sea infinito
      centerMode // Centra la imagen activa
      centerSlidePercentage={33.34} // Porcentaje de la imagen activa en el centro
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

export default Trending;
