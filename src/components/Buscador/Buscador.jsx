import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import './Buscador.css';
import { Link } from 'react-router-dom';

function Buscador() {
  // Constantes de la API
  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '49149d975d5c0df0a79802f0a64ad893';

  // Declaración de las variables de estado
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [clearSearch, setClearSearch] = useState(false); // Estado para limpiar la búsqueda

  // Función para buscar películas
  const searchMovies = async (query) => {
    const { data } = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: query,
      },
    });

    setMovies(data.results);
  };

  useEffect(() => {
    searchMovies(searchKey);
  }, [searchKey]);

  useEffect(() => {
    // Limpiar la búsqueda cuando se selecciona una película
    if (selectedMovie) {
      setSearchKey('');
      setClearSearch(true);
    }
  }, [selectedMovie]);

  const handleMovieSelection = (selected) => {
    if (selected.length > 0) {
      setSelectedMovie(selected[0]);
    }
  };

  const renderMovieLink = (movie) => {
    return (
      <Link to={`/detalle/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
            style={{ height: '30px', marginRight: '10px' }}
          />
          {movie.title}
        </div>
      </Link>
    );
  };

  return (
    <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
      <Typeahead
        id="movie-search"
        labelKey="title"
        options={movies}
        placeholder="Search"
        className="me-2 ms-2 buscador"
        onChange={handleMovieSelection}
        onInputChange={(query) => setSearchKey(query)}
        selected={clearSearch ? [] : undefined}
        style={{ width: '40vw' }}
        renderMenuItemChildren={(option) => renderMovieLink(option)}
      />
      <Button
        className="bi bi-search"
        variant="outline-secondary"
        style={{ border: 'none', color: 'white' }}
        onClick={() => setSelectedMovie(null)}
      ></Button>
    </Form>
  );
}

export default Buscador;