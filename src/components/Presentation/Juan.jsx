import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Row} from 'react-bootstrap';
import Roa from '../../img/Roa2.jpg';
import './Presentation.css'

function Juan() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Boton que gestiona cuando se muestra el modal */}
      <Button className='m-1' variant="outline-light" onClick={handleShow}>
        Juan
      </Button>

      {/* Codigo completo del Modal */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className='PresentationContainer'>
          {/* 1era Fila del Modal*/}
        <Row className='d-flex align-items-center justify-content-center'>
          {/* 1era Columna del Modal (Imagen de Juan) */}
          <Col xs={10} sm={4} lg={4} className='imgProgramador d-flex align-items-center justify-content-center' style={{marginright:'3px', marginBottom:'5px'}}> 
            <img src={Roa} alt="imagen de Juan" className='ml-3'/>
          </Col>
          {/* 2da Columna del Modal (Informacion Sobre Juan) */}
          <Col xs={12} sm={8} lg={8} className='datosProgramador p-4 d-flex flex-column'> 

            <h3>Juan Diego Roa Porras</h3>
            <p><b>Alias:</b> Incursionista del Backend.</p>
            <p><b>Objetivo:</b> Participar en la creación de nuevos programas en pro de solucionar problemas
            de la vida cotidiana que fueron modelados por medio de la programación.</p>
            <p><b>Habilidades:</b> Manejo basico de Phyton, Java, C++, desarrollo web y bases de datos.</p>
            <p><b>Hobbies:</b> Jugar Videojuegos y practicar Baloncesto.</p>
            <p style={{alignSelf:'center'}}><b>Redes sociales</b></p>

            <Col className='list-unstyled text-center m-3' style={{marginTop:'0px'}}>
            {/* Redes Sociales del estudiante (No hubo un consenso de quienes tenian cuales,
               por lo que los enlaces terminaron siendo por defecto) */}
            <li className='col'>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i class="bi bi-facebook m-2" style={{fontSize:'1.5rem', color:'black'}}></i></a >
              <a href="https://twitter.com/?lang=es" target="_blank" rel="noreferrer"><i class="bi bi-twitter m-2" style={{fontSize:'1.5rem', color:'black'}}></i></a >
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="bi bi-instagram m-2" style={{fontSize:'1.5rem', color:'black'}}></i></a >
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i class="bi bi-youtube m-2" style={{fontSize:'1.5rem', color:'black'}}></i></a >
            </li>
            </Col>
          </Col>
        </Row>
        </Modal.Body>
        <Modal.Footer className='align-items-center justify-content-center'>
          {/* Boton para cerrar el Modal (aunque tambien clickeando fuera se cierra) */}
          <Button variant="outline-dark" onClick={handleClose}>
            Listo!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Juan;