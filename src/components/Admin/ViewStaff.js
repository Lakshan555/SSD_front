import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tableCellClasses } from "@mui/material/TableCell";
import { Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
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

const ViewStaff = () => {
  return (
    <>
      <div className="addmovie-body">
        <Grid md={12} xs={12} m={5}>
          <Grid container md={12} mb={2}>
            <Grid md={6}>
              <Button
                variant="contained"
                color="success"
                style={{ marginLeft: "auto" }}
                onClick={() => {
                  window.location = "/addStaff";
                }}
              >
                Add New Staff
              </Button>
            </Grid>
          </Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ width: "20%" }}>
                    Staff Id
                  </StyledTableCell>
                  <StyledTableCell sx={{ width: "20%" }}>Name</StyledTableCell>
                  <StyledTableCell sx={{ width: "20%" }}>NIC</StyledTableCell>
                  <StyledTableCell sx={{ width: "20%" }}>Role</StyledTableCell>
                  <StyledTableCell
                    sx={{ width: "20%" }}
                    align="center"
                  ></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {staffData.map((row) => (
                  <StyledTableRow key={row._id}>
                    <StyledTableCell component="th" scope="row">
                      {row.sid}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.sid}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.sid}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.sid}
                    </StyledTableCell>
                    <StyledTableCell
                      component="th"
                      scope="row"
                    ></StyledTableCell>
                    {/* <StyledTableCell align="center">
                      <Button
                        variant="outlined"
                        onClick={() => {
                          window.location = `/editMovie/${row._id}`;
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        style={{ margin: "10px" }}
                        // onClick={() => onDeletePress(row._id, row.movieName)}
                      >
                        Delete
                      </Button>
                    </StyledTableCell> */}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </div>
    </>
  );
};

export default ViewStaff;
