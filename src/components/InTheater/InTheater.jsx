import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './InTheater.css'
import Card from 'react-bootstrap/Card';
import star from '../../img/estrella.png'
import Row from 'react-bootstrap/Row';

function InTheater() {

    // Constantes de estilo

    const starSize = '2vw';

    //Constantes de la API

    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY='49149d975d5c0df0a79802f0a64ad893'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    // Declaracion de las variables de estado

    const [movies,setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [movie,setMovie] = useState({titel:"Loading Movies"});

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


    //Código para el renderizado de 4 slides con 5 peliculas

    const renderSlides = () => {
      const groupSize = 5;
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
            {group.map((movie) => (
              <Card key={movie.id} style={{background:'none'}}>
                <Card.Img src={`${URL_IMAGE}${movie.poster_path}`}/>
                <Card.ImgOverlay id="overlay">
                  <Card.Text className="text-white m-1 text">
                  {[1, 2, 3, 4, 5].map((index) => (<img src={star} className='star mb-3 bi bi-star-fill' style={{ width: starSize }} key={index}/>))}
                    <h3>{movie.title}</h3>
                    <p><b>{movie.release_date}</b></p>
                    <p>Generos: <b>{movie.genre_ids}</b> </p>
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            ))}
          </Row>
        </Carousel.Item>
      ));
    };

    return <Carousel indicators={false} fade prevIcon={<span className='bi bi-caret-left-fill carousel-control-prev' style={{color:'white', background:'none', border:'none', fontSize:'4vw'}}/>} nextIcon={<span className='bi bi-caret-right-fill carousel-control-next' style={{color:'white', background:'none', border:'none', fontSize:'4vw'}}/>}> 

      {renderSlides()}

      </Carousel>;
}

export default InTheater;