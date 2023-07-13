import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import React from "react";
import Balance from "./Balance";
import { useHistory } from "react-router-dom";

const data = [
  {
    id: 1,
    img: "images/package1.png ",
    text1: " BRONZE",
    text2: "500 - 999 BIT",
    btn1: "Direct Bonus 3 %",
    btn2: "250 BIT",
  },
  {
    id: 2,
    img: "images/package2.png ",
    text1: " SILVER",
    text2: "1,000 - 4,999 BIT",
    btn1: "Direct Bonus 5 %",
    btn2: "500 BIT",
  },
  {
    id: 3,
    img: "images/package3.png ",
    text1: " GOLD",
    text2: "1,000 - 4,999 BIT",
    btn1: "Direct Bonus 6 %",
    btn2: "1000 BIT",
  },
  {
    id: 4,
    img: "images/package6.png ",
    text1: " PLATINUM",
    text2: "10,000 - 29,999 BIT",
    btn1: "Direct Bonus 8 %",
    btn2: "250 BIT",
  },
  {
    id: 5,
    img: "images/package5.png ",
    text1: " DIAMOND",
    text2: "30,000 - 49,999 BIT",
    btn1: "Direct Bonus 9 %",
    btn2: "3000 BIT",
  },
  {
    id: 6,
    img: "images/package4.png ",
    text1: " INVESTOR",
    text2: "50,000 - ♾ BIT",
    btn1: "Direct Bonus 10 %",
    btn2: "5000 BIT",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
    paddingBottom: "50px",
    "& .box": {
      display: "flex",
      justifyContent: "center",
    },
    "& h4": {
      fontFamily: "'Inter'",
      fontStyle: "normal",
      fontWeight: "700",
      padding: "25px 0px",
      lineHeight: "30px",

      textTransform: "uppercase",
    },
    "& .card": {
      background: "rgba(0, 0, 0, 0.1)",
      borderRadius: "8px",
      textAlign: "center",
      padding: "97px 0px 20px",
    //   border:"1px solid transparent",
    //   "&:hover": {
      
    //     border:"1px solid #a016ad",
    // },
    },
    "& .imgbox": {
      background:
        "linear-gradient(108.03deg, rgba(196, 34, 198, 0.1) 5.25%, rgba(204, 63, 207, 0.2127) 20%, rgba(223, 128, 226, 0.4894) 56.23%, rgba(237, 176, 240, 0.7223) 86.73%, #F6CEF9 109.94%, #F9D9FC 123.1%)",
      boxShadow: "0px 0px 11px #C75CD3",
      borderRadius: "100px",
      width: "150px",
      height: "150px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: "1",
      position: "absolute",
      marginTop: "-75px",
    },
    "& .mainbox":{
      paddingTop:"110px",
      transition: "0.3s",
     
      "&:hover": {
        transform: "scale(1.025)",
     
    },
    }
  },
}));

export default function Advanceexchange() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Box>
        <Typography variant="h5">PACKAGES</Typography>
      </Box>
      <Grid container spacing={3} alignItems="center">
        {data.map((value) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Box className="mainbox">
                <Box className="box">
                  <Box className="imgbox">
                    <img src={value.img} alt="" className="src" />
                  </Box>
                </Box>
                <Box className="card">
                  <Typography variant="body2">{value.text1}</Typography>
                  <Typography variant="h4">{value.text2}</Typography>
                  <Box mb={5}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => history.push("/balance")}
                    >
                      {value.btn1}
                    </Button>
                  </Box>
                  <Divider />
                  <Box p={2}>
                    <Typography variant="body2">Weekly Withdraw</Typography>
                  </Box>
                  <Button variant="contained" color="secondary">
                    {value.btn2}
                  </Button>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
