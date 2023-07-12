import { Form, Button, InputGroup, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import './registrarse.css'

function Registro() {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [password_2, setPassword_2] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const [message, setMessage] = useState('');

    const handleResetFields = () => {
      if (password === password_2 && password !== '') {
        setEmail('');
        setPassword('');
        setPassword_2('');
        alert('Registro Exitoso!');
        setMessage('');
      } else {
        setMessage(<p className="text-danger p-2">Invalid email or password.</p>);
      }
    };

  return (
    <>
      <Card id='Registro' className='mb-4 mt-4 bg-light p-5 d-flex flex-column align-items-center' style={{ borderRadius: '1rem', width:'40vw', margin:'auto'}}>
      <h2 className="fw-bold mb-2 text-uppercase">Registro</h2>
      <p className="text-black-50 mb-5">Please enter your email and password!</p>
      <Form className='bg-light d-flex flex-column align-items-center'>
          {/* Este form group es el campo del Email */}

          <Form.Group className='mb-4 mx-5 w-100'>
            <Form.Label className='text-black'>Email address</Form.Label>
            <Form.Control type='email' size='lg' placeholder='Email' value={email} name='email'
            onChange={({target}) => setEmail(target.value)}/>
          </Form.Group>

          {/* Este form group es el campo del password */}

          <Form.Group className='mb-4 mx-5 w-100'>
            <Form.Label className='text-black'>Password</Form.Label>

            {/* Este InputGroup se encarga del password y de la funcionalidad del ojito */}

            <InputGroup className="mb-3">
              <Form.Control required type={showPwd ? 'text' : 'password' } size='lg' placeholder='Password' value={password} name='password' onChange={({target}) => setPassword(target.value)}/>
              {showPwd ? <Button onClick={() => setShowPwd(!showPwd)} className='bi bi-eye-fill bg-white' style={{borderLeft:'transparent', borderColor:'#CED4DA', color:'black'}}></Button> 
              : <Button className='bi bi-eye-slash-fill bg-white' onClick={() => setShowPwd(!showPwd)} style={{borderLeft:'transparent',borderColor:'#CED4DA', color:'black'}}></Button>}
            </InputGroup>

            <Form.Label className='text-black'>Confirm your password</Form.Label>
              
            {/* Este InputGroup se encarga del password y de la funcionalidad del ojito */}
              
            <InputGroup className="mb-3">
              <Form.Control required type={showPwd ? 'text' : 'password' } size='lg' placeholder='Confirm Password' value={password_2} name='password-2' onChange={({target}) => setPassword_2(target.value)}/>
              {showPwd ? <Button onClick={() => setShowPwd(!showPwd)} className='bi bi-eye-fill bg-white' style={{borderLeft:'transparent', borderColor:'#CED4DA', color:'black'}}></Button> 
              : <Button className='bi bi-eye-slash-fill bg-white' onClick={() => setShowPwd(!showPwd)} style={{borderLeft:'transparent',borderColor:'#CED4DA', color:'black'}}></Button>}
            </InputGroup>
          </Form.Group>
          <Button variant='outline-dark' className='mx-2 px-5' size='lg' onClick={handleResetFields}>
            Registro
          </Button>
          <p>{message}</p>
      </Form>
      </Card>
    </>
  );
}

export default Registro;