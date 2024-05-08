import {
  Grid,
  TextField,
  Button,
  Typography,
  Tabs,
  Tab,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import React, { useState } from "react";
import Iconify from "../../components/iconify";
import { useNavigate } from "react-router-dom";
let tabFontSize = { fontSize: 25 };
const FAQ = () => {

  const navigate = useNavigate()
  const TableComponent = () => (
    <Table sx={{ minWidth: 650 }} aria-label="simple table" className="mt-4">
      <TableHead>
        <TableRow>
          <TableCell align="left">Question</TableCell>
          <TableCell align="left">Answer</TableCell>
          <TableCell align="left">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry?
          </TableCell>
          <TableCell align="left">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </TableCell>
          <TableCell align="left">
            <Iconify icon="tabler:edit" />
            &nbsp;
            <Iconify icon="mingcute:delete-line" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
  const [tab, setTab] = useState("general");
  return (
    <div className="px-5">
      <Typography className="mt-3" variant="h4">
        Manage FAQ's
      </Typography>
      <div className="d-flex justify-content-center align-items-center">
        <Tabs
          className="mt-4"
          value={tab}
          onChange={(e, value) => setTab(value)}
        >
          <Tab style={tabFontSize} value={"general"} label="General" />
          <Tab style={tabFontSize} value={"service"} label="Service" />
          <Tab style={tabFontSize} value={"payments"} label="Payments" />
          <Tab style={tabFontSize} value={"rent"} label="Rent" />
          <Tab style={tabFontSize} value={"addProperty"} label="Add Property" />
          <Tab style={tabFontSize} value={"refund"} label="Refund" />
        </Tabs>
      </div>
      <div className="d-flex justify-content-end mt-3">

      <Button className="global-button" onClick={() => navigate('/add-faq')}  variant="contained" size="medium">
        Add
      </Button>

      </div>

      <TableComponent />
    </div>
  );
};

export default FAQ;
