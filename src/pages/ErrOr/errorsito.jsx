import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Error404.css'; 

const Error404 = () => {
  return (
    <Container className="error-container">
       <div class="container">
        <img src="error.gif"/>
        <h1 id='Letras'>Parece que te encuentras un poco perdido</h1>
        <div  class="boton">
            <Button variant="primary" href="/">Regresar</Button>
        </div>
    </div>
    </Container>
  );
};

export default Error404;