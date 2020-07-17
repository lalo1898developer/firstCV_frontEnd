import React, { createContext, useState, useEffect } from 'react';
import decode from 'jwt-decode';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {  
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  const loginUser = (token) => {
    localStorage.setItem('firstcv-app_token', token);
    const decoded = decode(token);
    setUser(decoded);
    setIsAuth(true);
  }

  const logoutUser = () => {
    localStorage.removeItem('firstcv-app_token');
    setUser({});
    setIsAuth(false);
  }

  useEffect(() => {
    const item = localStorage.getItem('firstcv-app_token')
    if (item) {
      const decoded = decode(item);
      setUser(decoded);
      setIsAuth(true);
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ isAuth, user, loginUser, logoutUser }}>
      { props.children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;