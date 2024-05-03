import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify";

const AddBanners = () => {
  return (
    <div className="px-5">
      <Typography variant="h4" className="mt-4">
        Add Banners
      </Typography>

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
      <Button variant="contained" size="large" className="mt-4">
        Save
      </Button>
    </div>
  );
};

export default AddBanners;
