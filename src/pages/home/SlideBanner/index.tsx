import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./style";

const BG_SLIDER =
  "https://img.freepik.com/premium-photo/healthy-food-background-autumn-fresh-vegetables-dark-stone-table-with-copy-space-top-view_127032-1954.jpg?w=2000";
const SlideBanner = () => {
  const classes = useStyles();

  return (
    <Box
      style={{
        height: "calc(100vh - 80px)",
      }}
    >
      <Box
        style={{
          height: "calc(100vh - 160px)",
          background: `url('${BG_SLIDER}') no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
        className={classes.root}
      >
        <Box
          style={{
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            component="h2"
            style={{
              fontSize: "60px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Chào mừng bạn đến với
          </Typography>
          <Typography
            component="h2"
            style={{
              fontSize: "50px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Freshmarket x VinID
          </Typography>
          <Typography
            component="h2"
            style={{
              fontFamily: "Raleway",
              color: "#ffff",
              fontSize: "13px",
              wordSpacing: 3,
            }}
          >
            f r e s h m a r k e t
          </Typography>
        </Box>
      </Box>
      <Box
        style={{
          height: "80px",
          backgroundColor: "rgb(128, 178, 42)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffff",
          gap: 20,
          zIndex: 1,
        }}
      >
        <Typography
          component="h2"
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          Muốn "Tâm Vui Vẻ", Chọn "Rau Sức Khỏe"
        </Typography>

        <Button
          variant="contained"
          style={{
            color: "#3a3a44",
            backgroundColor: "#ffff",
            fontFamily: "Roboto",
          }}
        >
          Đặt hàng
        </Button>
      </Box>
    </Box>
  );
};
export default SlideBanner;
