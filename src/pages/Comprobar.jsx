import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Container, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Comprobar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    // El usuario está autenticado, mostrar contenido privado.
    return(
    <Container className='d-flex justify-content-center align-items-center' style={{flexDirection:'column'}}>
      <h1 className='text-white'>Bienvenido al area privada!</h1>
      <Link to='/' className='text-decoration-none m-2'><Button variant="outline-light">Regresar</Button></Link>
    </Container>
    );
  } else {
    // El usuario no está autenticado, mostrar mensaje de acceso denegado o redirigir
    return(
    <Container className='d-grid justify-content-center align-items-center'>
      <h1 className='text-white'>Acceso denegado! Inicia sesión primero</h1>
    </Container>
    );
  }
};

export default Comprobar;

