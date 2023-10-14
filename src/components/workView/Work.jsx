import React, { useEffect, useState } from "react";
import { API } from "../../service/api";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import WorkViews from "../home/WorkViews";
import styled from "@emotion/styled";
import toast from "react-hot-toast";

const WorkBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#81c1ff",
  margin: "1rem",
  marginTop: "2rem",
  borderRadius: "20px",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
}));
const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
 
}));

const Work = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      let response = await API.getallpost({ city: "" });

    
      console.log("the post res is ", response);
      if (response.isSuccess) {
        toast.success("loading the data");
        setPost(response.data);
      }
    };
    fetchdata();
  }, []);

  return (
    <Box>
      <Wrapper>
        {post && post.length > 0 ? (
          post.map((post) => (
            <WorkBox>
              <WorkViews post={post} />
            </WorkBox>
          ))
        ) : (
          <h1>no post to display </h1>
        )}
      </Wrapper>
    </Box>
  );
};

export default Work;
