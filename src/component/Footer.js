import React from "react";
import { CssBaseline } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "../Css/FooterStyle.css"

function CopyRight() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com">
        Your Website
      </Link>{""}
      {new Date().getFullYear()}{"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="sm"
        ></Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <FiInstagram />
            <BsFacebook />
            <CopyRight />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
