import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Buscador() {

  //Constantes de la API

  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY='49149d975d5c0df0a79802f0a64ad893'
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  // Declaracion de las variables de estado

  const [movies,setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [movie,setMovie] = useState({titel:"Loading Movies"});

  // Función para buscar películas

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey)
  }

  //Petición a la API

  const fetchMovies = async(searchKey) =>{
    const type = searchKey ? "search" : "discover"
    const {data:{results},
    } = await axios.get(`${API_URL}/${type}/movie` , {
        params : {
            api_key: API_KEY,
            query: searchKey,
        },
    });

    setMovies(results)
    setMovie(results[0])
  }

  useEffect(()=>{
      fetchMovies();
  },[])

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button
        className="bi bi-search"
        variant="outline-secondary"
        style={{ border: 'none', color: 'white' }}
      ></Button>
    </Form>
  )
}

export default Buscador