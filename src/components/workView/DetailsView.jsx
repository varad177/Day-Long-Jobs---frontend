import React, { useContext, useEffect, useState } from "react";
import { API } from "../../service/api";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { Typography, Box, Button } from "@mui/material";
import { DataContext } from "../../context/DataProvider";
import toast from "react-hot-toast";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

// import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Wrapper = styled(Box)(({ theme }) => ({
  padding: "2rem",
  marginTop: "3rem",
  height: "95vh",
  backgroundColor: "#baddff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
}));

const Btns = styled(Box)(({theme})=>({

  display :"flex",
  padding :"1rem",
  gap:"1rem",
}))

const WorkDetails = styled(Typography)(({}) => ({
  fontSize: "1.5rem",
}));

const DetailsView = () => {
  const { account, setAccount } = useContext(DataContext);

  const [post, setPost] = useState("");
  console.log("the post is ", post);

  console.log("the mob no is ", post.mobileno);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchdata = async () => {
      let response = await API.getpostbyid(id);

      //   console.log("the post res is ", response);
      if (response.isSuccess) {
        toast.success("work details");
        setPost(response.data);
      }
    };
    fetchdata();
  }, []);

  const navigate = useNavigate();

  const DeletePost = async () => {
    let response = API.deletebyid(id);
    if (response.isSuccess) {
      navigate("/login");
    }
  };

  return (
    <div>
      <Wrapper>
        {/* <Typography>{post._id}</Typography> */}
        <WorkDetails>Name Of Work : {post.workname}</WorkDetails>
        <WorkDetails>Description : {post.desc}</WorkDetails>
        <WorkDetails>Noo of workers : {post.worker}</WorkDetails>
        <WorkDetails>No of Days : {post.days}</WorkDetails>
        <WorkDetails>City : {post.city}</WorkDetails>

        <Btns>
          <Link
            target="_blank"
            to={`https://maps.google.com/?q=${post.latitude},${post.longitude}`}
          >
            <FaMapMarkerAlt style={{fontSize :"2.5rem" , color :"red" , fontWeight:"bolder"}} />
          </Link>

          <Link
            target="_blank"
            to={`https://api.whatsapp.com/send?phone=91${post.mobileno}&text=hii`}
          >
            <AiOutlineWhatsApp style={{fontSize :"2.5rem" , color :"#1ea91e" , fontWeight:"bolder"}} />
          </Link>
        </Btns>

        {account.email === post.email && (
          <Link to={"/"}>
            <Button onClick={() => DeletePost()}> delete</Button>
          </Link>
        )}

     
      </Wrapper>
    </div>
  );
};

export default DetailsView;
