import { Box, Grid } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  carrier: string,
  planType: string,
  dataStatus: string,
  sbcAvailable: string,
  dataSource: string
) {
  return { carrier, planType, dataStatus, sbcAvailable, dataSource };
}

const rows = [
  createData("Allstate benefits", "ACA", "Live", "Yes", "Carrier direct"),
  createData(
    "Blue Cross Blue Shield of Texas",
    "ACA",
    "Live",
    "Yes",
    "Carrier validated"
  ),
  createData(
    "Memorial Hermann Health Plan, Inc.",
    "Level Funded",
    "Live",
    "Yes",
    "Carrier direct"
  ),
];

const TableMui: React.FunctionComponent = () => {
  return (
    <Grid width={"80%"} margin={" 70px auto"}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.carrier}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.carrier}
                </TableCell>

                <TableCell align="right">{row.planType}</TableCell>
                <TableCell align="right">{row.dataStatus}</TableCell>
                <TableCell align="right">{row.sbcAvailable}</TableCell>
                <TableCell align="right">{row.dataSource}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TableMui;
