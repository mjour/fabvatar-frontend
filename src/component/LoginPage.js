import {
  makeStyles,
  Box,
  Container,
  Typography,
  TextField,
  FormHelperText,
  Grid,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Hidden,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import React, { useState, useMemo } from "react";
import { Form, Formik } from "formik";
import * as yep from "yup";
import countryList from "react-select-country-list";
import { NavLink } from "react-router-dom";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { FiLock } from "react-icons/fi";
import { dataPostHandler } from "src/apiConfig/service";
import ButtonCircularProgress from "./ButtonCircularProgress";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const useStyles = makeStyles((theme) => ({
  FormInputField: {
    width: "100%",
    // borderRadius: "100px",
    // boxShadow: "0px 0px 11px #1b5e20",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    // background:
    // "#1b5e20",
  },

  heading: {
    marginBottom: "6px",
    "@media(max-width:960px)": {
      textAlign: "center",
    },
  },
  Gosign: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media(max-width:540px)": {
      marginTop: "-20px",
    },
  },
  Gosign1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkForgetBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    "& FormControlLabel, label": {
      color: "red",
    },
  },
  ForgetpassBox: {
    color: "#5c5858",
    textDecoration: "none",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    fontStyle: "normal",
    "& span": {
      fontSize: "14px",
      fontFamily: "'Inter', sans-serif",
    },
  },
  submitBTN: {
    // background:
    //   "linear-gradient(182.4deg, #611BB5 2.54%, rgba(255, 255, 255, 0) 222.36%)",
    // filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
    // borderRadius: "100px",
    fontSize: "18px",
    fontWeight: "700",
  },
  loginBTN: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
  },
  registerLink: {
    // color: "#F650FF",
    fontWeight: "700",
    border: "none",
    cursor: "pointer",
  },
  iconsclass: {
    color: "white",
    zIndex: "1",
  },
  iconsclass1: {
    color: "white",
    zIndex: "1",
    fontSize: "18px",
  },
  mainSignupFrom: {
    border: "2px solid #ccc",
    padding: "12px 10px",
    borderRadius: "12px",
  },
}));

const SignupForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [isProcessing, setisProcessing] = useState(false);
  const formInitialSchema = {
    email: "",
    password: "",
  };

  const handleFormSubmit = async (values) => {
    try {
      const dataToPost = {
        email: values.email,
        password: values.password,
      };
      setisProcessing(true);
      console.log("login console")
      const response = await dataPostHandler("login", dataToPost);
      console.log("response = ", response)
      if (response) {
        console.log("1111111111111")
        if (response.data.responseCode === 200) {
          console.log("2222222222222222")
          toast.success(response.data.responseMessage);

          console.log("response.data.result.token = ", response.data.result.token)
          window.localStorage.setItem("accessToken", JSON.stringify(response.data.result.token));

          
          if (response.data.result.userType === "Issuer") {
            history.push("/issuer");
          } else {
            window.open(
              `http://ec2-54-234-138-40.compute-1.amazonaws.com:${response.data.result.port}/#credentials`
            );
          }
        } else {
          toast.error(response.data.responseMessage);
        }
        setisProcessing(false);
      } else {
        setisProcessing(false);
      }
    } catch (error) {
      console.error(error);
      setisProcessing(false);
    }
  };

  const formValidationSchema = yep.object().shape({
    email: yep
      .string()
      .trim()
      .email("Please enter a valid email address")
      .required("Email is required."),
    password: yep.string().trim().required("Password is required."),
  });

  return (
    <Box className={classes.mainSignupFrom}>
      <Container>
        <Formik
          initialValues={formInitialSchema}
          initialStatus={{
            success: false,
            successMsg: "",
          }}
          validationSchema={formValidationSchema}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            touched,
            values,
            setFieldValue,
          }) => (
            <Form className={classes.root}>
              <Box className={classes.heading}>
                <Typography variant="h4">LOGIN</Typography>
                <Typography variant="body2">
                  Sign in using your username and password
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex" alignItems="center">
                    <TextField
                      type="text"
                      placeholder="Enter your email"
                      variant="outlined"
                      fullWidth
                      name="email"
                      id="email"
                      value={values.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={classes.FormInputField}
                      endAdornment={
                        <InputAdornment position="end">
                          {" "}
                          <PersonOutlineIcon className={classes.iconsclass} />
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </Box>

                  <FormHelperText error className={classes.helperText}>
                    {touched.email && errors.email}
                  </FormHelperText>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box display="flex" alignItems="center">
                    <OutlinedInput
                      type={show ? "text" : "password"}
                      placeholder="Enter your password"
                      variant="outlined"
                      fullWidth
                      name="password"
                      id="password"
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={classes.FormInputField}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShow(!show)}
                            edge="end"
                          >
                            {show ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </Box>

                  <FormHelperText error className={classes.helperText}>
                    {touched.password && errors.password}
                  </FormHelperText>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  {/* ****************************  CheckBox Field ****************************       */}
                  <Box className={classes.checkForgetBox}>
                    {/* <Box>
                      <FormControlLabel
                        control={<Checkbox name="checkedC" />}
                        label="Remember me"
                        className={classes.ForgetpassBox}
                      />
                    </Box> */}
                    <Box>
                      <NavLink
                        to="/forgetpassword"
                        className={classes.ForgetpassBox}
                      >
                        Forgot Password?
                      </NavLink>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    className={classes.submitBTN}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    // onClick={() => history.push("/")}
                    disabled={isProcessing}
                  >
                    <span className={classes.loginBTN}>Login</span>{" "}
                    {isProcessing && <ButtonCircularProgress />}
                  </Button>
                </Grid>

                <Hidden smUp>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box className={classes.Gosign1}>
                      <Typography variant="body2">got to?</Typography>
                      &nbsp;{" "}
                      <Typography
                        className={classes.registerLink}
                        variant="body2"
                        onClick
                      >
                        Home
                      </Typography>
                    </Box>
                  </Grid>
                </Hidden>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box className={classes.Gosign}>
                    <Typography variant="body2">
                      New on our platform?
                    </Typography>
                    &nbsp;{" "}
                    <Typography
                      className={classes.registerLink}
                      variant="body2"
                      onClick={() => history.push("/register")}
                    >
                      Register
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default SignupForm;
