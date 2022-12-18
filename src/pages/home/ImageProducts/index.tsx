import React from "react";
import { Box } from "@mui/system";
import Img1 from "assets/image/img1.jpeg";
import Img2 from "assets/image/image2.jpeg";
import Img3 from "assets/image/image3.jpeg";
import Img4 from "assets/image/image4.jpeg";
import { theme } from "theme";

const ImageProduct = () => {
  return (
    <Box
      style={{
        display: "flex",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        minHeight: "80vh",
        alignItems: "center",
        gap: "15px",
        padding: "50px",
        borderTop: "1px solid #e5e5e5",
        backgroundColor: theme.palette.primary.light,
      }}
    >
      <Box style={{ height: "50%" }}>
        <img
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
          src={Img1}
          alt=""
        />
      </Box>
      <Box style={{ height: "50%" }}>
        <img
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
          src={Img2}
          alt=""
        />
      </Box>
      <Box style={{ height: "50%" }}>
        <img
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
          src={Img3}
          alt=""
        />
      </Box>
      <Box style={{ height: "50%" }}>
        <img
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
          src={Img4}
          alt=""
        />
      </Box>
    </Box>
  );
};
export default ImageProduct;
