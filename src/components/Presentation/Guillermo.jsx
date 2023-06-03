import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Guille from '../../img/Guillermo.jpg';
import {Col, Row, Card} from 'react-bootstrap';
import './Presentation.css'

function Guillermo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='m-1' variant="outline-light" onClick={handleShow}>
        Guillermo
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className='PresentationContainer'>
        <Row>
        <Col xs={10} sm={4} lg={4} style={{alignContent:'center'}}> 
        <div className='imgProgramador'>
          <img src={Guille} alt="imagen de Guillermo" />
        </div>
        </Col>
        <Col xs={12} sm={8} lg={8}> 
        <div className='datosProgramador'>
          <h3>Guillermo Pinto Ruiz</h3>
          <p><b>Titulo:</b> Apasionado de la programacion.</p>
          <p><b>Objetivo:</b> Combinar mis conocimientos técnicos con mi interés en la inteligencia artificial, 
            especialmente en Machine learning y deep learning.</p>
          <p><b>Hobbies:</b> Jugar Voleibol.</p>
          <p><b>Redes Sociales:</b></p>

          <Col className='list-unstyled text-center m-3' style={{marginTop:'0px'}}>
          <li className='col'>
            <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook m-2" style={{fontSize:'1.5rem', color:'black'}}></i></a >
            <a href="https://twitter.com/?lang=es" target="_blank"><i class="bi bi-twitter m-2" style={{fontSize:'1.5rem', color:'black'}}></i></a >
            <a href="https://www.instagram.com" target="_blank"><i class="bi bi-instagram m-2" style={{fontSize:'1.5rem', color:'black'}}></i></a >
            <a href="https://www.youtube.com" target="_blank"><i class="bi bi-youtube m-2" style={{fontSize:'1.5rem', color:'black'}}></i></a >
          </li>
          </Col>
        </div>
        </Col>
        </Row>

        <div className='Habilidades'>
        </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Guillermo;