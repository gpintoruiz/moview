import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icono from '../../img/icon.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login'
import Notification from '../Notification/Notification'
import Buscador from '../Buscador/Buscador';

function NavHeader() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      {/* Codigo para que el Navbar se colapse luego de superar un tamaño especifico */}
      <Container fluid>
        <Link to="/">
          {/* Icono del sitio web */}
          <img
            className="m-3 bg-transparent"
            id="icono"
            src={icono}
            alt="icono"
            style={{ width: '120px' }}
          ></img>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Codigo del nav que contiene el boton de home, help, notificaciones y el de Login */}
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/* Codigo del formulario usado para buscar una pelicula especifica */}
            <Buscador/>
            <Link to="/"  className="me-2 ms-2 text-center"><Button variant="outline-secondary"  style={{ border: 'none', color: 'white' }}>Home</Button></Link>
            <Link to="/help" className="me-2 ms-2 text-center"><Button variant="outline-secondary"   style={{ border: 'none', color: 'white' }}>Help</Button></Link>
            {/* Mostrar Logout en lugar de Login cuando el usuario está autenticado */}
            {isLoggedIn ? (<Button variant="outline-secondary" className="me-2 ms-2 text-center" style={{ border: 'none', color: 'white' }} onClick={handleLogout}>Logout</Button>) 
            
            : 

            (<Login/>)}
            <Notification/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
