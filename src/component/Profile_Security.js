import React, { useState } from "react";
import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@material-ui/core";
// import { Button } from "react-scroll";
import { Form, Formik } from "formik";
import * as yep from "yup";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import BackupIcon from "@material-ui/icons/Backup";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import CreateIcon from "@material-ui/icons/Create";
const useStyles = makeStyles((theme) => ({
  textColr: {
    color: "#BBBBBB",
    fontSize: "14px",
    fontWeight: "400",
    marginBottom: "10px",
    fontFamily: "'Orbitron', sans-serif",
  },
  mainBox: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    // marginLeft: "-20px",
    // marginTop: "-15px",
  },
  profile_btn: {
    width: "227px",
    marginTop: "30px",
    "@media(max-width:414px)": {
      width: "100%",
    },
  },
  hrclass: {
    borderBottom: "0.5px",
    marginTop: "50px",
  },
  updateBTN: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  change_box: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  change_password: {
    fontSize: "16px",
    fontWeight: "700",
  },
  profileImage: {
    minWidth: "150px",
    position: "relative",
  },
  iconsClass: {
    right: "20px",
    position: "relative",
    top: "34px",
    color: "grey",
    cursor: "pointer",
  },
  imgsection: {
    height: "150px",
    width: "150px",
    borderRadius: "100px",
  },
  uploadIcon: {
    position: "relative",
    top: "-55px",
    right: "-50px",
    borderRadius: "50px",
    fontSize: "30px",
    cursor: "pointer",
  },
}));
const Profile_Security = () => {
  const [profile_picture, setImage] = useState(null);
  const [profile_file, setFile] = useState(null);

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleFormSubmit = async (values) => {
    console.log("values-----", values);
    // history.push("/");
  };
  const formInitialSchema = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    sponser: "",
    // password: "",
    // confirmPassword: "",
  };
  const formValidationSchema = yep.object().shape({
    sponser: yep
      .string()
      .trim()
      .required("Sponser is required.")
      .min(3, "Please enter atleast 3 characters")
      .max(24, "You can enter only 24 characters"),
    firstname: yep
      .string()
      .required("First name is required.")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed.")
      .min(2, "Should be 2 character long.")
      .max(24, "should not exceed 20 characters."),
    lastname: yep
      .string()
      .required("Last name is required.")
      .matches(/^[A-Za-z]+$/, "Only alphabets are allowed.")
      .min(3, "Should be 3 character long.")
      .max(24, "should not exceed 20 characters."),
    email: yep
      .string()
      .email("Please enter a valid email address.")
      .required("Email is required."),
    // password: yep
    //   .string()
    //   .required("Password is required.")
    //   .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Please enter strong password"
    //   )
    //   .min(6, "Minimum 6 characters required.")
    //   .max(16, "Maximum 16 characters required."),
    // confirmPassword: yep
    //   .string()
    //   .required("Confirm password is required.")
    //   .oneOf(
    //     [yep.ref("password"), null],
    //     "Confirm password or password did not match."
    //   ),
    phone: yep
      .string()
      .required("Phone number is required.")
      .min(10, "Should be 10 character long.")
      .max(12, "should not exceed 12 characters."),
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={3}
        mb={3}
      >
        <Box>
          <Box className={classes.Box}>
            <figure className="figure">
              <img
                className={classes.imgsection}
                src={
                  profile_picture ? profile_picture : "/images/TeamImage3.png"
                }
                alt=""
              />
            </figure>
          </Box>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
              setImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
          <Box display="flex" justifyContent="center">
            <label htmlFor="raised-button-file">
              {" "}
              <BackupIcon className={classes.uploadIcon} />
            </label>
          </Box>
        </Box>
      </Box>
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
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box>
                  <Typography className={classes.textColr}>
                    First Name
                  </Typography>
                  <TextField
                    type="text"
                    placeholder="First name"
                    variant="outlined"
                    fullWidth
                    name="firstname"
                    id="firstname"
                    value={values.firstname}
                    error={Boolean(touched.firstname && errors.firstname)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error className={classes.helperText}>
                    {touched.firstname && errors.firstname}
                  </FormHelperText>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box>
                  <Typography className={classes.textColr}>
                    Last Name
                  </Typography>
                  <TextField
                    type="text"
                    placeholder="LastNme"
                    variant="outlined"
                    fullWidth
                    name="lastname"
                    id="lastname"
                    value={values.lastname}
                    error={Boolean(touched.lastname && errors.lastname)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error className={classes.helperText}>
                    {touched.lastname && errors.lastname}
                  </FormHelperText>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box>
                  <Typography className={classes.textColr}>Email</Typography>
                  <TextField
                    type="text"
                    placeholder="Email Address"
                    variant="outlined"
                    fullWidth
                    name="email"
                    id="email"
                    value={values.email}
                    error={Boolean(touched.email && errors.email)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error className={classes.helperText}>
                    {touched.email && errors.email}
                  </FormHelperText>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box>
                  <Typography className={classes.textColr}>
                    Phone No.
                  </Typography>
                  <TextField
                    placeholder="Phone"
                    name="phone"
                    variant="outlined"
                    fullWidth
                    value={values.phone}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.phone && errors.phone)}
                  />
                  <FormHelperText error className={classes.helperText}>
                    {touched.phone && errors.phone}
                  </FormHelperText>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box>
                  <Typography className={classes.textColr}>Sponsor</Typography>
                  <TextField
                    type="text"
                    placeholder="Sponser"
                    variant="outlined"
                    fullWidth
                    name="sponser"
                    id="sponser"
                    value={values.sponser}
                    error={Boolean(touched.sponser && errors.sponser)}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <FormHelperText error className={classes.helperText}>
                    {touched.sponser && errors.sponser}
                  </FormHelperText>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box>
                  <Button
                    className={classes.profile_btn}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Update Profile
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <hr className={classes.hrclass} />
            <Box>
              <Box className={classes.change_box}>
                <Typography className={classes.change_password}>
                  Change Password
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Box>
                    <Typography className={classes.textColr}>
                      Old Password
                    </Typography>
                    <OutlinedInput
                      fullWidth
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
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </Box>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Box>
                    <Typography className={classes.textColr}>
                      New Password
                    </Typography>
                    <OutlinedInput
                      fullWidth
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
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </Box>
                </Grid>
                <Grid item lg={4} md={6} sm={6} xs={12}>
                  <Box>
                    <Typography className={classes.textColr}>
                      Confirm Password
                    </Typography>
                    <OutlinedInput
                      fullWidth
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
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Box className={classes.updateBTN}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.profile_btn}
                  size="large"
                >
                  Profile
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Profile_Security;
