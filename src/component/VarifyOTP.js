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
import { putAPIHandler } from "src/apiConfig/service";
import { toast } from "react-toastify";
import ButtonCircularProgress from "./ButtonCircularProgress";
const useStyles = makeStyles((theme) => ({
  helperText: {
    margin: "0px",
    fontSize: "12px",
    paddingBottom: "0px !important",
  },
  FormInputField: {
    width: "100%",
  },
  heading: {
    // paddingBottom: "20px",
    marginBottom: "6px",
    "@media(max-width:960px)": {
      textAlign: "center",
    },
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
  registerLink: {
    cursor: "pointer",
    fontWeight: "700",
  },
  mainSignupFrom: {
    border: "2px solid #ccc",
    padding: "12px 10px",
    borderRadius: "12px",
  },
  Gosign: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
  },
}));

const OTPVarify = () => {
  const classes = useStyles();
  const history = useHistory();
  const [isProcessing, setIsProcessing] = useState(false);

  const formInitialSchema = {
    otp: "",
  };

  const handleFormSubmit = async (values) => {
    try {
      const dataToSend = {
        otp: values.otp,
        email: window.sessionStorage.getItem("emailUser"),
      };
      setIsProcessing(true);
      const response = await putAPIHandler("verifyOTP", dataToSend);
      if (response) {
        setIsProcessing(false);
        if (response.data.responseCode === 200) {
          toast.success("Your OTP has been verified successfully.");
          history.push("/reset-password");
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
    otp: yep
      .string()
      .trim()
      .required("Email is required")
      .max(4, "Please enter a valid OTP.")
      .required("Pleae enter your OTP first"),
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
                <Typography variant="h4">Verify OTP</Typography>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    type="number"
                    placeholder="Enter your OTP"
                    variant="outlined"
                    name="otp"
                    id="otp"
                    value={values.otp}
                    error={Boolean(touched.otp && errors.otp)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    className={classes.FormInputField}
                  />

                  <FormHelperText error className={classes.helperText}>
                    {touched.otp && errors.otp}
                  </FormHelperText>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                    fullWidth
                    className={classes.submitBTN}
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isProcessing}
                  >
                    <span className={classes.loginBTN}>Verify OTP</span>
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

export default OTPVarify;
