import React from "react";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import LoginPage from "src/component/LoginPage";
import Earth from "src/component/Earth";
import Forgetpassword from "src/component/Forgetpassword";
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
      <Container>
        <Grid
          container
          spacing={3}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={5}
            alignItems="center"
            style={{ display: "flex" }}
          >
            <Box className={classes.mainbox}>
              <Forgetpassword />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
