import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Document } from "./manage-aggrements&documents";

const LeaseAggrements = () => {
  return (
    <div className="px-5">
      <div className="d-flex justify-content-between align-items-center mt-4">
        <Typography variant="h4">Lease Aggrements</Typography>

        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel htmlFor="grouped-select">Lease aggrements</InputLabel>
          <Select
            defaultValue={2}
            value={"approved"}
            id="grouped-select"
            label="Lease aggrements"
          >
            <MenuItem value="2">
              <em>None</em>
            </MenuItem>

            <MenuItem value={"approved"}>Approved</MenuItem>
            <MenuItem value={"rejected"}> Rejected</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Grid container spacing={4} className="mt-3">
        <Grid item md={3}>
          <Document />
        </Grid>
        <Grid item md={3}>
          <Document />
        </Grid>
        <Grid item md={3}>
          <Document />
        </Grid>
        <Grid item md={3}>
          <Document />
        </Grid>
      </Grid>
    </div>
  );
};

export default LeaseAggrements;
