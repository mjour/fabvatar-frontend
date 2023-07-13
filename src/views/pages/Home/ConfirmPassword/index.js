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
    background: "#e1bee7",
    // "@media(max-width:960px)": {
    //   height: "auto",
    // },
  },
  Rightpart: {
    // display: "flex",
    justifyContent: "end",
    marginTop: "4rem",
    "@media(max-width:960px)": {
      paddingBottom: "50px",
    },
  },
  earth: {
    "@media(max-width:960px)": {
      display: "none",
    },
  },
}));

const ConfirmNew = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainSection}>
      <Container>
        <Grid
          container
          spacing={3}
          style={{ display: "flex", alignItems: "center" }}
        >
          {/* <Grid item xs={12} sm={12} md={6} lg={7}>
            <Box className={classes.earth}>
              <Earth />
            </Box>
          </Grid> */}

          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Box className={classes.Rightpart}>{/* <VarifyOTP /> */}</Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ConfirmNew;
