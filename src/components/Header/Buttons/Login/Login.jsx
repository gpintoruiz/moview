import { useState, React  }  from 'react';
import { Container, Row, Col, Card, Form, Button, Modal, InputGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

function Login() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showPwd, setShowPwd] = useState(false)

  return (
    <>
      <Button className='m-1 bi bi-person' variant="outline-secondary" onClick={handleShow} style={{border:'none', color:'white'}}></Button>
      <Modal show={show} onHide={handleClose} className='text-black'>
        <Modal.Body className='bg-light p-5 d-flex flex-column align-items-center' style={{ borderRadius: '1rem'}}>
          <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
          <p className="text-black-50 mb-5">Please enter your login and password!</p>

          <Form.Group className='mb-4 mx-5 w-100'>
            <Form.Label className='text-black'>Email address</Form.Label>
            <Form.Control type='email' size='lg' placeholder='Email'/>
          </Form.Group>

          <Form.Group className='mb-4 mx-5 w-100'>
            <Form.Label className='text-black'>Password</Form.Label>
            <InputGroup>
              <Form.Control type={showPwd ? 'text' : 'password' } size='lg' placeholder='Password' style={{borderRadius:'10px'}}/>
              <div id="ShowPasswordHandler" onClick={() => setShowPwd(!showPwd)}>
                {showPwd ? <Button className='bi bi-eye-fill' variant="lg outline-secondary" style={{border:'none',color:'black'}}></Button> 
                : <Button className='bi bi-eye-slash-fill' variant="lg outline-secondary" style={{border:'none',color:'black'}}></Button>}
              </div>
            </InputGroup>
          </Form.Group>

          <p className="small mb-3 pb-lg-2">
            <a className="text-black-50 text-decoration-none" href="#!">Forgot password?</a>
          </p>

          <Button variant='outline-dark' className='mx-2 px-5' size='lg'>
            Login
          </Button>

          <div className='d-flex flex-row mt-3 mb-5'>
            <Button variant='link' className='m-3' style={{ color: 'black' }}>
                <i class="bi bi-facebook"></i>
            </Button>

            <Button variant='link' className='m-3' style={{ color: 'black' }}>
                <i class="bi bi-twitter"></i>
            </Button>

            <Button variant='link' className='m-3' style={{ color: 'black' }}>
                <i class="bi bi-google"></i>
            </Button>
          </div>

          <div>
            <p className="mb-0">Don't have an account? <a href="#!" className="text-black-50 fw-bold text-decoration-none">Sign Up</a></p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;