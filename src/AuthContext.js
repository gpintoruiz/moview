import React, { createContext, useState, useEffect } from 'react';
import loginService from './services/login';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';


export const AuthContext = createContext();

export const AuthProvider = ({ children}) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate= useNavigate();

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setIsLoggedIn(true);
      loginService.setToken(user.token);

      // Para verificar si el token ha expirado
      const tokenExpiration = jwtDecode(user.token).exp;
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (tokenExpiration < currentTimestamp) {
        logout();
        navigate('/');
      }

    }
  }, [navigate]);

  const login = async (email, password) => {
    try {
      const user = await loginService.login({ email, password });

      window.localStorage.setItem('loggedAppUser', JSON.stringify(user));
      setUser(user);
      setIsLoggedIn(true);
      loginService.setToken(user.token);

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    window.localStorage.removeItem('loggedAppUser');
    loginService.setToken(null);
  };

  const authContextValue = {
    user,
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
