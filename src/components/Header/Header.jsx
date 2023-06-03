import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icono from '../../img/icon.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Login from '../Login/Login'
import Notification from '../Notification/Notification'

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
            <Link to="/"><Button variant="outline-secondary" className="me-4" style={{ border: 'none', color: 'white' }}>Home</Button></Link>
            <Link to="/help"><Button variant="outline-secondary" className="me-4" style={{ border: 'none', color: 'white' }}>Help</Button></Link>
            <Notification/>
            {/* Mostrar Logout en lugar de Login cuando el usuario está autenticado */}
            {isLoggedIn ? (<Button variant="outline-secondary" className="me-4" style={{ border: 'none', color: 'white' }} onClick={handleLogout}>Logout</Button>) 
            
            : 

            (<Login/>)}
          </Nav>
          {/* Codigo del formulario usado para buscar una pelicula especifica */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              className="bi bi-search"
              variant="outline-secondary"
              style={{ border: 'none', color: 'white' }}
            ></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
