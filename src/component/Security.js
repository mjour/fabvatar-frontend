import React from "react";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";
import Tab_security from "./Tab_security";
const useStyles = makeStyles((theme) => ({
  main: {
    height: "100%",
    width: "100%",
    background:
      "radial-gradient(95.29% 154.4% at 63.22% 373.23%, #BA00BB 0%, rgba(15, 23, 85, 0) 100%) , radial-gradient(63.04% 188.69% at 77.35% 173.46%, #BA00BB 0%, rgba(15, 23, 85, 0) 100%) , radial-gradient(59.39% 86.51% at 75.9% 55.38%, rgba(186, 0, 187, 0.42) 0%, #AC02B2 0.01%, #0F1755 100%)",
  },
  subcontainer: {
    backgroundColor: "rgba(255, 255, 255, 0.07)",
    // marginTop: "120px",
    // height: "500px",
    borderRadius: "10px",
    padding: "30px",
    minHeight: "800px",
  },
  backgroundColorWhite: {
    // background: "rgba(255, 255, 255, 0.07)",
    borderRadius: "10px",
  },
}));
const Security = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Box className={classes.subcontainer}>
        <Typography variant="h5">PROFILE DETAILS</Typography>
        <Box className={classes.backgroundColorWhite}>
          <Tab_security />
        </Box>
      </Box>
    </div>
  );
};

export default Security;
