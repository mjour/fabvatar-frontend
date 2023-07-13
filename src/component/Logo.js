import { Typography } from "@material-ui/core";
import React from "react";

const Logo = (props) => {
  return (
    // <Typography variant="h4">INDY-CHAIN</Typography>
    <img
      src="/images/QR/LOGO.png"
      // style={{ width: "100%" }}
      alt="Logo"
      {...props}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Logo;
