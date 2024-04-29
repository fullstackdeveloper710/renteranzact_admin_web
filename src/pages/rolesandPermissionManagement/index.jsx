import {
  Button,
  Card,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify/iconify";
import DataTable from "../../components/table/table";
import { useNavigate } from "react-router-dom";
import { renderActionsCell } from "@mui/x-data-grid";

export default function ManageRolesAndPermission() {
  const navigate = useNavigate();
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
        <Typography variant="h4">Roles & Permissions Mgt</Typography>
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

        <DataTable rows={rows} columns={columns} />
      </Card>
    </div>
  );
}
