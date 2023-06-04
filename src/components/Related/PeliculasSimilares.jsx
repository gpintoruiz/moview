import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import star from '../../img/estrella.png'
import './PeliculasSimilares.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

function PeliculasSimilares() {

    // Constantes de estilo

    const starSize = '2.4vw';

    //Constantes de la API

    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY='49149d975d5c0df0a79802f0a64ad893'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    // Declaracion de las variables de estado

    const [movies,setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [movie,setMovie] = useState({titel:"Loading Movies"});

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
          <Row xs={5} md={5} lg={5} className="m-2">
            {group.map((movie) => (
              <Card className="card" key={movie.id} style={{background:'none'}}>
                <Card.Img
                  className="PS-card-img"
                  src={`${URL_IMAGE}${movie.poster_path}`}
                  alt="Card image"
                />
                <Card.ImgOverlay id="PS-overlay">
                  <Card.Text className="text-white m-1">
                  {[1, 2, 3, 4, 5].map((index) => (<img src={star} alt="star" className='mb-3 m-1' style={{ width: starSize }} key={index}/>))}
                    <h3>
                      <b>{movie.title}</b>
                    </h3>
                    <p>
                      <b>2021</b>
                    </p>
                    <p>
                      <b>Genres: Drama, Comedy, Adventure</b>
                    </p>
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

export default PeliculasSimilares;