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
import { listOfMonths } from "../../../sections/user/utils";

const Pricing = () => {
  return (
    <div className="screen-transition">
      <Typography variant="h5">Pricing</Typography>
      <Grid container spacing={4} className="mt-1">
        <Grid item md={6} xs={12} sm={6}>
          <TextField label="Rent" fullWidth />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Monthly</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Monthly"
            >
              {listOfMonths.map((x, i) => (
                <MenuItem key={i} value={x}>
                  {x}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField label="Service Charges" fullWidth />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField label="Caution Deposit" fullWidth />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pricing;
