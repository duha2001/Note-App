import { Avatar, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function UserMenu() {
  const {
    user: { displayName, photoURL, auth },
  } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleLogOut = () => {
    auth.signOut();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <>
      <Box sx={{ display: "flex" }} onClick={handleClick}>
        <Typography>{displayName}</Typography>
        <Avatar
          alt="avatar"
          src={photoURL}
          sx={{ width: 24, height: 24, marginLeft: "5px" }}
        />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
      >
        <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
      </Menu>
    </>
  );
}
