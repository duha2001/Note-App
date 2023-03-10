import React, { createContext, useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const auth = getAuth();
  console.log("Auth:", auth);

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      console.log("From AuthProvider", { user });
      if (user?.uid) {
        setUser(user);
        localStorage.setItem("accessToken", user.accessToken);
        return;
      }

      // reset user info
      setUser({});
      localStorage.clear();
      navigate("/");
    });
    return () => {
      unsubcribed();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
