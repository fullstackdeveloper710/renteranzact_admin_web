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
  InputAdornment,
  OutlinedInput,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import Iconify from "../../components/iconify";
import { Button } from "@mui/material";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import ConfirmationDialog from "../../components/dialog/ConfirmationDialog";
// ----------------------------------------------------------------------
export default function UserPage() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [filterName, setFilterName] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [deleteDialog, setDeleteDialog] = useState(false);
  // const handleSort = (event, id) => {
  //   const isAsc = orderBy === id && order === 'asc';
  //   if (id !== '') {
  //     setOrder(isAsc ? 'desc' : 'asc');
  //     setOrderBy(id);
  //   }
  // };
  // const handleSelectAllClick = (event) => {
  //   if (event.target.checked) {
  //     const newSelecteds = users.map((n) => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];
  //   if (selectedIndex === -1) {
  //     newSelected = newSelected.concat(selected, name);
  //   } else if (selectedIndex === 0) {
  //     newSelected = newSelected.concat(selected.slice(1));
  //   } else if (selectedIndex === selected.length - 1) {
  //     newSelected = newSelected.concat(selected.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1)
  //     );
  //   }
  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  // const handleFilterByName = (event) => {
  //   setPage(0);
  //   setFilterName(event.target.value);
  // };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  const employees = Array(rowsPerPage).fill({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    // joiningDate: faker.date.birthdate(),
    role: faker.person.fullName(),
    status: faker.string.sample(),
    action: faker.string.sample(),
  });
  const tableColumns = [
    "Name",
    "Email",
    "Mobile",
    "Joining Date",
    "Role",
    "Status",
    "Action",
  ];

  const navigate = useNavigate();

  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Manage Employees</Typography>

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
        {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button> */}
      </Stack>

      <Card>
        {/* <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        /> */}

        <div className="d-flex justify-content-between align-items-center p-4">
          <OutlinedInput
            placeholder="Search user..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />

          <Button
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => navigate("/manage-employees/add-employees")}
            className="global-button"
          >
            Add Employee
          </Button>
        </div>

        {/* <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}> */}
        <Table sx={{ minWidth: 800 }}>
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
                  <TableCell>{x.name}</TableCell>
                  <TableCell>{x.email}</TableCell>
                  <TableCell>{x.phone}</TableCell>
                  <TableCell>
                    {moment(x.joiningDate).format("YYYY/DD/MM")}
                  </TableCell>
                  <TableCell>
                    {i % 2 === 0 ? "Property Manager" : "Landlord"}
                  </TableCell>
                  <TableCell>
                    {i % 2 === 0 ? "Verified" : "Not Verified"}
                  </TableCell>
                  <TableCell>
                    <Iconify
                      onClick={() => navigate("/employee")}
                      icon="solar:eye-linear"
                    />
                    &nbsp;
                    <Iconify
                      onClick={() => setDeleteDialog(true)}
                      icon="mingcute:delete-line"
                    />
                  </TableCell>
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
        {/* </TableContainer>
        </Scrollbar> */}

        {/* <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}

        <ConfirmationDialog
          open={deleteDialog}
          setDeleteDialog={setDeleteDialog}
          title={"Are you sure you want to delete?"}
        />
      </Card>
    </div>
  );
}
