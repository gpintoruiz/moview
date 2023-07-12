import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Trailer({id}) {
  const [show, setShow] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '49149d975d5c0df0a79802f0a64ad893';
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(`${API_URL}/movie/${id}`, {
        params: {
          api_key: API_KEY,
          append_to_response: 'videos',
        },
      });

      if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find((vid) => vid.name === 'Official Trailer');
        setTrailer(trailer ? trailer : data.videos.results[0]);
      }

      setMovie(data);
    };

    fetchMovie();
  }, []);

  if (!movie) {
    return null; // Puedes mostrar un mensaje de "Cargando" mientras se obtienen los datos de la película
  }

  return (
    <>
      {/* Imagen que gestiona cuando se muestra el modal */}
      <img
        id="DP-poster"
        src={`${URL_IMAGE}${movie.poster_path}`}
        alt="Poster Pelicula"
        onClick={handleShow}
      />

      {/* Codigo completo del Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body>
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
            style={{
              width: '100%',
              height: '75vh',
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer className="align-items-center justify-content-center">
          {/* Boton para cerrar el Modal (aunque tambien clickeando fuera se cierra) */}
          <Button variant="outline-dark" onClick={handleClose}>
            Visto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Trailer;
