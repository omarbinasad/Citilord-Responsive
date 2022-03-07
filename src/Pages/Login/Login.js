import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
import GoogleLogo from "./google-logo.png";
import "./Login.css";
import useFirebase from "../../hooks/useFirebase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
}));

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  const classes = useStyles();
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-page-main">
      <div className="login-form-div">
        <h1 data-aos="fade-down">Log In</h1>
        <form data-aos="zoom-in" data-aos-duration="800" className="login-form">
          <div className="login-form-wraper">
            {/* <label for="email">Email</label>
          <input
            type="email"
            name="email"
            autocomplete="off"
            placeholder="email@example.com"
          /> */}
            <TextField
              className={clsx(
                classes.margin,
                classes.border,
                classes.textField
              )}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>
          <div className="login-form-wraper">
            {/* <label for="password">Password</label>
          <input type="password" name="password" /> */}
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>
          <button className="login-submit-btn" type="submit">
            Log In
          </button>
          <h3 className="or-text">
            ----------- <span>Or</span> ----------
          </h3>
        </form>
        <div>
          {/* google sign in btn */}
          <button onClick={signInUsingGoogle} className="google-signin-btn">
            <img className="text-start" src={GoogleLogo} alt="" />
            <span>Sign in with google</span>
          </button>
        </div>
      </div>

      <h5 className="mt-3">
        Don't have an account? <Link to="/user-register">Register</Link>
      </h5>
    </div>
  );
};

export default Login;
