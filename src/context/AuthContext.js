import React, { createContext, useState, useEffect } from 'react';
import { fakeUser } from '../utils/fakeData';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(fakeUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // FE độc lập: luôn coi như đã "đăng nhập" với fakeUser
    setUser(fakeUser);
  }, []);

  const register = async (name, email, password) => {
    setLoading(true);
    setError(null);
    // Giả lập đăng ký: tạo user từ fakeUser + override tên/email
    const newUser = { ...fakeUser, name: name || fakeUser.name, email: email || fakeUser.email };
    setUser(newUser);
    setLoading(false);
    return true;
  };

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    // Giả lập đăng nhập: nhận bất kỳ email/password và set fakeUser
    const newUser = { ...fakeUser, email: email || fakeUser.email };
    setUser(newUser);
    setLoading(false);
    return true;
  };

  const logout = () => {
    // Với FE độc lập, vẫn cho phép "đăng xuất" để ẩn các mục liên quan
    setUser(null);
  };

  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        setError,
        register,
        login,
        logout,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}; 