import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const data = await loginUser(credentials);
    setAccessToken(data.accessToken);
  };

  const refresh = async () => {
    try {
      const data = await refreshToken();
      setAccessToken(data.accessToken);
    } catch (err) {
      setAccessToken(null);
    }
};

return (
  <AuthContext.Provider value={{ accessToken, user, login, logout }}>
    {children}
  </AuthContext.Provider>
)};