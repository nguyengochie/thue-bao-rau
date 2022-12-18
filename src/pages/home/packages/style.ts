import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "background-attachment": "fixed!important",
    "&:before": {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      width: "100%",
      height: "100%",
      background: "rgba(52, 52, 60, 0.6)",
      content: "' '",
    },
  },
  box: {
    minHeight: 580,
    width: 300,
    border: `2px solid ${theme.palette.primary.main}`,
    // boxShadow: "0 2px 5px 3px #eff1f8",
    padding: 10,
    textAlign: "center",
    boxSizing: "border-box",
  },
  box2: {
    minHeight: 600,
    width: 300,
    backgroundColor: "#ffff",
    border: `2px solid ${theme.palette.primary.main}`,
    // boxShadow: "0 2px 5px 3px #eff1f8",
    textAlign: "center",
    padding: 10,
    boxSizing: "border-box",
  },
}));
