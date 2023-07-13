import {
  Box,
  Container,
  Typography,
  makeStyles,
  Button,
  Grid,
  Slider,
  withStyles,
  TextField,
} from "@material-ui/core";
import React from "react";

const data = [
  {
    id: 1,
    img: "images/profit1.png",
    text2: "0.75 BIT",
  },
  {
    id: 2,
    img: "images/profit2.png",
    text2: "135.00 BIT",
  },
  {
    id: 3,
    img: "images/profit3.png",
    text2: "635.00 BIT",
  },
];
const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 13,
  },
  thumb: {
    height: 29,
    width: 29,
    backgroundColor: "#fff",
    border: "4px solid #ED835A",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 13,
    borderRadius: 4,
  },
  rail: {
    height: 13,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  mainroot: {
    "& .topbox": {
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "30px",
      marginTop: "20px",
    },

    "& .box": {
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "10px",
    },
    "& h5": {
      fontFamily: "'Inter'",

      fontWeight: "700",

      lineHeight: "30px",

      textTransform: "uppercase",
    },
    "& .minbox": {
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "30px",
      transition: "0.3s",
      "&:hover": {
        transform: "scale(1.025)",
      },
    },
  },
  Circle: {
    marginRight: "15px",
    borderRadius: "32px",
    position: "relative",
    boxShadow: "0px 0px 11px #C75CD3",
    zIndex: "1",
    padding: "2px",
    "&::before": {
      content: "' '",
      position: "absolute",
      top: "-1px",
      right: " -1px",
      bottom: "-1px",
      left: "-1px",
      zIndex: "-1",
      borderRadius: "33px",
      backgroundColor: "transparent",
      backgroundImage:
        "linear-gradient(144.15deg, #95DB3A 5.49%, #E946FF 90.06%)",
    },
    "& .mainBox": {
      padding: "18px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "12px",
      width: "12px",
      background:
        "linear-gradient(125.03deg, rgb(117 34 198 / 98%) 5.25%, rgb(67 8 170 / 86%) 20%, rgb(140 90 165 / 98%) 56.23%, rgb(193 145 251) 86.73%, #7b22a0 109.94%, #8c1497 123.1%)",
      boxShadow: "0px 0px 11px #C75CD3",
      borderRadius: "50%",
    },
  },
}));

export default function Invest() {
  const classes = useStyles();

  return (
    <Box className={classes.mainroot}>
      <Container maxWidth="fixed">
        <Box className="topbox">
          <Typography variant="h5">Invest</Typography>
          <Box pt={2} pb={1}>
            <Typography variant="body2">Amount</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4} md={2}>
              <TextField variant="outlined" className="textfiled1" placeholder="Enter Amount" />
            </Grid>
            <Grid item xs={12} md={8}>
              <PrettoSlider aria-label="pretto slider" defaultValue={5} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body2">500.00 BIT</Typography>
                <Typography variant="body2">750.00 BIT</Typography>
                <Typography variant="body2">999.00 BIT</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button variant="contained" color="Primary">
                Invest
              </Button>
            </Grid>
          </Grid>
          <Box mt={2} mb={4}>
            <Typography variant="h5">Calculate Interest</Typography>
          </Box>
          <Grid container spacing={3}>
            {data.map((value) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Box className="minbox">
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box className={classes.Circle}>
                        <Box className="mainBox">
                          <img src={value.img} alt="" className="src" />
                        </Box>
                      </Box>
                      <Box>
                        <Typography variant="body2">Daily Profit</Typography>
                        <Typography variant="h5">{value.text2}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
