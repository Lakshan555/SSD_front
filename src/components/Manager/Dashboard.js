import { Grid, Link, Card, Stack, Button, Alert, Snackbar } from "@mui/material";
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
import { useEffect, useState } from "react";
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
// console.log(user.role);


const Dashboard = () => {

  const [userMessages, setUserMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState('');


  const fetchData = async () => {
    const response = await axios.get(`${BASE_URL}messages`);
    setUserMessages(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [fetchData])

  const onSubmit = async (e) => {
    e.preventDefault();
    try {

      const messageData = {
        staffId: user._id,
        message: message,
        uploadFile: file ? file : null
      };
      console.log('file ', file)
      const response = await axios.post(`${BASE_URL}messages`, { ...messageData }, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setOpen(!open);
      setShowMessage(response.data)
      setTimeout(() => {
        setOpen(false); setMessage('');
      }, 2000)
      console.log('user response ', response)
    } catch (error) {
      setShow(!show);
      setShowMessage(error.response.data);
      setTimeout(() => {
        setShow(false); setMessage('');
      }, 2000)
      // alert(error.response.data)
    }

  };
  return (
    <Grid m={2}>
      <Grid container md={12} spacing={2}>
        <Grid item md={4} padding={2}>
          <Card>
            <Grid textAlign="center" sx={{ background: "green" }}>
              Add Message
            </Grid>
            <Grid textAlign="center">
              <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="success">{showMessage}!</Alert>
              </Snackbar>
              <Snackbar open={show} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert severity="error">{showMessage}!</Alert>
              </Snackbar>
              {/* <Alert severity="success" sx={{ m: 2 }}>This is a success alert — check it out!</Alert> */}
            </Grid>
            <Grid sx={{ background: "grey" }}>
              <Grid p={5}>
                <form onSubmit={onSubmit} enctype="multipart/form-data">
                  <TextFieldComponent
                    label="Message"
                    name="message"
                    classes="form-field"
                    width="100%"
                    handleChange={(e) => setMessage(e.target.value)}
                    inputValue={message}
                  />
                  {user.role === "worker" && (
                    <TextFieldComponent
                      type='file'
                      name="fileUpload"
                      classes="form-field"
                      width="100%"
                      handleChange={(e) => { setFile(e.target.files[0]) }}
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
                {userMessages.length && userMessages.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.message}
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
                {userMessages.length && userMessages.map((row, index) => (
                  row.uploadFile ?
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {row.uploadFile}
                      </StyledTableCell>
                    </StyledTableRow>
                    : null
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
