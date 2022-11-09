import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import TextFieldComponent from "../Common/TextFieldComponent";
import DropDown from "../Common/DropDown";

const AddStaff = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [role, setRole] = useState("");
  const [userType, setUserType] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const staffData = {
        sName: name,
        nic: nic,
        password: password,
        role: role,
    };

    // const res = await axios.post(`${BASE_URL}/staff/add`, { staffData });
    // if (res.status === 200) window.location.reload();
  };
  const userTypes = [
    { name: "Manager", value: "1" },
    { name: "Worker", value: "2" },
  ];

  const userTypeHandler = (event) => {
    setUserType(event.target.value);
  };

  return (
    <>
      <Grid m={10} md={12} xs={12}>
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            boxShadow: 2,
            padding: "30px 40px",
            borderRadius: 5,
          }}
          className="staffBox"
        >
          <h2>Add Staff details</h2>

          <form onSubmit={onSubmit}>
    
            <TextFieldComponent
              label="Name"
              name="name"
              classes="form-field"
              width="94%"
              required
              handleChange={(e) => setName(e.target.value)}
              inputValue={name}
            />
            <TextFieldComponent
              label="NIC"
              name="nic"
              classes="form-field"
              width="94%"
              required
              handleChange={(e) => setNic(e.target.value)}
              inputValue={nic}
            />
                <TextFieldComponent
              label="Password"
              name="password"
              classes="form-field"
              width="94%"
              required
              handleChange={(e) => setPassword(e.target.value)}
              inputValue={password}
            />
            <DropDown
              label="Select Role"
              tValue="Select Role"
              name="user_type"
              value={userType}
              minWidth="94%"
              onChange={userTypeHandler}
              options={userTypes}
            />

            {/* <TextFieldComponent
              name="description"
              classes="form-field"
              width="94%"
              type="file"
              required
            /> */}

            <Grid pt={3}>
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
    </>
  );
};

export default AddStaff;
