import React from "react";
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

const theme = createTheme();
const Login = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
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
                  label="Email Address"
                  inputName="email"
                  classes="form-field"
                  required
                  inputValue={values.email}
                  // handleChange={handleChange("email")}
                />
                <TextFieldComponent
                  label="Password"
                  inputName="password"
                  type="password"
                  classes="form-field"
                  required
                  inputValue={values.password}
                  // handleChange={handleChange("password")}
                />

                <Button
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
