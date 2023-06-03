import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Error404.css';
import ErrorGif from "../../img/error.gif"
import {Link} from 'react-router-dom'

const Error404 = () => {
  return (
    <Container className="e-Container">
       <div class="e-Container">
        <img src={ErrorGif} alt="Gif de Error" />
        <h1 id='e-Letras'>Parece que te encuentras un poco perdido</h1>
        <Link to='/' className='text-decoration-none'><Button variant="outline-light">Regresar</Button></Link>
      </div>
    </Container>
  );
};

export default Error404;