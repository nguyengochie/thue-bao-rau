import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import Logo from "assets/image/image16.png";
import Vinid from "assets/image/vinid.png";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const ACTIVE_MENU = location.pathname;
  console.log("asd", location.pathname);

  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.headerContent}>
        <Box onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          <img className={classes.imgLogo} src={Logo} alt="" />
          <CloseIcon style={{ marginBottom: -3 }} />
          <img style={{ width: 60 }} src={Vinid} alt="" />
        </Box>
        <Box className={classes.menuTabListContainer}>
          <Typography
            {...(ACTIVE_MENU === "/home" && { className: classes.activeMenu })}
            onClick={() => navigate("/home")}
          >
            TRANG CHỦ
          </Typography>
          <Typography
            {...(ACTIVE_MENU === "/story" && { className: classes.activeMenu })}
            onClick={() => navigate("/story")}
          >
            CÂU CHUYỆN
          </Typography>
          <Typography
            {...(ACTIVE_MENU === "/combo" && { className: classes.activeMenu })}
            onClick={() => navigate("/combo")}
          >
            GÓI THUÊ BAO RAU
          </Typography>
          <Typography
            {...(ACTIVE_MENU === "/history" && {
              className: classes.activeMenu,
            })}
            onClick={() => navigate("/history")}
          >
            NHẬT KÝ
          </Typography>
          <Typography
            {...(ACTIVE_MENU === "/news" && { className: classes.activeMenu })}
            onClick={() => navigate("/news")}
          >
            TIN TỨC
          </Typography>
          <Typography
            {...(ACTIVE_MENU === "/login" && { className: classes.activeMenu })}
            onClick={() => navigate("/login")}
          >
            LOGIN
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
