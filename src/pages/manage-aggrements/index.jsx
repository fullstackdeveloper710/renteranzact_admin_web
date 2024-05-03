import React, { useState } from "react";
import Iconify from "../../components/iconify";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ManageAggrements = () => {
  const [aggrements] = useState([
    {
      name: "Rent aggrement",
      type: "Landlord",
    },
    {
      name: "Rent aggrement",
      type: "Renter",
    },
    {
      name: "Rent aggrement",
      type: "Property Manager",
    },
    {
      name: "Rent aggrement",
      type: "Landlord",
    },
  ]);
  return (
    <div className="px-5">
      <div className="d-flex justify-content-between align-items-center w-100 mt-4">
        <Typography variant="h4">Manage Aggrements</Typography>
        <FormControl sx={{ width: 300 }}>
            <InputLabel id="demo-simple-select-label">Filter Aggrements</InputLabel>
        <Select  label="Select">
          <MenuItem>Landlord</MenuItem>
          <MenuItem>Property Manager</MenuItem>
          <MenuItem>Renter</MenuItem>
        </Select>
        </FormControl>
      </div>

      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="mt-4">
        <TableHead>
          <TableRow>
            <TableCell align={"left"}>Name</TableCell>
            <TableCell align={"left"}>Type</TableCell>
            <TableCell align={"left"}>PDF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {aggrements.map((x, i) => {
            return (
              <TableRow key={i}>
                <TableCell align={"left"}>{x.name}</TableCell>
                <TableCell align={"left"}>{x.type}</TableCell>
                <TableCell align={"left"}>
                  <Iconify icon="vscode-icons:file-type-pdf2" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageAggrements;
