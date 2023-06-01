import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Login() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='m-1 bi bi-person' variant="outline-secondary" onClick={handleShow} style={{border:'none', color:'white'}}></Button>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:'black'}} className='justify-content-center'>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'black'}}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'black'}} className='justify-content-center'>
          <p className='mb-0'>Don't have an account? <Link className='text-white-50 fw-bold text-decoration-none'>Sign Up</Link> </p>
        </Modal.Footer>
      </Modal>
     
    </>
  );
}

export default Login;