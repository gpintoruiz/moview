import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Error404.css';
import ErrorGif from "../../img/error.mp4" 
import {Link} from 'react-router-dom'

const Error404 = () => {
  return (
    <Container className="e-Container">
       <div class="e-Container">
        <video autoPlay={'true'} loop={'true'} controls >
          <source src={ErrorGif} type="video/mp4"/>
        </video>
        <h1 id='e-Letras'>Parece que te encuentras un poco perdido</h1>
        <Button variant="outline-dark"><Link to='/' className='text-decoration-none'>Regresar</Link></Button>
      </div>
    </Container>
  );
};

export default Error404;