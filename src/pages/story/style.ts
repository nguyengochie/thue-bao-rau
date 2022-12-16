import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "background-attachment": "fixed!important",
    "&:before": {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      width: "100%",
      height: "100%",
      background: "rgba(52, 52, 60, 0.6)",
      content: "' '",
    },
  },
  tabSelected: {
    background: `${theme.palette.primary.dark} !important`,
    color: "#ffff",
  },
  tabRoot: {
    color: "#ffff !important",
    fontWeight: "bold !important",
    fontFamily: "Roboto !important",
    "text-transform": "inherit !important",
    fontSize: "18px !important",
    textAlign: "left",
  },
}));
