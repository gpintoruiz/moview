import React, { useContext } from 'react';

const comprobar = () => {
  const { state } = useContext(AuthContext);

  if (state.isAuthenticated) {
    // El usuario está autenticado, mostrar contenido privado
    return <h1>Welcome to the private area!</h1>;
  } else {
    // El usuario no está autenticado, mostrar mensaje de acceso denegado o redirigir
    return <h1>Access denied!</h1>;
  }
};

export default comprobar;
