import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  boxImage: {
    position: "absolute",
    left: "-50px",
    right: "0",
    top: "0",
  },
  boxImage1: {
    bottom: "-100px",
    right: "25%",
    position: "absolute",
  },
  circleBox: {
    position: "absolute",
    right: "35px",
    top: "35px",
  },
  circleBox1: {
    left: "45px",
    bottom: "-35px",
    position: "absolute",
  },

  conatentBox: {
    display: "flex",
    justifyContent: "center",
  },
  mainBox: {
    cursor: "pointer",
    background: "url(/images/Earth_image.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "1",
    minHeight: "618.54px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    "@media(max-width:1280px)": {
      minHeight: "514.54px",
    },
    "@media(max-width:1024px)": {
      minHeight: "411.54px",
    },
  },
}));

const Earth = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.boxImage}>
        <img src="./images/Box_Image.png"></img>
      </Box>
      <Box className={classes.circleBox}>
        <img src="./images/circleImage.png"></img>
      </Box>
      <Box className={classes.conatentBox}>
        {" "}
        <Box textAlign="center" position="absolute" top="31%">
          <Typography
            variant="h2"
            align="center"
            title="Welcome to"
            className="texttitlebaichain wow bounceInRight"
          >
            {" "}
            Welcome to
          </Typography>
          <br />
          <Typography
            variant="h1"
            align="center"
            title="Indy"
            className="texttitle wow bounceInRight"
          >
            {" "}
            Indy
          </Typography>
        </Box>
      </Box>
      <Box className={classes.circleBox1}>
        <img src="./images/circleImage.png"></img>
      </Box>
      <Box className={classes.boxImage1}>
        <img src="./images/Box_Image.png"></img>
      </Box>
    </Box>
  );
};

export default Earth;
