import { Paper, TableContainer } from "@mui/material";
import React from "react";

const TableContainerComponent = ({ children }) => {
  return <TableContainer component={Paper}>{children}</TableContainer>;
};

export default TableContainerComponent;
