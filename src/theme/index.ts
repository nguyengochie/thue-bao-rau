import { createTheme } from "@mui/material/styles";
import "../assets/font/NotoSerif-Regular.ttf";
import "../assets/font/NotoSerif-Bold.ttf";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: { boxSizing: "border-box", backgroundColor: "tomato" },
    },
  },

  palette: {
    primary: {
      main: "#7fb02a",
      dark: "#299039",
      light: "#6db90d40",
    },
  },
  typography: {
    fontFamily: ["Noto Serif, serif"].join(","),
  },
});
