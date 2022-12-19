import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { theme } from "theme";
import { useStyles } from "./style";

const LIST_INFOR_P1 = [
  { key: "Mô tả", value: "Tối ưu cho 1 - 2 người" },
  { key: "Thời lượng", value: "01 tuần" },
  { key: "Khối lượng", value: "2kg rau củ, 500gr rau gia vị" },
  { key: "Chủng loại", value: "5 loại rau củ, 3 loại rau gia vị" },
  { key: "Giao nhận", value: "tận Văn phòng" },
];
const LIST_INFOR_P2 = [
  { key: "Mô tả", value: "Tối ưu cho 1 - 2 người" },
  { key: "Thời lượng", value: "01 tuần" },
  { key: "Khối lượng", value: "3kg rau củ,500gr rau gia vị" },
  { key: "Chủng loại", value: "10 loại rau củ, 6 loại rau gia vị" },
  { key: "Giao nhận", value: "Tại cửa hàng, vào buổi sáng" },
];
const LIST_INFOR_P3 = [
  { key: "Mô tả", value: "Tối ưu cho gia đình từ 3 - 4 người" },
  { key: "Thời lượng", value: "01 tuần" },
  { key: "Khối lượng", value: "4kg rau củ, 500 gr rau gia vị" },
  { key: "Chủng loại", value: "10 loại rau củ, 6 loại rau gia vị" },
  { key: "Giao nhận", value: "Tại cửa hàng, vào buổi sáng" },
];
const LIST_INFOR_P4 = [
  { key: "Mô tả", value: "Tối ưu cho gia đình từ 3 - 4 người" },
  { key: "Thời lượng", value: "01 tuần" },
  { key: "Khối lượng", value: "5kg rau củ, 700 gr rau gia vị" },
  { key: "Chủng loại", value: "15 loại rau củ, 9 loại rau gia vị" },
  { key: "Giao nhận", value: "Tại cửa hàng, vào buổi sáng" },
];

const GOI_1 = {
  name: "Gói P1 basic",
  description:
    "Dành cho người nội trợ đơn giản, hướng đến bữa ăn đơn giản, tiết kiệm thời gian",
  price: "299.000",
  info: LIST_INFOR_P1,
};
const GOI_2 = {
  name: "Gói P1 advance",
  description: `Dành cho người nội trợ có nhiều thời gian chuẩn bị hơn
    mỗi bữa có từ 2 món chính trở lên`,
  price: "399.000",
  info: LIST_INFOR_P2,
};
const GOI_3 = {
  name: "Gói P2 basic",
  description: `Dành cho người nội trợ đơn giản, hướng đến bữa ăn đơn giản, tiết kiệm thời gian`,
  price: "499.000",
  info: LIST_INFOR_P3,
};
const GOI_4 = {
  name: "Gói P2 advance",
  description: `Dành cho người nội trợ có nhiều thời gian chuẩn bị hơn
  mỗi bữa có từ 2 món chính trở lên`,
  price: "699.000",
  info: LIST_INFOR_P4,
};

const Packages = () => {
  const classes = useStyles();

  const renderInfor = (info: any) => {
    return info.map((item: any) => {
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

  const renderPackage = (
    { name, description, price, info }: any,
    bgColor: string,
    isActivePrice?: boolean
  ) => {
    return (
      <Box
        bgcolor={bgColor}
        style={{
          height: "100%",
          boxSizing: "border-box",
          color: "#34343c",
          paddingBottom: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
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
            {description}
          </Typography>
          <Typography
            style={{
              fontSize: 45,
              fontWeight: "bold",
              ...(isActivePrice && { color: theme.palette.primary.main }),
            }}
          >
            {price}
            <span style={{ fontWeight: 400, fontSize: 22 }}>/Tuần</span>
          </Typography>
        </Box>
        <Box style={{ padding: "10px 30px" }}>{renderInfor(info)}</Box>
        <Button
          variant="contained"
          style={{
            fontFamily: "Roboto,sans-serif",
            color: "#ffff",
            width: "fit-content",
          }}
          color="primary"
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
        minHeight: "100%!important",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "#ffff",
          marginTop: 50,
        }}
      >
        GÓI THUÊ BAO RAU
      </Typography>
      <Box
        display="flex"
        style={{ padding: "100px 0", justifyContent: "center", gap: "15px" }}
      >
        <Box className={classes.box}>{renderPackage(GOI_1, "#f7f8fa")}</Box>

        <Box className={classes.box2}>
          {renderPackage(GOI_2, theme.palette.primary.light, true)}
        </Box>

        <Box className={classes.box}>{renderPackage(GOI_3, "#f7f8fa")}</Box>

        <Box className={classes.box2}>
          {renderPackage(GOI_4, theme.palette.primary.light, true)}
        </Box>
      </Box>
    </Box>
  );
};
export default Packages;
