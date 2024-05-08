import { Grid, TextField, Button, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify";
import { useNavigate } from "react-router-dom";

const AddFAQ = () => {

  const navigate = useNavigate()
  return (
    <div className="px-5">
       <div className="d-flex align-items-center gap-3 mt-3">
        <Iconify icon="zondicons:arrow-left" onClick={() => navigate(-1)} />
        <Typography variant="h4">Add FAQ's</Typography>
      </div>
      <Grid container mt={3} spacing={4}>
        <Grid item md={12}>
          <TextField label="Question" fullWidth />
        </Grid>
        <Grid item md={12}>
          <TextField multiline rows={5} label="Answer" fullWidth />
        </Grid>
      </Grid>

      <Button className="global-button mt-4" variant="contained" size="large" >
        Save
      </Button>
    </div>
  );
};

export default AddFAQ;
