import { createContext, useState } from "react";
import { login, signup, logout } from "../services/auth.api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      setLoading(true);

      const data = await login(username, password);

      setUser(data.user); 

      return data;
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (username, email, password) => {
    try {
      setLoading(true);

      const data = await signup(username, email, password);
      setUser(data.user);

      return data;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);

      const res = await logout();

      console.log(res);

      setUser(null);

    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handleLogin,
        handleSignup,
        handleLogout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
