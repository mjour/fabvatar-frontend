import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
// import { Button } from "react-scroll";
import FileCopyIcon from "@material-ui/icons/FileCopy";
const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    marginLeft: "-20px",
    marginTop: "-15px",
  },
  profile_btn: {
    background:
      "linear-gradient(182.4deg, #611BB5 2.54%, rgba(255, 255, 255, 0) 222.36%)",
    filter: "drop-shadow(0px 13px 27px rgba(0, 0, 0, 0.25))",
    borderRadius: "100px",
    height: "50px",
    color: "white",
  },
  FormInputField: {
    height: "52px",
    border: "1px solid white",
    borderRadius: "50px",
  },
  hrclass: {
    borderBottom: "0.5px",
    marginTop: "25px",
  },
  updateBTN: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    "& button": {
      width: "227px",
    },
  },
  change_box: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  change_password: {
    fontSize: "16px",
    fontWeight: "700",
  },

  qr_text: {
    fontSize: "16px",
    fontWeight: "400",
  },
  para1: {
    marginTop: "10px",
  },
  QrCodeBox: {
    marginTop: "50px",
  },
  copyBox: {
    border: "2px solid #0000", 
    background: "linear-gradient(96deg, #8b069e,#d06fd9) padding-box, linear-gradient(rgba(149, 219, 58, 0.7),rgba(233, 70, 255, 1)) border-box", 
    boxShadow: "0px 0px 11px #c75cd3", 
    borderColor: "rgba(0, 0, 0, 0.23)",
     height: "50px", 
     display: "flex", 
     padding: "0 20px", 
     alignItems: "center", 
     borderRadius: "50px", 
     justifyContent: "space-between",
    "@media(max-width:960px)": {
      width: "80%",
    },
  },
  FA_Code: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
    fontFamily: "'Orbitron', sans-serif",
  },
  qrCodeClass: {
    width: "70%",
  },
}));
const Profile_Security = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainBox}>
      <Box className={classes.change_box}>
        <Typography className={classes.change_password}>
          Change Password
        </Typography>
      </Box>
      <hr className={classes.hrclass} />
      <Box className={classes.change_box}>
        <Typography className={classes.change_password}>
          Enable Two-Factor Authentication
        </Typography>
      </Box>
      <Typography variant="body1">
        To enable two-factor authentication, download the Google Authenticator
        and scan the following QR code or enter the secret manually, then enter
        your one-time password to confirm.
      </Typography>
      <Typography className={classes.para1} variant="body1">
        If you lose your two-factor authentication codes you may be permanently
        locked out of your account. Ensure you backup your 2FA application, or
        save this QR code or secret. Do not enable 2FA unless you are sure you
        have a safe copy of this information
      </Typography>
      <Box className={classes.QrCodeBox}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Box>
              <img
                className={classes.qrCodeClass}
                src="\images\Qr_code.png"
              ></img>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Box className={classes.copyBox}>
              <Typography className={classes.qr_text}>
                63MICIKG3OWJYMCO
              </Typography>
              <FileCopyIcon />
            </Box>
            <Typography variant="body2" className={classes.FA_Code}>
              2FA Code
            </Typography>
            <Box className={classes.copyBox}>
              <Typography className={classes.qr_text}>
                Please enter 2FA Auth code
              </Typography>
            </Box>
            <Box className={classes.updateBTN}>
              <Button variant="contained" color="primary">
                Enable
              </Button>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={6} xs={12}></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Profile_Security;
