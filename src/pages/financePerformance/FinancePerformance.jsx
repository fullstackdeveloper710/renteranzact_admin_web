import { useState } from "react";

import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { users } from "../../_mock/user";
import Scrollbar from "../../components/scrollbar";
import TableEmptyRows from "../../sections/user/table-empty-rows";
import {
  emptyRows,
  applyFilter,
  getComparator,
} from "../../sections/user/utils";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TableNoData from "../../sections/user/table-no-data";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Iconify from "../../components/iconify";
import { Button } from "@mui/material";
import { faker } from "@faker-js/faker";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment/moment";
// ---------------------------------------------

export default function FinancePerformance() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  const months = ["January", "February"];

  const employees = Array(rowsPerPage).fill({
    id: faker.datatype.uuid(),
    month: months[Math.floor(Math.random() * months.length)],
  });
  const tableColumns = [
    "Month",
    "Cautioin Fee",
    "Rent Fee",
    "Legal Fee",
    "Service Charges",
    "Agenecy Fee",
    "Transaction fee",
  ];
  const revenueGenrateColumn = ["Month", "Revenue Regenrated"];
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Finance Performance</Typography>
        <div className="d-flex">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="From Date" />
            </DemoContainer>
          </LocalizationProvider>
          &nbsp;&nbsp;
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="To Date" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </Stack>

      <Typography variant="h5">Collected Amount</Typography>
      <Grid
        container
        gap={2}
        // className="mt-4"
        // direction={"row"}
        // alignItems={"center"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Grid item md={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Monthly</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              fullWidth
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Monthly</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={3} style={{ alignSelf: "flex-start" }} mb={1}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DatePicker"]}
              sx={{ overflowX: "hidden" }}
            >
              <DatePicker sx={{ width: "100%" }} label="11/11/23" />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item md={2}>
          <Link>Clear Filters</Link>
        </Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            color="inherit"
            className="global-button"
            startIcon={<Iconify icon="eva:download-fill" />}
            size="large"
            fullWidth
          >
            Download
          </Button>
        </Grid>
      </Grid>

      <Table sx={{ minWidth: 800, mt: 4 }} className="table-bordered">
        <TableHead>
          <TableRow>
            {tableColumns.map((x, i) => {
              return <TableCell key={i}>{x}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((x, i) => {
            return (
              <TableRow key={i}>
                <TableCell>{x.month}</TableCell>
                <TableCell>40000</TableCell>
                <TableCell>20000</TableCell>
                <TableCell>100000</TableCell>
                <TableCell>50000</TableCell>
                <TableCell>60000</TableCell>
                <TableCell>70000</TableCell>
              </TableRow>
            );
          })}
          <TableEmptyRows
            height={77}
            emptyRows={emptyRows(page, rowsPerPage, users.length)}
          />
          {notFound && <TableNoData query={filterName} />}
        </TableBody>
      </Table>

      <div className="d-flex">
        <Table sx={{ minWidth: 700, mt: 4 }} className="table-bordered">
          <TableHead>
            <TableRow>
              {revenueGenrateColumn.map((x, i) => {
                return <TableCell key={i}>{x}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((x, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{x.month}</TableCell>
                  <TableCell>40000</TableCell>
                </TableRow>
              );
            })}
            <TableEmptyRows
              height={77}
              emptyRows={emptyRows(page, rowsPerPage, users.length)}
            />
            {notFound && <TableNoData query={filterName} />}
          </TableBody>
        </Table>

        <Table sx={{ minWidth: 400, mt: 4 }} className="table-bordered">
          <TableHead>
            <TableRow>
              {revenueGenrateColumn.map((x, i) => {
                return <TableCell key={i}>{x}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((x, i) => {
              return (
                <TableRow key={i}>
                  <TableCell>{x.month}</TableCell>
                  <TableCell>40000</TableCell>
                </TableRow>
              );
            })}
            <TableEmptyRows
              height={77}
              emptyRows={emptyRows(page, rowsPerPage, users.length)}
            />
            {notFound && <TableNoData query={filterName} />}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
