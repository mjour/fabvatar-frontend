import {
  makeStyles,
  Box,
  Container,
  Typography,
  TextField,
  FormHelperText,
  Grid,
  Button,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import React, { useState, useMemo } from "react";
import { Form, Formik } from "formik";
import * as yep from "yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { putAPIHandler } from "src/apiConfig/service";
import { toast } from "react-toastify";
const useStyles = makeStyles((theme) => ({
  FormInputField: {
    width: "100%",
  },
  phoneField: {
    height: "35px",
    width: "100%",
    color: "#fff",
  },
  helperText: {
    margin: "0px",
    fontSize: "12px",
    paddingBottom: "0px !important",
  },
  FormContryField: {
    background: "none !important",
    borderStyle: "none !important",
    borderColor: "none !important",
    borderRadius: "100px !important",
  },

  heading: {
    // paddingBottom: "20px",
    marginBottom: "6px",
    "@media(max-width:960px)": {
      textAlign: "center",
    },
  },
  Gosign: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },

  registerLink: {
    cursor: "pointer",
    fontWeight: "700",
  },

  submitBTN: {
    fontSize: "18px",
    fontWeight: "700",
  },
  loginBTN: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
  },
  mainSignupFrom: {
    border: "2px solid #ccc",
    padding: "12px 10px",
    borderRadius: "12px",
  },
}));

const Resetpassword = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isProcessing, setIsProcessing] = useState(false);

  const formInitialSchema = {
    password: "",
    email_password: "",
  };
  const [show, setShow] = useState({
    oldPassword: false,
    newPassword: false,
  });
  const handleFormSubmit = async (values) => {
    try {
      const dataToSend = {
        email: window.sessionStorage.getItem("emailUser"),
        password: values.password,
      };
      setIsProcessing(true);
      const response = await putAPIHandler("resetPassword", dataToSend);
      if (response) {
        history.push("/");
        toast.success("Your password has been changed successfully.");
        setIsProcessing(false);
      } else {
        setIsProcessing(false);
      }
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
    }
  };

  const formValidationSchema = yep.object().shape({
    password: yep
      .string()
      .trim()
      .min(8)
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password should contain, One uppercase charachter, One lowercase charachter, One number, One special charachter and minimum of 8 charachters."
      )
      .required("Please enter your new password."),
    email_password: yep
      .string()
      .required("Please confirm your password.")
      .oneOf([yep.ref("password"), null], "Passwords must match"),
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
                <Typography variant="h4">Reset Password</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    type={show.oldPassword ? "text" : "password"}
                    placeholder="Enter new password"
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
                    placeholder="Confirm new password"
                    variant="outlined"
                    fullWidth
                    name="email_password"
                    id="email_password"
                    value={values.email}
                    error={Boolean(
                      touched.email_password && errors.email_password
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
                    {touched.email_password && errors.email_password}
                  </FormHelperText>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    className={classes.submitBTN}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    disabled={isProcessing}
                  >
                    <span className={classes.loginBTN}>Confirm</span>
                  </Button>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box className={classes.Gosign} mt={2}>
                    <Typography variant="body2">Back to?</Typography>
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
      </Container>
    </Box>
  );
};

export default Resetpassword;
