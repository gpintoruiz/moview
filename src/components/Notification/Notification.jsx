import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Notification() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='bi bi-bell ms-2 ms-2' variant="outline-secondary" onClick={handleShow} style={{border:'none', color:'white'}}></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Por implementar..</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Okey!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Notification;