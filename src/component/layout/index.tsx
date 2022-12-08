import React from "react";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "component/header";

const Layout = (): JSX.Element => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
