// import Typography from "@/theme/typography";
import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import Earth from "./Earth";
import SgnUp1 from "./SgnUp1";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    width: "100%",
    height: "calc(100vh - 127px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // background:
    //   "radial-gradient(74.44% 78.1% at 69.79% 50%, rgba(186, 0, 187, 0.42) 0%, #AC02B2 0.01%, #0F1755 100%)",
    // "@media(max-width:600px)": {
    //   height: "auto",
    // },
    background: "#fff",
  },

  earth: {
    "@media(max-width:960px)": {
      display: "none",
    },
  },
  mainSignupFrom: {
    border: "2px solid #ccc",
    padding: "12px 10px",
    borderRadius: "12px",
  },
}));

const CommonSignupLogin = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainSection}>
      <Container maxWidth="sm">
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={12} md={6} lg={7}>
            <Box className={classes.earth}>
              <Earth />
            </Box>
          </Grid> */}

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box className={classes.Rightpart}>
              <SgnUp1 />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CommonSignupLogin;
