import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button } from "@mui/material";
import styled from "@emotion/styled";

import Addwork from "../home/Addwork";





const emails = ["username@gmail.com", "user02@gmail.com"];

const Nav = styled(AppBar)(({ theme }) => ({
  height: "50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#81c1ff",
}));

const AddWorkBtn = styled(Button)(({ theme }) => ({
  color: "white",
}));

const HeaderButton = styled(Box)(({theme})=>({
display :"flex",
gap :"10px",
padding :"20px",
}))

const Logo = styled(Box)(({ theme }) => ({
  height: "50px",
  width: "150px",
  color: "white",
  padding :"0.5rem 1rem",
  display : "flex",
  justifyContent :"center",
  alignItems :"center",
  fontSize :"1.1rem",
  color: "#003284",
  textShadow: "0.02em 0.02em 0 Brown, 0 0 0.5em violet",
  width :"10rem",


}));
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <Nav>
      <Logo>Long Day Jobs</Logo>

      <HeaderButton>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Your Work
        </Button>
        <Addwork open={open} setOpen={setOpen} onClose={handleClose} />

        <Link to={"/getprofile"}>
          <AddWorkBtn variant="outlined">get profile</AddWorkBtn>
        </Link>
     
      </HeaderButton>
    </Nav>
  );
};

export default Header;
