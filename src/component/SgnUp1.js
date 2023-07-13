import {
  makeStyles,
  Box,
  Container,
  Typography,
  TextField,
  FormHelperText,
  Grid,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import React, { useState, useMemo } from "react";
import { Form, Formik } from "formik";
import * as yep from "yup";
import { NavLink, useHistory } from "react-router-dom";
import { dataPostHandler } from "src/apiConfig/service";
import { toast } from "react-toastify";
import ButtonCircularProgress from "./ButtonCircularProgress";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
const useStyles = makeStyles((theme) => ({
  Gosign: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
  },
  registerLink: {
    // color: "#F650FF",
    fontWeight: "700",
    cursor: "pointer",
  },
  FormInputField: {
    width: "100%",
  },
  helperText: {
    margin: "0px",
    fontSize: "12px",
    paddingBottom: "0px !important",
    color: "#fa4949 !important",
  },
  FormContryField: {
    background: "transparent !important",
    color: "black",
  },
  HeaddingBox: {
    marginTop: "5px",
    "@media(max-width:960px)": {
      textAlign: "center",
    },
  },
  formikBox: {
    // marginTop: "30px",
  },

  Register: {
    "@media(max-width:960px)": {
      textAlign: "center",
    },
  },
  Gosign: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  loginBTN: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
  },
  phoneTextField: {
    minHeight: "55px",
    color: "#fff",
    width: "100%",
    border: "2px solid #0000",
    borderRadius: "30px !important",
    boxShadow: "0px 0px 11px #c75cd3",
    fontSize: "14px",

    background:
      "linear-gradient(96deg, #8b069e,#d06fd9) padding-box, linear-gradient(rgba(149, 219, 58, 0.7),rgba(233, 70, 255, 1)) border-box",
    "& .inpuLable": {
      borderRight: "1px solid #fff",
      height: "25px",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      paddingRight: "10px",
      marginRight: "5px",
      fontWeight: 700,
    },
  },
  select: {
    margin: "40px",
    background: "red !important",
    color: "#fff",
    textShadow: "0 1px 0 rgba(0, 0, 0, 0.4)",
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
  const [_change, setChange] = useState("");
  const [_changestate, setChangeState] = useState();
  const [isProcessing, setIsProcessing] = useState(false);
  const formInitialSchema = {
    username: "",
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [show, setShow] = useState({
    oldPassword: false,
    newPassword: false,
  });
  const handleFormSubmit = async (values) => {
    try {
      const dataToSend = {
        email: values.email,
        name: values.firstname,
        password: values.password,
        userName: values.username,
        iconSrc: "N/A",
        message: "N/A",
      };
      setIsProcessing(true);
      const response = await dataPostHandler("register", dataToSend);
      if (response) {
        setIsProcessing(false);

        if (response.data.responseCode === 200) {
          toast.success(response.data.responseMessage);
          history.push("/");
        } else {
          toast.error(response.data.responseMessage);
        }
      } else {
        setIsProcessing(false);
      }
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
    }
  };

  const formValidationSchema = yep.object().shape({
    username: yep
      .string()
      .required("User name is required.")
      .matches(
        /^[A-Za-z][A-Za-z0-9_]{2,23}$/,
        "Please enter a valid user name."
      )
      .min(3, "Please enter atleast 3 characters")
      .max(24, "You can enter only 24 characters"),

    firstname: yep
      .string()
      .matches(/^[a-zA-Z ]*$/, "Only alphabets are allowed.")
      .required("First name is required.")
      .min(2, "Should be 2 character long.")
      .max(24, "should not exceed 20 characters."),

    email: yep
      .string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    password: yep
      .string()
      .required("Password is required.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password should contain, One uppercase charachter, One lowercase charachter, One number, One special charachter and minimum of 8 charachters."
      )
      .min(6, "Minimum 6 characters required.")
      .max(16, "Maximum 16 characters required."),
    confirmPassword: yep
      .string()
      .required("Confirm password is required.")
      .oneOf(
        [yep.ref("password"), null],
        "Confirm password or password did not match."
      ),
  });

  return (
    <Box className={classes.mainSignupFrom}>
      <Container>
        <Box className={classes.Register}>
          <Typography variant="h4">REGISTER</Typography>
        </Box>

        <Box className={classes.HeaddingBox}>
          <Typography variant="body2">Fill the details below.</Typography>
        </Box>
        <Box className={classes.formikBox}>
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
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      type="text"
                      placeholder="User name"
                      variant="outlined"
                      fullWidth
                      name="username"
                      id="username"
                      value={values.username}
                      error={Boolean(touched.username && errors.username)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={classes.FormInputField}
                    />

                    <FormHelperText error className={classes.helperText}>
                      {touched.username && errors.username}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      type="text"
                      placeholder="Your name"
                      variant="outlined"
                      fullWidth
                      name="firstname"
                      id="firstname"
                      value={values.firstname}
                      error={Boolean(touched.firstname && errors.firstname)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={classes.FormInputField}
                    />

                    <FormHelperText error className={classes.helperText}>
                      {touched.firstname && errors.firstname}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      type="text"
                      placeholder="Email address"
                      variant="outlined"
                      fullWidth
                      name="email"
                      id="email"
                      value={values.email}
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={classes.FormInputField}
                    />

                    <FormHelperText error className={classes.helperText}>
                      {touched.email && errors.email}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      type={show.oldPassword ? "text" : "password"}
                      placeholder="Password"
                      variant="outlined"
                      fullWidth
                      name="password"
                      id="password"
                      value={values.password}
                      error={Boolean(touched.password && errors.password)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={classes.FormInputField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShow({
                                  oldPassword: !show.oldPassword,
                                  newPassword: show.newPassword,
                                })
                              }
                              edge="end"
                            >
                              {show.oldPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <FormHelperText error className={classes.helperText}>
                      {touched.password && errors.password}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                      type={show.newPassword ? "text" : "password"}
                      placeholder="Confirm password"
                      variant="outlined"
                      fullWidth
                      name="confirmPassword"
                      id="confirmPassword"
                      value={values.confirmPassword}
                      error={Boolean(
                        touched.confirmPassword && errors.confirmPassword
                      )}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={classes.FormInputField}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() =>
                                setShow({
                                  oldPassword: show.oldPassword,
                                  newPassword: !show.newPassword,
                                })
                              }
                              edge="end"
                            >
                              {show.newPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormHelperText error className={classes.helperText}>
                      {touched.confirmPassword && errors.confirmPassword}
                    </FormHelperText>
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      fullWidth
                      disabled={isProcessing}
                    >
                      <span className={classes.loginBTN}>Register</span>{" "}
                      {isProcessing && <ButtonCircularProgress />}
                    </Button>

                    <Box className={classes.Gosign}>
                      <Typography variant="body2">
                        Already have a account?
                      </Typography>
                      &nbsp;{" "}
                      <Typography
                        className={classes.registerLink}
                        variant="body2"
                        onClick={() => history.push("/")}
                      >
                        Login
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default SignupForm;
