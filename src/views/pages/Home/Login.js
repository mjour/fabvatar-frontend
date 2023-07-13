import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import LoginPage from "src/component/LoginPage";
import Earth from "src/component/Earth";
import SgnUp1 from "src/component/SgnUp1";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    width: "100%",
    // height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    height: "calc(100vh - 127px)",
  },

  earth: {
    "@media(max-width:960px)": {
      display: "none",
    },
  },

  mainbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainSection}>
      <Container maxWidth="sm">
        <Box className={classes.mainbox}>
          <Box className={classes.Rightpart}>
            <LoginPage />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
