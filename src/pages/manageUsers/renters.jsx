import { useState } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Typography from "@mui/material/Typography";
import PaginationComponent from "../../components/Pagination";
import TableContainerComponent from "../../components/TableContainerComponent";
import ConfirmationDialog from "../../components/dialog/ConfirmationDialog";
import TableNoData from "../../sections/user/table-no-data";
import UserTableHead from "../../sections/user/user-table-head";
import UserTableRow from "../../sections/user/user-table-row";
import UserTableToolbar from "../../sections/user/user-table-toolbar";
import { applyFilter, emptyRows, getComparator } from "../../sections/user/utils";
import TableEmptyRows from "../../sections/user/table-empty-rows";
import { users } from "../../_mock/user";
// ----------------------------------------------------------------------
let text = "";
export default function Renters() {
  const [page, setPage] = useState(0);

  const [deleteDialog, setDeleteDialog] = useState(false);
  const [disableUser, setDisableUser] = useState(false);

  const [order, setOrder] = useState("asc");

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === "asc";
    if (id !== "") {
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(id);
    }
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = users.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: users,
    comparator: getComparator(order, orderBy),
    filterName,
  });
  console.log("renterappdatafilter",dataFiltered)
  const notFound = !dataFiltered.length && !!filterName;

  const managePopupText = (checked) => {
    if (checked) {
      text = "Are you sure you want to enable this user?";
    } else {
      text = "Are you sure you want to disable this user?";
    }
  };

  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Renters</Typography>

        {/* <div className="d-flex">
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
        </div> */}
      </Stack>

      <Card>
        <UserTableToolbar
          numSelected={selected.length}
          filterName={filterName}
          onFilterName={handleFilterByName}
        />
        <TableContainerComponent>
          <Table sx={{ minWidth: 800 }}>
            <UserTableHead
              order={order}
              orderBy={orderBy}
              rowCount={users.length}
              numSelected={selected.length}
              onRequestSort={handleSort}
              onSelectAllClick={handleSelectAllClick}
              headLabel={[
                { id: "name", label: "Name" },
                { id: "email", label: "Email" },
                { id: "mobile", label: "Mobile No." },
                // { id: "userType", label: "User Type" },
                { id: "status", label: "Status" },
                { id: "action", label: "Action" },
              ]}
            />
            <TableBody>
              {dataFiltered
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <UserTableRow
                    key={row.id}
                    name={row.name}
                    email={row.email}
                    mobile={row.mobile}
                    // userType={row.status}
                    avatarUrl={row.avatarUrl}
                    selected={selected.indexOf(row.name) !== -1}
                    handleClick={(event) => handleClick(event, row.name)}
                    setDeleteDialog={setDeleteDialog}
                    setDisableUser={setDisableUser}
                    managePopupText={managePopupText}
                  />
                ))}

              <TableEmptyRows
                height={77}
                emptyRows={emptyRows(page, rowsPerPage, users.length)}
              />

              {notFound && <TableNoData query={filterName} />}
            </TableBody>
          </Table>
        </TableContainerComponent>

        {/* <TablePagination
          page={page}
          component="div"
          count={users.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
       <div className="p-3 d-flex justify-content-center align-items-center">
        <PaginationComponent />
        </div> 

        {deleteDialog && (
          <ConfirmationDialog
            open={deleteDialog}
            setDeleteDialog={setDeleteDialog}
            title={"Are you sure you want to delete this user?"}
          />
        )}
        {/* {disableUser && ( */}
          <ConfirmationDialog
            open={disableUser}
            setDeleteDialog={setDisableUser}
            managePopupText={managePopupText}
            yes={() => setDisableUser(false)}
            title={text}
          />
        {/* )} */}
      </Card>
    </div>
  );
}
