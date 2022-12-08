import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import RoutesUnauth from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RoutesUnauth />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
