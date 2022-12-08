import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    backgroundColor: "white",
    minHeight: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 80,
  },
  imgLogo: {
    width: "220px",
  },
  menuTabListContainer: {
    display: "flex",
    gap: "3rem",
    "&>p": { fontWeight: 500 },
  },
}));
