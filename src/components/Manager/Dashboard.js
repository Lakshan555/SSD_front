import { Grid, Link, Card, Stack, Button } from "@mui/material";
import TextFieldComponent from "../Common/TextFieldComponent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { BASE_URL } from "../../constant";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const staffData = [{ sid: "ID100" }, { sid: "ID100" }];

//get user data
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.role);




const Dashboard = () => {

  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const messageData = {
      message:message,
      uploadFile:file
    };
  
    const response = await axios.post(`${BASE_URL}messages`, {
      ...messageData
    });
    console.log(response.data)
   
  };
  return (
    <Grid m={2}>
      <Grid container md={12} spacing={2}>
        <Grid item md={4} padding={2}>
          <Card>
            <Grid textAlign="center" sx={{ background: "green" }}>
              Add Message
            </Grid>
            <Grid sx={{ background: "grey" }}>
              <Grid p={5}>
              <form onSubmit={onSubmit} enctype="multipart/form-data">
                <TextFieldComponent
                  label="Message"
                  name="message"
                  classes="form-field"
                  width="100%"
                  required
                  handleChange={(e) => setMessage(e.target.value)}
                  inputValue={message}
                />
                {user.role === "worker" && (
                  <TextFieldComponent
          
                    name="file"
                    classes="form-field"
                    width="100%"
                    type='file'
                    required
                    handleChange={(e) => setFile(e.target.files[0])}
                   
                  />
                )}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
                </form>
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item md={4}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ width: "50%" }}>
                    Messages
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffData.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {row.sid}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={4}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ width: "50%" }}>
                    File Type
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffData.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {row.sid}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
