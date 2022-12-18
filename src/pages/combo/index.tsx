import { Box } from "@mui/system";
import Packages from "pages/home/packages";
import React from "react";
import ListProducts from "./listProduct";

const Combo = () => {
  return (
    <Box>
      <Box
        style={{
          display: "block",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
          src="https://pfarm.vn/wp-content/themes/pfarm/assets/img/pfarm/mockup-2-bg-min.jpg"
          alt=""
        />
      </Box>
      <Packages />
      <ListProducts />
    </Box>
  );
};
export default Combo;
