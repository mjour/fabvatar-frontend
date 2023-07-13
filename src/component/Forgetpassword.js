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
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import React, { useState, useMemo } from "react";
import { Form, Formik } from "formik";
import * as yep from "yup";
import countryList from "react-select-country-list";
import { NavLink } from "react-router-dom";
import VarifyOTP from "./VarifyOTP";
import { dataPostHandler } from "src/apiConfig/service";
import { toast } from "react-toastify";
import ButtonCircularProgress from "./ButtonCircularProgress";
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
    paddingBottom: "6px",
    "@media(max-width:960px)": {
      textAlign: "center",
    },
  },
  Gosign: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },

  loginBTN: {
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "23px",
  },
  registerLink: {
    fontWeight: "700",
    cursor: "pointer",
  },
  mainSignupFrom: {
    border: "2px solid #ccc",
    padding: "12px 10px",
    borderRadius: "12px",
  },
}));

const Forgetpassword = () => {
  const classes = useStyles();
  const history = useHistory();

  const [isProcessing, setIsProcessing] = useState(false);

  const formInitialSchema = {
    email: "",
  };

  const handleFormSubmit = async (values) => {
    try {
      window.sessionStorage.setItem("emailUser", values.email);
      const dataToSend = {
        email: values.email,
      };
      setIsProcessing(true);
      const response = await dataPostHandler("forgotPassword", dataToSend);
      if (response) {
        if (response.data.responseCode === 200) {
          toast.success(response.data.responseMessage);
          history.push("/verify-otp");
        } else {
          toast.error(response.data.responseMessage);
        }
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
    email: yep
      .string()
      .trim()
      .email("Please enter a valid email address.")
      .required("Email is required"),
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
                <Typography variant="h4">FORGOT PASSWORD</Typography>
                <Typography variant="body2">
                  Enter your registered email address.
                </Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
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
                  />

                  <FormHelperText error className={classes.helperText}>
                    {touched.email && errors.email}
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
                    <span className={classes.loginBTN}>Forgot Password</span>{" "}
                    {isProcessing && <ButtonCircularProgress />}
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

export default Forgetpassword;
