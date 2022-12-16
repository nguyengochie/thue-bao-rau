import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(
  (theme: Theme) => ({
    wrapperContent: {
      width: "calc(100% / 3)",
      maxWidth: "350px",
      // display: "flex",
    },
    txtTitle: {
      fontSize: "45px !important",
      borderBottom: "1px dashed #ababab",
      lineHeight: "35px !important",
      paddingBottom: "10px",
    },
    txtSubtitle: {
      fontSize: "20px !important",
      marginTop: "3px !important",
      marginBottom: "10px !important",
      fontFamily: "Roboto,sans-serif !important",
      fontWeight: "bold !important",
    },
    txtContent: {
      lineHeight: 1.4,
      fontFamily: "Roboto,sans-serif !important",
      fontSize: 14,
    },
  }),
  { index: 1 }
);
