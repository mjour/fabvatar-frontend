import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Box } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  content: {
    // height: "100vh",
    overflowX: "auto",
    background: "url(/images/background.png)",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#fff",

    [theme.breakpoints.down("sm")]: {
      height: "auto",
      overflow: "unset",
    },
  },
}));

const LoginLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container>
      <Header />
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.content}>{children}</Box>
      </Grid>
      <Footer />
    </Grid>
  );
};

LoginLayout.propTypes = {
  children: PropTypes.node,
};

export default LoginLayout;
