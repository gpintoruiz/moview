import React, { createContext, useState, useEffect } from 'react';
import loginService from './services/login';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      setIsLoggedIn(true);
      loginService.setToken(user.token);
    }
  }, []);

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
