import React from 'react';
import {Row, Col} from 'react-bootstrap'
import './Reseña.css'
import { Link, useNavigate } from 'react-router-dom';

function Reseña() {
    return (
        <div style={{border:'solid 2px gray', borderRadius:'10px', backgroundColor:'white', overflow:'hidden'}}>
            {/* Fila del nombre del autor de la reseña */}
            <Row className='d-flex align-items-center' style={{margin:'0px', backgroundColor:'white'}}>
                <Col xs={12} sm={12} lg={12} className='d-flex align-items-center'>
                <h3 style={{color:'black'}}>Autor: Pepito Perez</h3>
                </Col>
            </Row>

            {/* Fila que contiene el titulo, el 1er parrafo de la reseña y el enlace a la pagina de reseñas completas */}
            <Row className='d-flex align-items-center' style={{margin:'0px', color:'black'}}>
            <Col xs={12} sm={12} lg={12} className='d-flex text-center'>
                <b><h4>Shut Down Your Brain (Again) and Start Laughing With this Funny Franchise</h4></b>
                </Col>

                <Col xs={12} sm={12} lg={12} className='d-flex text-justify'>
                <p>
                    The unemployed Cindy Campbell (Anna Farris) is hired to work in a cursed house as 
                    caretaker of an old lady and meets the ghost of a boy. Meanwhile, the teenager son 
                    Robbie and the young daughter Rachel of his next door neighbor and crane operator Tom 
                    Ryan (Craig Bierko) are spending the weekend with their loser father. Cindy and Tom 
                    meet and fall in love for each other, but when Giant Tripods invade Earth, Tom escapes 
                    with Robbie and Rachel; Cindy travels to a village, trying to find the answer to a 
                    riddle to save the world; and the president of USA organizes the defense of the planet 
                    in UN under his intelligence and leadership. <br /> <br /> 
                    
                    {/* Como la pagina de reseñas completas no ha sido implementada, lleva a la pagina de error */}
                    <Link to="*"><p>leer La Reseña completa aqui!</p></Link>
                </p>
                </Col>

                <Col xs={12} sm={12} lg={12} className='d-flex text-center'>
                <b><p> Publicado el: 4/6/2023</p></b>
                </Col>            
            </Row>
        </div>
    );
  }
  
  export default Reseña;