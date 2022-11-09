import { TextField } from "@mui/material";
import React from "react";

const TextFieldComponent = ({
  inputName,
  id,
  classes,
  type,
  inputValue,
  label,
  handleChange,
}) => {
  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id={id}
      className={classes}
      label={label}
      name={inputName}
      value={inputValue}
      onChange={handleChange}
      type={type}
      autoComplete="false"
      sx={{
        "& label": {
          marginTop: "-15px",
          marginLeft: "10px",
          "&.Mui-focused": {
            marginTop: "-20px",
          },
          color: "lightGray",
        },
        input: {
          color: "white",
          margin: "2px 10px",
        },
      }}
      autoFocus
      variant="standard"
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};

export default TextFieldComponent;
