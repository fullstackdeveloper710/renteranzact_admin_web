import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

const AddCareers = () => {
  return (
    <div className="px-5">
      <Typography variant="h4">Manage Careers</Typography>

      <Grid container spacing={4} mt={3}>
        <Grid item md={6}>
          <TextField fullWidth label="Job Title" />
        </Grid>

        <Grid item md={6}>
          <TextField fullWidth type="number" label="No. of Openings" />
        </Grid>
        <Grid item md={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            type="text"
            label="Job Description"
          />
        </Grid>
      </Grid>
      <Button variant="contained" size="large" className="mt-4">
        Save
      </Button>
    </div>
  );
};

export default AddCareers;
