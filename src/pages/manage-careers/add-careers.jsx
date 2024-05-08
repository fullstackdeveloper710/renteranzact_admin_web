import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Iconify from "../../components/iconify";

const AddCareers = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="d-flex align-items-center mt-3 gap-3">
        <Iconify icon="zondicons:arrow-left" onClick={() => navigate(-1)} />
        <Typography variant="h4">Add Careers</Typography>
      </div>
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
      <Button variant="contained" size="large" className="global-button mt-4">
        Save
      </Button>
    </div>
  );
};

export default AddCareers;
