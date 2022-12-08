import React from "react";
import { Button } from "@mui/material";
import logo from "../../logo.svg";

const index = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code>Home
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <Button variant="outlined">abc</Button>
      </header>
    </div>
  );
};
export default index;
