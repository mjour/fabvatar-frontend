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
const useStyles = makeStyles((theme) => ({
  helperText: {
    margin: "0px",
    fontSize: "12px",
    paddingBottom: "0px !important",
  },
  FormInputField: {
    width: "100%",
    borderRadius: "100px",
    boxShadow: "0px 0px 11px #C75CD3",
    background:
      "linear-gradient(108.03deg, rgba(196, 34, 198, 0.1) 5.25%, rgba(204, 63, 207, 0.2127) 20%, rgba(223, 128, 226, 0.4894) 56.23%, rgba(237, 176, 240, 0.7223) 86.73%, #F6CEF9 109.94%, #F9D9FC 123.1%)",
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
    color: "#F650FF",
  },
}));

const Password = () => {
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
      };
      setIsProcessing(true);
      const response = await putAPIHandler("verifyOTP", dataToSend);
      if (response) {
        setIsProcessing(false);
        toast.success("Your OTP has been verified successfully.");
        history.push("/confirm-password");
      } else {
        setIsProcessing(false);
        toast.error("Invalild authentication");
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
      .max(4, "You cannot enter maximum four charachters")
      .required("Pleae enter your OTP first"),
  });

  return (
    <Box className={classes.mainSignupFrom}>
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

              <Box mt={2} width="100%">
                <Button
                  fullWidth
                  className={classes.submitBTN}
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={isProcessing}
                >
                  <span className={classes.loginBTN}>Verify OTP</span>
                </Button>
              </Box>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Password;
