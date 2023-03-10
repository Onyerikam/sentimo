import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../utils/api/user";
import { Button, InputAdornment, TextField, Link } from "@mui/material";
import { ContactMailSharp, PasswordSharp } from "@mui/icons-material";
import { toast } from "react-toastify";

import loginImage from "../../assets/images/loginBanner.svg";
import logo from "../../assets/images/logo.svg";

import "./Login.css";


export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  var navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const res = await userLogin(username, password);
    if (res.response.status === 200 || res.response.status === 201) {
      localStorage.setItem("jwt", res.data.token);
      const name =
        (
          (res?.data?.firstName || "") +
          " " +
          (res?.data?.lastName || "")
        ).trim() || res?.data?.username;
      localStorage.setItem("name", name);
      // don't keep any toast for successful login!

      navigate("/");
    } else {
      toast.error("Incorrect Username or Password");
    }
  };

  const signUpButtonClick = (event) => {
    navigate("/register", { replace: true });
  };

  // Mobile: background IMG, Desktop show on left
  return (
    <div className="login-form-container">
      {/* Hidden in Mobile */}
      <div className="login-form-header">
        {/* <section className="login-form-image"></section> */}
        <img src={loginImage} alt="Welcome" style={{height: "100%", width: "100%", maxWidth: '60vw', maxHeight: '60vh'}} />
      </div>

      <div className="login-input-container">
        
        <div className="login-logo-header">
          <img src={logo} alt="" style={{maxHeight: '20vh', maxWidth: '20vw', minWidth: '100px', minHeight: '100px'}} />
          <div className="login-text-header heading large-login-text" style={{marginLeft: '15px'}}>
          Welcome Back<span className="login-dot">.</span>
        </div>
        </div>
        <div className="input-field-container medium-text">
        <div className="login-logo-header" style={{textDecoration: 'bold', alignItems: 'center', justifyContent: 'center', marginRight: '100px', fontSize: '24px'}}>Login to your account</div>
          <div>&nbsp;</div>
          <div className="password-field mh mv">
            <TextField
              label="Username"
              text="username"
              name="username"
              variant="outlined"
              autoComplete="false"
              onChange={(e) => setUsername(e.target.value.trim())}
              value={username}
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactMailSharp color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="password-field mh mv">
            <TextField
              label="Password"
              text="password"
              name="password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value.trim())}
              required
              fullWidth
              value={password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PasswordSharp color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div className="login-logo-header">
            <Button variant="contained" onClick={login} style={{alignItems: 'center', textAlign: 'center', justifyContent: 'center', justifyItems: 'center'}} sx={{
                    pl: 7,
                    pr: 7,
                    pt: 2,
                    pb: 2,
                    mt: 2,
                    mb: 2,
                    fontSize: "15px",
                    borderRadius: "30px",
              }}>
              LOGIN
            </Button>
          </div>
        </div>

        <div className="sign-up-button">
          <div className="sign-up-text" style={{fontSize: '20px'}}>Don't have an account? &nbsp;</div>
          <Button>
          <Link href="/register" style={{textDecoration: 'none', textAlign: 'center', marginRight: '20px'}}>
            Create one for free
          </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
