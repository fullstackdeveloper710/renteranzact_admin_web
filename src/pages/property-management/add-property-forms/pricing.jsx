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

const Pricing = () => {
  return (
    <div className="screen-transition">
      <Typography variant="h5">Pricing</Typography>
      <Grid container spacing={4} className="mt-1">
        <Grid item md={6}>
          <TextField label="Rent" fullWidth />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Rent Frequency
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Rent Frequency"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <TextField label="Service Charges" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Caution Deposit" fullWidth />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pricing;
