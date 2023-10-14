import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Nav from "./Nav";
import WorkViews from "./WorkViews";
import { API } from "../../service/api";
import { Link } from "react-router-dom";
import Work from "../workView/Work";
import styled from "@emotion/styled";
import toast from "react-hot-toast";

const Poster = styled(Box)(({ theme }) => ({
  width: "80%",
  height: "30vh",
  background: "white",
  border: "2px solid black",
  borderRadius: "20px",
  margin: "2rem auto",
}));

const HomeWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#baddff",
  margin: 0,
  padding: "2rem",
  minHeight: "100vh",
}));

const Home = () => {
  const { account, setAccount } = useContext(DataContext);

  const { email } = account;

  return (
    <HomeWrapper>
      <Nav />
      {/* <Poster>
        <h1 style={{ marginTop: "3rem" }}>i m poster or crouser</h1>
      </Poster> */}
      <Work />

     
    </HomeWrapper>
  );
};

export default Home;
