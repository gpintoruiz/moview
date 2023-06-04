import  './DetallePelicula.css'
import React from 'react'
import {Col, Row} from 'react-bootstrap';
import rottenT from '../../img/rottenTomatoes.png'
import Metta from '../../img/Metacritic.png'
import imdb from '../../img/IMDB.png'
import Related from '../../components/Related/Related';
import Trailer from '../../components/Trailer/Trailer'
import Reseña from '../../components/Reseña/Reseña';
import { Link, useNavigate } from 'react-router-dom';

function detallePelicula() {
return (
    <>
    {/* Div que contiene toda la descripcion basica de la pelicula */}
    <div className='DP-container d-flex'>
        {/* Fila "principal" que divide el div en 2 columnas */}
        <Row className='d-flex align-items-center justify-content-center' style={{margin:'0px'}}>
            {/* Columna del poster de la pelicula */}
            <Col xs={10} sm={4} lg={4} className='DP-poster d-flex align-items-center justify-content-center'> 
                <Trailer />
            </Col>

            {/* Columna con la informacion de la pelicula */}
            <Col xs={11} sm={8} lg={8} className='DP-informacion d-flex flex-column'>
                {/* Fila que contiene titulo, clasificacion, publicacion, genero principal y duracion */}
                <Row className='d-flex justify-content-left' style={{margin:'0px'}}>
                    <Col xs={12} sm={12} lg={12} className='DP-informacion d-flex flex-column text-center'>
                        <h2 style={{marginTop:'5px'}}> <b>Scary movie 4</b> (2006) </h2>   
                        <p>PG-13 - 14/4/2006 (US) - comedia - 1h 29m </p>
                    </Col>      
                </Row>
                
                {/* Fila que contiene las calificaciones segun RottenTomatoes, IMDB y Metacritics */}
                <Row className='d-flex ' style={{margin:'0px'}}>
                    <Col xs={4} sm={3.5} lg={3.5} className='DP-informacion d-flex flex-column text-center'>  
                        <img src={rottenT} style={{width:'60px', alignSelf:'center'}} alt="RottenTomatoes Icon"/>
                        <p>Puntuacion de rotten Tomatoes: <b>34%</b> </p>
                    </Col> 

                    <Col xs={4} sm={3.5} lg={3.5} className='DP-informacion d-flex flex-column text-center'>
                        <img src={Metta} style={{width:'60px', alignSelf:'center'}} alt="Mettacritics Icon"/>
                        <p>Puntuacion de MetaCritics: <b>40%</b> </p>
                    </Col>  

                    <Col xs={4} sm={3} lg={3} className='DP-informacion d-flex flex-column text-center'>
                        <img src={imdb} style={{height:'60px', alignSelf:'center'}} alt="RottenTomatoes Icon"/>
                        <p>Puntuacion de Imdb: <b>5.1/10</b> </p>
                    </Col> 
                </Row>
                
                {/* Fila que contiene una frase caracteristica sobre la pelicula */}
                <Row className='d-flex ' style={{margin:'0px'}}>
                    <Col xs={12} sm={12} lg={12} className='DP-informacion d-flex flex-column text-center'>
                    <em>"El cuarto y último capítulo de la trilogía"</em>
                    </Col>
                </Row>

                {/* Fila que contiene la sinopsis de la pelicula */}
                <Row className='d-flex ' style={{margin:'0px'}}>
                    <Col xs={12} sm={11} lg={11} className='DP-informacion d-flex flex-column text-justify'>
                    <h4>Sinopsis: </h4>
                    <p style={{textAlign:'justify'}}>Una nueva entrega de la franquicia que parodia los últimos títulos del cine americano. 
                    Esta vez, la ingenua Cindy Campbell (Anna Faris) intenta hacer carrera en la atención 
                    sanitaria a domicilio, y encuentra trabajo con una horripilante anciana que vive en una 
                    horripilante casa embrujada por una presencia fantasmal. Si a esto le añades un vecino 
                    guapetón y la amenaza de unos alienígenas que quieren dominar la tierra... el pelo 
                    rubísimo de Cindy se erizará presa del miedo más electrizante. Nuestra valiente heroína 
                    vuelve a sumergirse en la acción más enloquecida en su intento de descifrar los extraños 
                    mensajes que le llegan del más allá. Pero eso no le impide seguir buscando el amor en los sitios 
                    más inusitados y de salvar el mundo de la destrucción masiva.</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>   

    {/* Div que contiene la llamada al componente que genera el carrusel de peliculas similares */}
    <div>
        <h2 style={{margin:'8px', color:'white'}}>Peliculas similares:</h2>
        <Related />
    </div>

    {/* Div que contiene el componente que genera las reseñas */}
    <div>
        {/* link que lleva a la pagina de reseñas Completas */}
        {/* No se alcanzo a Implementar esa pagina por lo que lleva a la pagina de error */}
        <Link style={{textDecoration:'none'}} to="*"><h2 style={{color:'white', marginLeft:'10px'}}> Reseñas:</h2></Link>
        
        {/* 1era fila que contiene 2 reseñas incompletas */}
        <Row className='d-flex ' style={{margin:'0px'}}>
            <Col xs={12} sm={6} lg={6} className='DP-informacion d-flex flex-column mb-3'>
                <Reseña />
            </Col>
            <Col xs={12} sm={6} lg={6} className='DP-informacion d-flex flex-column mb-3'>
                <Reseña />
            </Col>
        </Row>
        
        {/* 2da fila que contiene 2 reseñas incompletas */}
        <Row className='d-flex' style={{margin:'0px'}}>
            <Col xs={12} sm={6} lg={6} className='DP-informacion d-flex flex-column mb-3'>
                <Reseña />
            </Col>
            <Col xs={12} sm={6} lg={6} className='DP-informacion d-flex flex-column mb-3'>
                <Reseña />
            </Col>
        </Row>  
    </div>
    </>
    );
}

export default detallePelicula;