import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Help() {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center text-white">Centro de Ayuda</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2 className="text-white">Necesitas más ayuda? Visita la comunidad de soporte oficial de Moview.</h2>
          <p className="text-white">
            Aquí puedes agregar el contenido relacionado con la comunidad de soporte de Moview.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2 className="text-white">¿Problemas para iniciar sesión en Moview? Obtén ayuda para iniciar sesión.</h2>
          <p className="text-white">
            Aquí puedes agregar el contenido relacionado con los problemas de inicio de sesión en Moview.
          </p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h2 className="text-white">Enviar solicitudes.</h2>
          <p className="text-white">
          Infórmenos sobre información de TV o películas faltante o incorrecta enviando una solicitud a través de nuestro formulario de correo electrónico.
          </p>
          <p className='text-white'>¿Nos falta una reseña? Revise nuestros Criterios de Tomatómetro para asegurarse de que la publicación y la crítica estén aprobadas antes de enviar una solicitud para agregar una revisión.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Help;

