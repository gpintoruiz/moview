import { Form, Button, Modal, InputGroup } from 'react-bootstrap';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';


  function Login() {

    // Funcion del reCAPTCHA
    function onChange(value) {
      console.log("Captcha value:", value);
      setIsCaptchaVerified(true);
    }

    const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

    // Este código es para que el al presionar el Button se abra el modal 
    
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setIsCaptchaVerified(false);
      setIsButtonClicked(false);
    }
    const handleShow = () => setShow(true);

    // Con esto configuramos es estado para ver/ocultar la contraseña (funcion del ojito)

    const [showPwd, setShowPwd] = useState(false);

    // Lógica de el login

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    
    const handleLogin = async (event) => {
      event.preventDefault();
    
      if (!isCaptchaVerified) {
        console.log('Please verify the reCAPTCHA');
        return;
      }
    
      if (email.trim() === '' || password.trim() === '') {
        console.log('Please fill in all fields');
        return;
      }
    
      // Simulación de inicio de sesión exitoso
      const fakeEmail = 'example@example.com';
      const fakePassword = 'password';
    
      if (email === fakeEmail && password === fakePassword) {
        // Inicio de sesión exitoso
        console.log('Login successful');
        // Aquí puedes establecer una variable global o de estado para indicar que el usuario está logueado
        // Por ejemplo:
        // setUserLoggedIn(true);
        navigate('src\pages\comprobar.jsx'); // Cambia '/mycomponent' a la ruta de tu componente MyComponent
      } else {
        // Credenciales incorrectas
        console.log('Invalid email or password');
      }
    };
    
    
    
    

    // Este código me ayuda a mostrar unos mensajes cuando el botón es clickeado comprobando si el reCAPTCHA esté verificado y los campos estén llenos

    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const onClick=() => {
      setIsButtonClicked(true);}

    

    return (
      <>
      {/* Este código es para que el al presionar el Button se abra el modal */}
        <Button className='m-1 me-3 bi bi-person' variant="outline-secondary" onClick={handleShow} style={{border:'none', color:'white'}}></Button>
        {/* Este es el código de todo el modal que contiene el login */}
        <Modal show={show} onHide={handleClose} className='text-black'>
          <Modal.Body className='bg-light p-5 d-flex flex-column align-items-center' style={{ borderRadius: '1rem'}}>
            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
            <p className="text-black-50 mb-5">Please enter your login and password!</p>


          <Form className='bg-light d-flex flex-column align-items-center' onSubmit={handleLogin}>

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

            </Form.Group>

            <p className="small mb-3 pb-lg-2">
              <Link className="text-black-50 text-decoration-none" to="#!">Forgot password?</Link>
            </p>

          {/* Codigo del reCAPTCHA */}

            <div className='mb-3'>
              <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'  onChange={onChange}/>
            </div>

          {/* Este es el botón de login que ejecuta la función handeLogin que verifica si hizo antes el reCAPTCHA */}

            <Button type='submit' variant='outline-dark' className='mx-2 px-5' size='lg' onClick={onClick}>
              Login
            </Button>

            {isButtonClicked && !isCaptchaVerified && (<p className="text-danger p-2">Please verify the reCAPTCHA before proceeding.</p>)}
            {isButtonClicked && (email.trim() === '' || password.trim() === '') && (<p className="text-danger p-2">Please fill in all fields.</p>)}


        </Form>

          {/* En este div están los iconos para logearse por redes sociales, funcion que no implementaremos */}

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

          {/* En este div está la opción de que si el usuario no tiene cuenta, lo envie a una página donde la pueda crear */}

            <div>
              <p className="mb-0">Don't have an account? <Link to="#!" className="text-black-50 fw-bold text-decoration-none">Sign Up</Link></p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default Login;