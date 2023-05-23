import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import icono from '../../img/icon.jpg'
import notification from '../../img/campana-white.png'
import userIcon from '../../img/user-white.png'
import buscador from '../../img/lupa-white.png'

function NavScrollExample() {
  return (
    <Navbar bg="transparent" variant="dark" expand="lg">
      <Container fluid>
      <img id='icono' src={icono} alt='icono'></img>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
              <Nav.Link href="#Home" id='link1'>Home</Nav.Link>
              <Nav.Link href="#Help" id='link2'>Help</Nav.Link>
              <Nav.Link href="#notifications" id='link3'><img src={notification} alt="campana blanca" id="CampanaIcon"/></Nav.Link>
              <Nav.Link href="#User" id='link4'><img src={userIcon} alt="User Icon" id="userIcon"/></Nav.Link>
          </Nav>
          <Form className="d-flex">
              <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
              <Button variant="outline-secondary"><img src={buscador} alt="buscador" id="searcher"/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;