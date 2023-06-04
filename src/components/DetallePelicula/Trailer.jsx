import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Trailer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/*Imagen que gestiona cuando se muestra el modal */}
      <img id="DP-poster"src='https://image.tmdb.org/t/p/original/4SMqo8Me8aCT4KAVLeG9pk8VYiN.jpg' alt="Poster Pelicula" onClick={handleShow}/>

      {/* Codigo completo del Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body>
            <iframe
                src="https://www.youtube.com/embed/-Bwr6LB5Dqw?autoplay=1"
                style={{
                width:'100%',
                height: '75vh',
                }}
                allow="accelerometer; autoplay;clipboard-write; encrypted-media; gyroscope; 
                picture-in-picture; web-share" 
                allowfullscreen
            ></iframe>
        </Modal.Body>
        <Modal.Footer className='align-items-center justify-content-center'>
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