import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import LoginPage from "src/component/LoginPage";
import Earth from "src/component/Earth";
import VarifyOTP from "src/component/VarifyOTP";
const useStyles = makeStyles((theme) => ({
  mainSection: {
    width: "100%",
    height: "calc(100vh - 127px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    // "@media(max-width:960px)": {
    //   height: "auto",
    // },
  },

  earth: {
    "@media(max-width:960px)": {
      display: "none",
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainSection}>
      <Container maxWidth="sm">
        <Grid
          container
          spacing={3}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <VarifyOTP />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
