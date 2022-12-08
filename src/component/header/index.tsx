import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.headerContainer}>
      <Box className={classes.headerContent}>
        <Box>
          <img
            className={classes.imgLogo}
            src="https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/logo_ngang.png"
            alt=""
          />
        </Box>
        <Box className={classes.menuTabListContainer}>
          <Typography>TRANG CHỦ</Typography>
          <Typography>CHUYỆN P FARM</Typography>
          <Typography>GÓI THUÊ BAO RAU</Typography>
          <Typography>ĐẶT HÀNG</Typography>
          <Typography>NHẬT KÝ</Typography>
          <Typography>SỔ TAY</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
