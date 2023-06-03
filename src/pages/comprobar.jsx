import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const Comprobar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    // El usuario está autenticado, mostrar contenido privado
    return <h1>Welcome to the private area!</h1>;
  } else {
    // El usuario no está autenticado, mostrar mensaje de acceso denegado o redirigir
    return <h1>Access denied!</h1>;
  }
};

export default Comprobar;

