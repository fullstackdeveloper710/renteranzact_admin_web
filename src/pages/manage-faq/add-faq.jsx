import { Grid, TextField, Button, Typography } from "@mui/material";
import React from "react";

const AddFAQ = () => {
  return (
    <div className="px-5">
      <Typography variant="h4">Add FAQ's</Typography>
      <Grid container mt={3} spacing={4}>
        <Grid item md={12}>
          <TextField label="Question" fullWidth />
        </Grid>
        <Grid item md={12}>
          <TextField multiline rows={5} label="Answer" fullWidth />
        </Grid>
      </Grid>

      <Button variant="contained" size="large" className="mt-4">
        Save
      </Button>
    </div>
  );
};

export default AddFAQ;
