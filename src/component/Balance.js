import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Invest from "./Invest";
import { BsCheckLg } from "react-icons/bs";
const data = [
  {
    id: 1,
    img: "images/cash1.png",
    text1: "0.15%",
    text2: "6 Months",
  },
  {
    id: 2,
    img: "images/cash2.png",
    text1: "0.2%",
    text2: "12 Months",
  },
  {
    id: 3,
    img: "images/cash3.png",
    text1: "0.3%",
    text2: "18 Months",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: "70px",
    "& .topbox": {
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      padding: "30px 20px",
      marginTop: "20px",
    },
    "& h5": {
      fontFamily: "'Inter', sans-serif !important",

      fontWeight: "700",
    },
    "& .box2": {
      display: "flex",
      alignItems: "center",
      paddingLeft: "40px",
      [theme.breakpoints.down("xs")]:{
        paddingLeft: "1px",
      }
    },

    "& .box1": {
      background: "linear-gradient(90deg, #E946FF -16.33%, #E6D292 151.68%)",
      borderRadius: "100px",
      margin: "20px 0px",
      width: "55px",
      padding: "4px",
    },
  },
  card: {
    background: "rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center",
    padding: "30px",
    cursor:"pointer",
    "&:active": {
      boreder: "1px solid green",
    },

    "& p": {
      fontWeight: "700",
      fontSize: "18px",
    },
    "& h5": {
      fontFamily: "'Inter', sans-serif !important",
      padding: "25px 0px 30px",
      fontWeight: "700",
    },
    "& h6": {
      fontFamily: "'Inter'",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "14px",
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
  active: {
    border: "1px solid #f77489",
    background: "rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    textAlign: "center",
    padding: "13px",

    "& p": {
      fontWeight: "700",
      fontSize: "18px",
    },
    "& h5": {
      fontFamily: "'Inter', sans-serif !important",
      padding: "25px 0px 30px",
      fontWeight: "700",
    },
    "& h6": {
      fontFamily: "'Inter'",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "14px",
    },
  },
  check: {
    background: "linear-gradient(90deg, #DE1EE9 15.4%, #FF9268 68.73%)",
    borderRadius: "50%",
    padding: "10px",
    width: "10px",
    height: "10px",
    position: "relative",
    top: "-25px",
    left: "98%",
    display:"flex",
    alignItems:"center",
  },
}));

export default function Balance() {
  const classes = useStyles();
  const [active, setActive] = useState();
  console.log("active", active);

  return (
    <Box className={classes.root}>
      <Container maxWidth="fixed">
        <Box className="topbox">
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box display="flex" alignItems="center">
              <Box className={classes.Circle}>
                <Box className="mainBox">
                  <img src="images/balance1.png" alt="" className="src" />
                </Box>
              </Box>
              <Box>
                <Typography variant="body2">Available Balance</Typography>
                <Typography variant="h5">0.258 BIT</Typography>
              </Box>
            </Box>
            <Box className="box2">
              <Box className={classes.Circle}>
                <Box className="mainBox">
                  <img src="images/balance2.png" alt="" className="src" />
                </Box>
              </Box>
              <Box>
                <Typography variant="body2">Total Invest</Typography>
                <Typography variant="h5">0.258 BIT</Typography>
              </Box>
            </Box>
          </Box>

          <Grid container spacing={3}>
            {data.map((value, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={i} onClick={() => setActive(i)}>
                  <Box
                    className={`${active != i ? classes.card : classes.active}`}
                    mt={6}
                  >
                    {active == i && (
                      <Box
                        className={`${
                          active != i ? classes.card : classes.check
                        }`}
                      >
                        <BsCheckLg
                          style={{
                            color: "#fff",
                            fontWeight: "700",
                            fontSize: "20px",
                          }}
                        />
                      </Box>
                    )}
                    <img src={value.img} alt="" className="src" />
                    <Box display="flex" justifyContent="center">
                      <Box className="box1">
                        <Typography variant="h6">{value.text1}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2">Daily</Typography>
                    <Typography variant="h5">{value.text2}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <Invest />
    </Box>
  );
}
