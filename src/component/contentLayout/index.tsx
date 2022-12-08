import { Box } from "@mui/material";
import React from "react";
import { useStyles } from "./style";

const ContentLayout = ({ children }: any) => {
  const classes = useStyles();

  return <Box className={classes.root}>{children}</Box>;
};
export default ContentLayout;
