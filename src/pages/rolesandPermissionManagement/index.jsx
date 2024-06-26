import {
  Button,
  Card,
  InputAdornment,
  OutlinedInput,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Iconify from "../../components/iconify/iconify";
import DataTable from "../../components/table/table";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import TableEmptyRows from "../../sections/user/table-empty-rows";
import ConfirmationDialog from "../../components/dialog/ConfirmationDialog";
import TableContainerComponent from "../../components/TableContainerComponent";

export default function ManageRolesAndPermission() {
  const navigate = useNavigate();
  const [deleteDialog, setDeleteDialog] = useState(false);
  const columns = [
    {
      field: "roleName",
      headerName: "Role Name",
      width: 350,
      editable: true,
    },
    {
      field: "permissions",
      headerName: "Permissions",
      width: 350,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 350,
      editable: true,
    },
  ];
  const rows = [
    { id: 1, roleName: "Snow", permissions: "Jon", action: 14 },
    { id: 2, roleName: "Water", permissions: "aulhak", action: 14 },
    { id: 3, roleName: "Heat", permissions: "iop", action: 14 },
  ];
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography className="mt-3" variant="h4">
          Roles & Permissions Management
        </Typography>

        <div className="d-flex">
          <div></div>
          &nbsp;&nbsp;
          <div></div>
        </div>
        {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          New User
        </Button> */}
      </Stack>

      <Card>
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
            onClick={() =>
              navigate("/add-new-roles-and-permissions-management")
            }
            className="global-button"
          >
            Add New Role
          </Button>
        </div>
        <TableContainerComponent>
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <TableCell>Role Name</TableCell>
                <TableCell>Permissions</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{"Reviewer Admin"}</TableCell>
                <TableCell>
                  <p>
                    <b>
                      Manage Users,Manage Property Listing Requests
                      (Approve/Reject),Manage
                      <br />
                      Review & ratings (Approve/Remove/Publish){" "}
                    </b>
                  </p>
                </TableCell>

                <TableCell>
                  <Iconify
                    icon="bx:edit"
                    onClick={() =>
                      navigate("/add-new-roles-and-permissions-management")
                    }
                  />
                  &nbsp;
                  <Iconify
                    onClick={() => setDeleteDialog(true)}
                    icon="mingcute:delete-line"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{"Legal Admin"}</TableCell>
                <TableCell>
                  <p>
                    <b>
                      {" "}
                      Manage Property related documents <br />
                      (Approve/Reject/Request more documents)
                    </b>
                  </p>
                </TableCell>

                <TableCell>
                  <Iconify
                    icon="bx:edit"
                    onClick={() =>
                      navigate("/add-new-roles-and-permissions-management")
                    }
                  />
                  &nbsp;
                  <Iconify
                    onClick={() => setDeleteDialog(true)}
                    icon="mingcute:delete-line"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{"Finance Admin"}</TableCell>
                <TableCell>
                  <p>
                    <b>
                      {" "}
                      Manage transactions (Download),Finance
                      <br />
                      Performance (Download)
                    </b>
                  </p>
                </TableCell>

                <TableCell>
                  <Iconify
                    icon="bx:edit"
                    onClick={() =>
                      navigate("/add-new-roles-and-permissions-management")
                    }
                  />
                  &nbsp;
                  <Iconify
                    onClick={() => setDeleteDialog(true)}
                    icon="mingcute:delete-line"
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{"Super Admin"}</TableCell>
                <TableCell>
                  <p>
                    <b>
                      {" "}
                      User Management ,Manage Employees,Manage Property Manage
                      Roles & Permissions Review & Rating Management
                      (Approve/Reject/Publish/Remove)
                      <br /> Finance Performance (Download),Manage Transactions
                      (Download),Activity Log (View)
                    </b>
                  </p>
                </TableCell>

                <TableCell>
                  <Iconify
                    icon="bx:edit"
                    onClick={() =>
                      navigate("/add-new-roles-and-permissions-management")
                    }
                  />
                  &nbsp;
                  <Iconify
                    onClick={() => setDeleteDialog(true)}
                    icon="mingcute:delete-line"
                  />
                </TableCell>
              </TableRow>

              {/* <TableEmptyRows
                  height={77}
                  emptyRows={emptyRows(page, rowsPerPage, users.length)}
                />
                {notFound && <TableNoData query={filterName} />} */}
            </TableBody>
          </Table>
        </TableContainerComponent>
      </Card>
      {deleteDialog && (
        <ConfirmationDialog
          open={deleteDialog}
          setDeleteDialog={setDeleteDialog}
          title={"Are you sure you want to delete?"}
        />
      )}
    </div>
  );
}
