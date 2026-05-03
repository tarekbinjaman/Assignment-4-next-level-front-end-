import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../services/authService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch user from backend
  const fetchUser = async () => {
    try {
      const data = await getMe();
      setUser(data);
    } catch (err) {
      console.log(err.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // run on app load
  useEffect(() => {
    const loadUser = async () => {
      await fetchUser();
    };
    loadUser();
  }, []);

  // setting up user data by setAuth
  const setAuth = (authUser) => {
    setUser(authUser);
  };

  // clearing user data
  const clearAuth = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, setAuth, clearAuth, fetchUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// hook
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
