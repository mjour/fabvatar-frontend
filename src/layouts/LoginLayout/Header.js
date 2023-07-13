import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Logo from "src/component/Logo";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  headerBody: {
    background: "#fff",
    width: "100%",
    padding: "20px 0px",
  },
}));
export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.headerBody}>
      <Container>
        <Box onClick={() => history.push("/")}>
          <Logo />
        </Box>
      </Container>
    </Box>
  );
}
