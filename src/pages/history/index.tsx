import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./style";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import { theme } from "theme";
import Product1 from "assets/image/rau9.jpeg";
import Product2 from "assets/image/rau2.jpeg";
import Product3 from "assets/image/rau3.jpeg";
import Product5 from "assets/image/rau5.jpeg";

const History = () => {
  const classes = useStyles();

  const imgProduct = (imageUrl: string) => {
    return (
      <Box
        style={{
          height: 50,
          width: 50,
          overflow: "hidden",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <img style={{ height: "100%" }} src={imageUrl} alt="" />
      </Box>
    );
  };

  const renderOrder = () => {
    return (
      <Card sx={{ minWidth: 275 }} style={{ marginBottom: 10, padding: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Lịch sử giao hàng
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap="20px"
          >
            <Typography variant="h5" component="div">
              Tháng 12 - Chuyến 03/4
            </Typography>
            <Box
              style={{
                backgroundColor: theme.palette.primary.main,
                width: "fit-content",
                borderRadius: "5px",
                padding: "0 10px",
                color: "#ffff",
              }}
            >
              <Typography fontWeight="bold" fontFamily="Roboto">
                Đang giao
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Thời gian dự kiến: 20/12/2022
          </Typography>
          <Typography variant="body2">
            Rau dự kiến: muống, ngót, cà chua
          </Typography>
          <Box>
            <Typography variant="body2">Gọi ý mua hàng: </Typography>
            <Box display="flex" gap="10px">
              {imgProduct(Product1)}
              {imgProduct(Product2)}
              {imgProduct(Product3)}
              {imgProduct(Product5)}
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">Xem chi tiết</Button>
        </CardActions>
      </Card>
    );
  };

  const renderItemCard = () => {
    return (
      <Box
        style={{
          backgroundColor: "#ffff",
          minHeight: 100,
          display: "flex",
          padding: 10,
          boxSizing: "border-box",
          gap: "10px",
          marginBottom: 10,
        }}
      >
        <Box
          style={{
            height: 80,
            width: 80,
            overflow: "hidden",
            borderRadius: 10,
            backgroundColor: "#ef7925",
          }}
        >
          <img
            style={{ height: "100%" }}
            src="https://tottuoi.com/uploads/san_pham/hat_giong_qua/ca_chua/do_chum_idyii/hat-giong-ca-chua-bi-chum-idyii-mau-do-cay-cao.jpg"
            alt=""
          />
        </Box>
        <Box style={{ position: "relative", flex: 1 }}>
          <Typography style={{ fontSize: 14, fontWeight: "bold" }}>
            Cà chua organic
          </Typography>
          <Typography style={{ fontSize: 12, fontStyle: "italic" }}>
            Cà chua được trồng từ trang trại sạch với tiêu chuẩn châu âu...
          </Typography>

          <Box display="flex" justifyContent="space-between">
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "fit-content",
                alignItems: "center",
              }}
            >
              <IconButton size="small" aria-label="delete">
                <RemoveRoundedIcon />
              </IconButton>
              <Typography>1</Typography>
              <IconButton size="small" aria-label="delete">
                <AddRoundedIcon />
              </IconButton>
            </Box>

            <Box display="flex" gap="5px" alignItems={"center"}>
              <Typography style={{ color: "red" }}>đ299.000</Typography>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      className={classes.root}
      style={{
        backgroundColor: "orange",
        display: "flex",
        justifyContent: "center",

        position: "relative",
        zIndex: 1,
        background:
          "url(https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/bg_v10-min.jpg) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 0%",
        minHeight: "100vh",
        boxSizing: "border-box",
        gap: "20px",
      }}
    >
      <Box
        style={{
          width: "50%",
          backgroundColor: "#ffffffd9",
          minHeight: "80vh",
          margin: "50px 0",
          padding: "20px",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          style={{
            textAlignLast: "center",
            marginBottom: "20px",
            fontSize: 28,
          }}
        >
          Nhật Ký Mua Hàng
        </Typography>
        {renderOrder()}
        {renderOrder()}
        {renderOrder()}
      </Box>
      <Box
        style={{
          width: "20%",
          backgroundColor: "#ffffffd9",
          minHeight: "80vh",
          margin: "50px 0",
          padding: "20px",
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          style={{
            textAlignLast: "center",
            marginBottom: "20px",
            fontSize: 28,
          }}
        >
          Giỏ Hàng
        </Typography>
        <Box>
          <Box
            style={{
              borderBottom: "1px solid black",
              marginBottom: 10,
              padding: 5,
            }}
          >
            <Typography>Sản phẩm mua kèm</Typography>
          </Box>
          {renderItemCard()}
          {renderItemCard()}
          {renderItemCard()}
        </Box>
        <Box>
          <Box
            style={{
              borderBottom: "1px solid black",
              marginBottom: 10,
              padding: 5,
            }}
          >
            <Typography>Thay đổi lượng rau</Typography>
          </Box>
          {renderItemCard()}
          {renderItemCard()}
          {renderItemCard()}
        </Box>
        <Typography
          fontSize={18}
          fontWeight="bold"
          style={{ marginTop: "20px" }}
        >
          Tổng tiền: <span style={{ color: "red" }}>1.794.000đ</span>
        </Typography>
      </Box>
    </Box>
  );
};
export default History;
