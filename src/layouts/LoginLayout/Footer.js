import React from "react";
import { Box, Container, Typography } from "@material-ui/core";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box width="100%">
      <Container maxWidth="sm">
        <Box textAlign="center">
          <Typography
            style={{ fontSize: "8px !important" }}
          >{`${currentYear} © Indy Group Limited Company. All Rights Reserved`}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
