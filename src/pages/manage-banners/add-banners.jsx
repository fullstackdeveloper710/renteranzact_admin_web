import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify";
import { useNavigate } from "react-router-dom";

const AddBanners = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="d-flex align-items-center gap-3 mt-3">
        <Iconify icon="zondicons:arrow-left" onClick={() => navigate(-1)} />
        <Typography variant="h4">Add Banners</Typography>
      </div>

      <Grid container spacing={4} mt={2}>
        <Grid item md={6}>
          <TextField fullWidth label="Title" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth label="Link" />
        </Grid>
        <Grid item md={12}>
          <TextField fullWidth label="Description" multiline rows={5} />
        </Grid>
        <Grid item md={2}>
          <Button
            component="label"
            role={undefined}
            className="global-button"
            fullWidth
            variant="outlined"
            tabIndex={-1}
            startIcon={<Iconify icon="ep:upload-filled" />}
          >
            Add Media
            {/* <VisuallyHiddenInput type="file" /> */}
          </Button>
        </Grid>
      </Grid>
      <Button className="global-button mt-4" variant="contained" size="large">
        Save
      </Button>
    </div>
  );
};

export default AddBanners;
