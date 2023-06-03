import  './DetallePelicula.css'
import React from 'react'
import {Col, Row} from 'react-bootstrap';



function detallePelicula() {
    return (
        <Row className='d-flex align-items-center justify-content-center'>
            <Col xs={10} sm={4} lg={4} className='DP-poster d-flex align-items-center justify-content-center ml-2'> 
                <img id="DP-poster"src='https://image.tmdb.org/t/p/original/4SMqo8Me8aCT4KAVLeG9pk8VYiN.jpg' alt="Poster Pelicula" className='ml-3'/>
            </Col>
            
            <Col xs={12} sm={8} lg={8} className='DP-informacion p-5 d-flex flex-column text-justify-right'> 
            <h3 id='DP-titulo' >Scary Movie 4</h3>
            <p><b>Sinopsis: </b>Una nueva entrega de la franquicia que parodia los últimos títulos del cine de terror americano. 
            Esta vez Cindy Campbell y su amiga Brenda, hacen equipo con el guapo pero inepto Tom Ryan para salvar al mundo de una 
            violenta invasión extraterrestre.</p>
            <p><b>Rating:</b>  PG-13 (Language | Crude and Sexual Humor | Some Comic Violence).</p>
            <p><b>Genero:</b> Comedia.</p>
        <p style={{alignSelf:'center'}}><b>Redes sociales</b></p>
        </Col>
        </Row>
    );
  }

export default detallePelicula;