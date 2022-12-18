import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Login = () => {
  return (
    <Box
      style={{
        backgroundColor: "#f7f8fa",
        textAlign: "center",
        minHeight: "calc(100vh - 80px)",
        padding: "100px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        width="500px"
        gap="10px"
        style={{
          backgroundColor: "#ffff",
          height: "fit-content",
          padding: "30px",
        }}
      >
        <Typography variant="h5" component="h2" fontWeight="bold">
          ĐĂNG NHẬP
        </Typography>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />
        <Typography
          fontSize="14px"
          style={{
            alignSelf: "start",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Đăng ký
        </Typography>
        <Button variant="outlined">Đăng nhập</Button>
      </Box>
    </Box>
  );
};
export default Login;
