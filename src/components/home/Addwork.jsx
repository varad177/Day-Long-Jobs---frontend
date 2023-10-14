import React, { useContext, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { cities, num } from "../../constants/constants";
import { API } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGeolocated } from "react-geolocated";

const AddWorkTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  color: "black",
}));
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1.5rem",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem",
  paddingLeft: "6rem",
  paddingRight: "6rem",
}));

const workInitialDetails = {
  workname: "",
  days: "",
  city: "",
  email: "",
};

const Addwork = (props) => {
  const [userLocation, setUserLocation] = useState("");

  // ----

  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;
          // update the value of userlocation variable
          setUserLocation({ latitude, longitude });
        },
        // if there was an error getting the users location
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  // -----

  const [city, setCity] = useState("");
  const [lang, setLang] = useState("");
  const [lat, setLat] = useState("");
  console.log("fedut", lat, lang);
  const navigate = useNavigate();

  const { account, setAccount } = useContext(DataContext);

  const { onClose, setOpen, open } = props;
  const [work, setWork] = useState({
    workname: "",
    days: "",
    city: city,
    email: account.email,
    longitude: userLocation.longitude,
    latitude: userLocation.latitude,
    mobileno: null,
    desc : "",
    worker : null,
    date:null
  });

  const getDate = async(days)=>{
    const currdate = new Date();
    currdate.setDate(currdate.getDate() + days);
    console.log("dggg",currdate);
    return currdate

}

const nextDate  = getDate(days)

  console.log(work);

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const onvalueChange = (e) => {
    setWork({
      ...work,
      [e.target.name]: e.target.value,
      latitude: userLocation.latitude,
      longitude: userLocation.longitude,
      date:nextDate
    });
  };

  const submitWork = async () => {
    console.log(work);
    let response = await API.addwork(work);
    if (response.isSuccess) {
      // setWork(workInitialDetails);
      setOpen(false);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Wrapper>
        <AddWorkTextField
          onChange={(e) => onvalueChange(e)}
          name="workname"
          id="outlined-basic"
          label="The Name of word"
          variant="outlined"
          helperText="Please enter name of work"
        />

        <textarea
          onChange={(e) => onvalueChange(e)}
          name="desc"
          cols="30"
          rows="10"
          placeholder="Please Describe Youe Work"
        ></textarea>

        <AddWorkTextField
          select
          label="days"
          defaultValue="EUR"
          onChange={(e) => onvalueChange(e)}
          helperText="Please select no of day "
          name="days"
        >
          {num.map((option) => (
            <MenuItem key={option.num} value={option.num}>
              {option.num}
            </MenuItem>
          ))}
        </AddWorkTextField>
        <AddWorkTextField
          label="No of workers"
          onChange={(e) => onvalueChange(e)}
          helperText="Please Enter Number of worker "
          name="worker"
        />

        <AddWorkTextField
          select
          label="city"
          defaultValue="EUR"
          onChange={(e) => onvalueChange(e)}
          helperText="Please select city "
          name="city"
        >
          {cities.map((city) => (
            <MenuItem key={city.name} value={city.name}>
              {city.name}
            </MenuItem>
          ))}
        </AddWorkTextField>

        <TextField
          placeholder="mobile no"
          name="mobileno"
          onChange={(e) => onvalueChange(e)}
          helperText="Please enter the mobile no "
        />

        <Button variant="contained" onClick={() => submitWork()}>
          submit
        </Button>
      </Wrapper>
    </Dialog>
  );
};

export default Addwork;
