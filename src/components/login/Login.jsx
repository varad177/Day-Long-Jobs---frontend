import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { API } from "../../service/api";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { gender } from "../../constants/constants";
import toast from "react-hot-toast";

const Image = styled("img")({
  width: 100,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const InnerWrapper = styled(Box)(({ theme }) => ({
  width: "60%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "5px 2px 5px 2px rgb(0 0 0/ 0.6)",
  "@media(max-width:900px)": {
    width: "95%",
  },
}));

const Fullname = styled(TextField)(({ theme }) => ({
  width: "80%",
  margin: "1rem",
}));

const Gender = styled(TextField)(({ theme }) => ({
  margin: "1rem",
}));

const MobileNO = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "80%",
}));

const EmailAndPassword = styled(TextField)(({ theme }) => ({
  margin: "1rem",
  width: "80%",
}));

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
  margin: 1rem;
  width: 80%;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  width: 80%;
  margin: 1rem;
`;

const ForgotPassword = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "bold",
  color: "red",
  display: "flex",
}));

// const SignInitialValue = {
//   fullname: '',
//   mobileno: '',
//   gender: value,
//   email: '',
//   password: ''
// }

const Login = ({ isUserAuthenticated }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [marathi, setMarathi] = useState(false);

  const setlang = () => {
    if (marathi) {
      setMarathi(false);
    }
    if (!marathi) {
      setMarathi(true);
    }
  };
  const [showLogin, setShowLogin] = useState("login");

  const SignInitialValue = {
    fullname: "",
    mobileno: "",
    gender: "",
    email: "",
    password: "",
  };

  const loginInitialValue = {
    email: "",
    password: "",
  };

  //storing the signup data
  const [signup, setSignup] = useState(SignInitialValue);

  //storing the login data
  const [login, setLogin] = useState(loginInitialValue);

  const signupvalue = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginValues = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  //signup btn call
  const signupUser = async () => {
    let response = await API.userSignup(signup);

    if (response.isSuccess) {
      setSignup(SignInitialValue);
      setShowLogin("login");
      toast.success("Login Successfully");
      setError("");
    } else {
      console.log("something went wrong please try letter");
      console.log(error);
    }
  };

  const { account, setAccount } = useContext(DataContext);

  //login byn call

  const loginupUser = async () => {
    const response = await API.userLogin(login);
    if (response.isSuccess) {
      console.log(response);
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      setError("");
      isUserAuthenticated(true);
      setAccount({
        fullname: response.data.fullname,
        gender: response.data.gender,
        email: response.data.email,
      });

      toast.success("Login Successfully");

      navigate("/");
    } else {
      toast.error("please login/ sign-up with correct credentials");
    }
  };

  return (
    <Wrapper>
      {showLogin === "login" ? (
        <InnerWrapper>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwPNBcI_GZBug4wbPNcAUZErzL-kdA0PQ9jcLUkhEbM-Iozu_uuehmcZYkQA8e7zQUJk&usqp=CAU"
            alt=""
          />
          <h1>{marathi ? "लॉगिन करा" : "login"}</h1>

          <EmailAndPassword
            onChange={(e) => loginValues(e)}
            name="email"
            id="standard-basic"
            label="email"
            variant="standard"
          />
          <EmailAndPassword
            onChange={(e) => loginValues(e)}
            name="password"
            id="standard-basic"
            label="password"
            variant="standard"
          />
          <ForgotPassword>
            <Link to={"/reset"}>forgot password</Link>
          </ForgotPassword>

          <LoginButton variant="contained" onClick={() => loginupUser()}>
            Login
          </LoginButton>
          <Typography>OR</Typography>
          <SignupButton onClick={() => setShowLogin("signup")}>
            Don't have a Acoount
          </SignupButton>
          <br />
          <SignupButton onClick={() => setlang()}>
            {marathi ? "English" : "मराठी"}
          </SignupButton>
        </InnerWrapper>
      ) : (
        <InnerWrapper>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwPNBcI_GZBug4wbPNcAUZErzL-kdA0PQ9jcLUkhEbM-Iozu_uuehmcZYkQA8e7zQUJk&usqp=CAU"
            alt=""
          />

          <Fullname
            onChange={(e) => signupvalue(e)}
            name="fullname"
            id="standard-basic"
            label="fullname"
            variant="standard"
          />

          <MobileNO
            onChange={(e) => signupvalue(e)}
            name="mobileno"
            className="input"
            id="standard-basic"
            label="Mobile Number"
            variant="standard"
          />

          <Gender
            select
            label="gender"
            defaultValue="EUR"
            onChange={(e) => signupvalue(e)}
            helperText="Please select gender "
            name="gender"
          >
            {gender.map((gender) => (
              <MenuItem key={gender.name} value={gender.name}>
                {gender.name}
              </MenuItem>
            ))}
          </Gender>

          <EmailAndPassword
            onChange={(e) => signupvalue(e)}
            name="email"
            id="standard-basic"
            label="email"
            variant="standard"
          />
          <EmailAndPassword
            onChange={(e) => signupvalue(e)}
            name="password"
            id="standard-basic"
            label="password"
            variant="standard"
          />

          <LoginButton onClick={() => signupUser()} variant="contained">
            sign up
          </LoginButton>
          <Typography>OR</Typography>
          <SignupButton onClick={() => setShowLogin("login")}>
            Already have a account
          </SignupButton>
        </InnerWrapper>
      )}
      
    </Wrapper>
  );
};

export default Login;
