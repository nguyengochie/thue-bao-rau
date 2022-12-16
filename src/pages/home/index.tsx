import React from "react";
import { Box } from "@mui/system";
import SlideBanner from "./SlideBanner";
import OurStory from "./Story";
import Packages from "./packages";

const index = () => {
  return (
    <Box>
      <SlideBanner />
      <OurStory />
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
    </Box>
  );
};
export default index;
