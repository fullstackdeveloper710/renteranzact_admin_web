import { Checkbox, Grid, Typography } from "@mui/material";
import React from "react";

const Amenities = () => {
  return (
    <div className="screen-transition">
      <Typography variant="h5">Anemities</Typography>
      <Grid container spacing={4} className="mt-1">
        <Grid item md={6}>
          <Checkbox />
          <span>Power Backup</span>
        </Grid>
        <Grid item md={6}>
          <Checkbox />
          <span>Lift</span>
        </Grid>
        <Grid item md={6}>
          <Checkbox />
          <span>Security</span>
        </Grid>
        <Grid item md={6}>
          <Checkbox />
          <span>Reserved Parking</span>
        </Grid>
        <Grid item md={6}>
          <Checkbox />
          <span>Visitor Parking</span>
        </Grid>
        <Grid item md={6}>
          <Checkbox />
          <span>Rain Water harvesting</span>
        </Grid>
        <Grid item md={6}>
          <Checkbox />
          <span>Water Storage</span>
        </Grid>
        <Grid item md={6}>
          <Checkbox />
          <span>Water Storage</span>
        </Grid>
      </Grid>
    </div>
  );
};

export default Amenities;
