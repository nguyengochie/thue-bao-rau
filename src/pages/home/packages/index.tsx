import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./style";

const LIST_INFOR = [
  { key: "Thời lượng", value: "01 tuần" },
  { key: "Khối lượng", value: "~ 10 kg/tuần" },
  { key: "Số lượng", value: "~ 05 kg/hộp" },
  { key: "Trọng lượng", value: "~ 05 kg/hộp" },
  { key: "Tần suất", value: "02 hộp/tuần (03 ngày/hộp)" },
  { key: "Chủng loại", value: "10 Rau gia vị, 8 Rau ăn chính" },
  { key: "Giao nhận", value: "tận Văn phòng" },
];

const Packages = () => {
  const classes = useStyles();

  const renderInfor = () => {
    return LIST_INFOR.map((item) => {
      return (
        <Typography
          style={{
            fontWeight: "bold",
            fontSize: 15,
            fontFamily: "Roboto,sans-serif",
            lineHeight: "30px",
          }}
        >
          {item.key}: <span style={{ fontWeight: 400 }}>{item.value}</span>
        </Typography>
      );
    });
  };

  const renderPackage = (name: string, bgColor: string) => {
    return (
      <Box
        bgcolor={bgColor}
        style={{
          height: "100%",
          boxSizing: "border-box",
          color: "#34343c",
        }}
      >
        <Box
          style={{
            padding: "30px 0",
            margin: "0px 30px",
            boxSizing: "border-box",
            letterSpacing: "normal",
            borderBottom: "2px solid #fff",
          }}
        >
          <Typography
            style={{ fontSize: 24, fontWeight: 700, margin: "0 0 5px" }}
          >
            {name}
          </Typography>
          <Typography
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "#333",
              marginBottom: 20,
            }}
          >
            Tối ưu 01 gia đình 3-4 người/tuần
          </Typography>
          <Typography style={{ fontSize: 45, fontWeight: "bold" }}>
            499.000
            <span style={{ fontWeight: 400, fontSize: 22 }}>/Tuần</span>
          </Typography>
        </Box>
        <Box style={{ padding: 30 }}>{renderInfor()}</Box>
        <Button
          variant="contained"
          style={{
            fontFamily: "Roboto,sans-serif",
            backgroundColor: "#34343c",
          }}
        >
          Đặt Hàng
        </Button>
      </Box>
    );
  };

  return (
    <Box
      className={classes.root}
      style={{
        height: "100vh",
        backgroundColor: "orange",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        position: "relative",
        zIndex: 1,
        background:
          "url(https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/bg_v10-min.jpg) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
        paddingTop: 50,
        minHeight: "100%!important",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        style={{ fontSize: 28, fontWeight: "bold", color: "#ffff" }}
      >
        GÓI THUÊ BAO RAU
      </Typography>
      <Box
        display="flex"
        style={{ padding: "100px 0", justifyContent: "center" }}
      >
        <Box
          style={{
            minHeight: 580,
            width: 390,
            border: "2px solid #159bd3",
            boxShadow: "0 2px 5px 3px #eff1f8",
            padding: 10,
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          {renderPackage("Gói P1", "#f7f8fa")}
        </Box>

        <Box
          style={{
            minHeight: 600,
            width: 390,
            backgroundColor: "#ffff",
            border: "2px solid #159bd3",
            boxShadow: "0 2px 5px 3px #eff1f8",
            textAlign: "center",
            padding: 10,
          }}
        >
          {renderPackage("Gói P2", "#d7effdbf")}
        </Box>

        <Box
          style={{
            minHeight: 580,
            width: 390,
            border: "2px solid #159bd3",
            boxShadow: "0 2px 5px 3px #eff1f8",
            padding: 10,
            textAlign: "center",
            boxSizing: "border-box",
          }}
        >
          {renderPackage("Gói P3", "#f7f8fa")}
        </Box>
      </Box>
    </Box>
  );
};
export default Packages;
