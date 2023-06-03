import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import icono from '../../img/icon.jpg'
import Login from './Buttons/Login/Login'
import Notification from './Buttons/Notification/Notification';
import { Link } from 'react-router-dom';

function NavHeader() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      {/* Codigo para que el Navbar se colapse luego de superar un tamaño especifico */}
      <Container fluid>
      <Link to='/'>
      {/* Icono del sitio web */}
        <img className='m-3 bg-transparent' id='icono' src={icono} alt='icono' style={{width:'120px'}}></img>
      </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* Codigo del nav que contiene el boton de home, help, notificaciones y el de Login */}
          <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
              <Button variant='outline-secondary' className='me-3' style={{border:'none'}} ><Link to='/' className='text-decoration-none' style={{color:'white'}}>Home</Link></Button>
              <Button variant='outline-secondary' className='me-3' style={{border:'none',color:'white'}}><Link to='/help' className='text-decoration-none' style={{color:'white'}}>Help</Link></Button>
              <Notification/>
              <Login/>
          </Nav>
          {/* Codigo del formulario usado para buscar una pelicula especifica */}
          <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              <Button className='bi bi-search' variant="outline-secondary" style={{border:'none',color:'white'}}></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;