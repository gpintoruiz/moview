import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Related.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';

function Related({ movieId }) {
  // Constantes de estilo
  const starSize = '2vw';

  // Constantes de la API
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '49149d975d5c0df0a79802f0a64ad893';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  // Declaracion de las variables de estado
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [groupSize, setGroupSize] = useState(5); // Valor inicial

  // Petición a la API
  const fetchMovies = async () => {
    if (movieId) {
      const {
        data: { results },
      } = await axios.get(`${API_URL}/movie/${movieId}/similar`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
          page: 1,
        },
      });

      setMovies(results);
    }
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
    window.addEventListener('resize', handleResize); // Agregar el evento resize al montar el componente
    return () => {
      window.removeEventListener('resize', handleResize); // Eliminar el evento resize al desmontar el componente
    };
  }, [movieId]);

  // Función para manejar el cambio de tamaño de viewport
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setGroupSize(3);
    } else {
      setGroupSize(5);
    }
  };

  const renderGenres = (genreIds) => {
    return genreIds
      .map((genreId) => genres[genreId])
      .filter((genre) => genre) // Filtrar los géneros que existen en la lista de géneros
      .join(', ');
  };

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const hasHalfStar = rating % 2 !== 0;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i className="bi bi-star-fill" key={`full-star-${i}`} style={{ color: 'yellow', marginRight: '5px', fontSize: starSize }}></i>);
    }

    if (hasHalfStar) {
      stars.push(<i className="bi bi-star-half" key="half-star" style={{ color: 'yellow', marginRight: '5px', fontSize: starSize }}></i>);
    }

    return stars;
  };

  // Código para el renderizado de los slides
  const renderSlides = () => {
    const groups = movies.reduce((acc, movie, index) => {
      const groupIndex = Math.floor(index / groupSize);
      if (!acc[groupIndex]) {
        acc[groupIndex] = [];
      }
      acc[groupIndex].push(movie);
      return acc;
    }, []);

    return groups.map((group, index) => (
      <Carousel.Item key={index}>
        <Row xs={3} md={5} lg={5} className="m-3 align align-items-center justify-content-center">
          {group.map((movie) => {
            if (movie.poster_path) {
              return (
                <Card key={movie.id} style={{ background: 'none' }}>
                  <Link to={`/detalle/${movie.id}`}>
                    <Card.Img src={`${URL_IMAGE}${movie.poster_path}`} />
                    <Card.ImgOverlay id="overlay">
                      <Card.Text className="text-white m-1 text">
                        {renderRatingStars(movie.vote_average)}
                        <h3>{movie.title}</h3>
                        <p>
                          <b>{movie.release_date}</b>
                        </p>
                        <p>
                          Generos: <b>{renderGenres(movie.genre_ids)}</b>
                        </p>
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Link>
                </Card>
              );
            }
            return null; // Si no hay imagen, retornar null para evitar el renderizado de la película sin imagen
          })}
        </Row>
      </Carousel.Item>
    ));
  };

  return (
    <Carousel
      indicators={false}
      fade
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

export default Related;