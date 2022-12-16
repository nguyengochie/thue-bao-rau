import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import Logo from "assets/image/image16.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.headerContent}>
        <Box>
          <img className={classes.imgLogo} src={Logo} alt="" />
        </Box>
        <Box className={classes.menuTabListContainer}>
          <Typography onClick={() => navigate("/home")}>TRANG CHỦ</Typography>
          <Typography onClick={() => navigate("/story")}>
            CHUYỆN P FARM
          </Typography>
          <Typography>GÓI THUÊ BAO RAU</Typography>
          <Typography>NHẬT KÝ</Typography>
          <Typography onClick={() => navigate("/news")}>TIN TỨC</Typography>
          <Typography>LOGIN</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
