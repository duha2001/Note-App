import React from "react";
import { Button, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const auth = getAuth();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    console.log({ res });
  };
  // Kiểm tra nếu đã có uid trong localstorage thì sẽ navigation sang trang home
  if (user?.uid) {
    navigate("/");
    return;
  }
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Welcom to Note App
      </Typography>
      <Button variant="outlined" onClick={handleLoginWithGoogle}>
        Login with Google
      </Button>
    </>
  );
}
