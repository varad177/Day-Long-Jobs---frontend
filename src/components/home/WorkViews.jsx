import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "2rem",
  color: "#FC6A03",
  color: "black",
}));

const WorkDetailsText = styled(Typography)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "1.2rem",
  display: "flex",
  flexDirection: "column",
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "2rem",
}));

const WorkViews = ({ post }) => {
  return (
    <div>
      <Wrapper>
        {/* <WorkDetailsText>{post._id}</WorkDetailsText> */}
        <WorkDetailsText> Name : {post.workname}</WorkDetailsText>
        <WorkDetailsText> Days : {post.days}</WorkDetailsText>
        <WorkDetailsText> City : {post.city}</WorkDetailsText>
        <Countdown date={Date.now() + post.days * 24 * 60 * 60 * 1000} />

        <ButtonBox>
          <Link style={{ textDecoration: "none" }} to={`details/${post._id}`}>
            <Button variant="contained">See Details</Button>
          </Link>
        </ButtonBox>
      </Wrapper>
    </div>
  );
};

export default WorkViews;
