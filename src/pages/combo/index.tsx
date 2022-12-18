import { Box } from "@mui/system";
import ImageProduct from "pages/home/ImageProducts";
import Packages from "pages/home/packages";
import React from "react";
import ListProducts from "./listProduct";

const Combo = () => {
  return (
    <Box>
      <ImageProduct />
      <Packages />
      <ListProducts />
    </Box>
  );
};
export default Combo;
