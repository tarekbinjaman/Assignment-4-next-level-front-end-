"use client" 
import { createContext, useContext, useEffect, useState } from "react";
import { getMe } from "../services/authService";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // tutor edit profile modal 
const [editTutorMOdal, setEditTutorModal] = useState(false);
  // fetch user from backend
  const fetchUser = async () => {
    setLoading(true);
    try {
      console.log("Fetch started")
      const res = await getMe();
      setUser(res.data);
      console.log("fetch success", res?.data)
      console.log("THis user from authcontext after setUser result", user)
      console.log("category from tutroprofile", res?.data?.tutorProfile?.categories)
      // console.log("user data from fetch user", res.data)
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

  // checking user
    useEffect(() => {
    console.log("User updated:", user);
  }, [user]);


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
      value={{ user, loading, setAuth, clearAuth, fetchUser, editTutorMOdal, setEditTutorModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// hook
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
