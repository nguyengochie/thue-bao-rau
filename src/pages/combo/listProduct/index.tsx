import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import Product1 from "assets/image/rau9.jpeg";
import Product2 from "assets/image/rau2.jpeg";
import Product3 from "assets/image/rau3.jpeg";
import Product4 from "assets/image/rau1.jpeg";
import Product5 from "assets/image/rau5.jpeg";
import Product6 from "assets/image/rau10.jpeg";
import Product7 from "assets/image/rau7.jpeg";
import Product8 from "assets/image/rau8.jpg";

const LIST_PRODUCTS = [
  { image: Product1, desc: "" },
  { image: Product2, desc: "" },
  { image: Product3, desc: "" },
  { image: Product4, desc: "" },
  { image: Product5, desc: "" },
  { image: Product6, desc: "" },
  { image: Product7, desc: "" },
  { image: Product8, desc: "" },
];
const ListProducts = () => {
  const mapProducts = () => {
    return LIST_PRODUCTS.map((item) => (
      <Grid item xs={3}>
        <Box
          style={{
            boxSizing: "border-box",
            maxHeight: "190px",

            overflow: "hidden",
          }}
        >
          <img style={{ width: "100%" }} src={item.image} alt="" />
        </Box>
      </Grid>
    ));
  };

  return (
    <Box
      style={{
        display: "block",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "60vh",
        padding: "50px 0",
      }}
    >
      <Typography style={{ fontSize: 28, fontWeight: "bold" }}>
        HÌNH ẢNH SẢN PHẨM
      </Typography>
      <Typography style={{ fontSize: 15, fontStyle: "italic" }}>
        Hình ảnh thực tế chụp từ trang trại
      </Typography>
      <Box style={{ padding: "30px", margin: "0 100px" }}>
        <Grid container spacing={2}>
          {mapProducts()}
        </Grid>
      </Box>
    </Box>
  );
};
export default ListProducts;
