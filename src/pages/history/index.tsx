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

  const renderOrder = (isActive?: boolean) => {
    return (
      <Card
        sx={{ minWidth: 275 }}
        style={{
          marginBottom: 10,
          padding: 10,
          background: isActive ? theme.palette.primary.light : "#ffff",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Lịch sử giao hàng.
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
                backgroundColor: isActive
                  ? theme.palette.primary.main
                  : "#2a7fb0d1",
                width: "fit-content",
                borderRadius: "5px",
                padding: "0 10px",
                color: "#ffff",
              }}
            >
              <Typography fontWeight="bold" fontFamily="Roboto">
                {isActive ? "Đang giao" : "Sắp giao"}
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Thời gian dự kiến: 20/12/2022
          </Typography>
          <Typography variant="body2">
            Rau dự kiến: Rau lang, rau ngót, cà chua
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

  const renderItemCard = ({ img, name, desc }: any) => {
    return (
      <Box
        style={{
          // backgroundColor: "#ffff",
          minHeight: 100,
          display: "flex",
          padding: 10,
          boxSizing: "border-box",
          gap: "10px",
          marginBottom: 10,
          backgroundColor: theme.palette.primary.light,
          borderRadius: 5,
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
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
          <img style={{ height: "100%" }} src={img} alt="" />
        </Box>
        <Box style={{ position: "relative", flex: 1 }}>
          <Typography style={{ fontSize: 14, fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography style={{ fontSize: 12, fontStyle: "italic" }}>
            {desc}
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
        {renderOrder(true)}
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
          {renderItemCard({
            img: "https://meatdeli.com.vn/bitrix/templates/Meatdeli/img/bg2-liststore.jpg",
            name: "Thịt lợn sạch",
            desc: "Thịt sạch MeatDeli với công nghệ tiên tiến chuẩn Châu Âu siêu ngon, siêu sạch cho gia đình.",
          })}
          {renderItemCard({
            img: "https://product.hstatic.net/200000507665/product/hinh_web_thitheoga_500x500_0005s_0032_xuong_uc_ga_407aefcc2b494e559719ef590cccd3f7_grande.jpg",
            name: "Xương ức gà 500g",
            desc: "Xương ức gà có thể dùng để làm nước hầm xương với vị ngọt thanh và cung cấp nhiều dưỡng chất cho cơ thể. ",
          })}
          {renderItemCard({
            img: "https://product.hstatic.net/200000507665/product/sunheocatlat_nolabel_500x500_20974fcea72e4d8cb08b9c78ae272b7b_grande.jpg",
            name: "Sụn heo cắt lát 350g",
            desc: "Những miếng sụn giòn thơm ngon được cắt lát từ sụn sườn, sụn mặt trăng, sụn gối,… ",
          })}
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
          {renderItemCard({
            img: "https://tottuoi.com/uploads/san_pham/hat_giong_qua/ca_chua/do_chum_idyii/hat-giong-ca-chua-bi-chum-idyii-mau-do-cay-cao.jpg",
            name: "Cà chua organic",
            desc: "Cà chua được trồng từ trang trại sạch với tiêu chuẩn châu âu...",
          })}
          {renderItemCard({
            img: "https://product.hstatic.net/1000126467/product/05235599_1cbb6e28dfe74b83ba64ee51a5d1f58c_d740d4e0d80645198b9b07d0037307ba_grande.jpg",
            name: "Rau Lang",
            desc: "Rau Lang được trồng từ trang trại sạch với tiêu chuẩn châu âu...",
          })}
          {renderItemCard({
            img: "https://product.hstatic.net/1000126467/product/05235445_1431a6b9835143d6a8da0a2076593068_d4237e1a0bc44d838a9c4d5abc4a7168_master.jpg",
            name: "Rau Ngót",
            desc: "Rau Ngót được trồng từ trang trại sạch với tiêu chuẩn châu âu...",
          })}
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
