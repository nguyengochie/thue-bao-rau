import React from "react";
import { Box } from "@mui/system";
import SlideBanner from "./SlideBanner";
import OurStory from "./Story";
import Packages from "./packages";
import ListProducts from "pages/combo/listProduct";
import ImageProduct from "./ImageProducts";

const index = () => {
  return (
    <Box>
      <SlideBanner />
      <OurStory />
      <ImageProduct />
      <Packages />
      <ListProducts />
    </Box>
  );
};
export default index;
