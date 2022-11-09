import React, { useState } from "react";
import { Grid, Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextFieldComponent from "./TextFieldComponent";
import axios from "axios";
import { BASE_URL } from "../../constant";

const theme = createTheme();
const Login = () => {
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(nic, password);
  };

  const onLoginPress = async () => {
    const response = await axios.post(`${BASE_URL}users/login`, {
      NIC: nic,
      password,
    });

    console.log(response.data);

    if (response.data.isSuccessful) {
       localStorage.setItem("userToken", response.data.token);
       localStorage.setItem("user", JSON.stringify(response.data.user));
      if(response.data.user.role === 'admin'){
        window.location = "/viewStaff";
      }
      else{
        window.location = "/mDashboard";
      }
    }
    alert(response.data.message);
  };

  return (
    <>
      <ThemeProvider theme={theme} sx={{ marginTop: 50 }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: 2,
              padding: "30px 40px",
              borderRadius: 5,
            }}
            className="login"
          >
            <Avatar sx={{ m: 1, width: 90, height: 90 }}>
              <AccountCircleIcon sx={{ width: 85, height: 85 }} />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box sx={{ mt: 1 }}>
                <TextFieldComponent
                  label="NIC"
                  inputName="nic"
                  classes="form-field"
                  required
                  inputValue={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
                <TextFieldComponent
                  label="Password"
                  inputName="password"
                  type="password"
                  classes="form-field"
                  required
                  inputValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  onClick={onLoginPress}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Login;
