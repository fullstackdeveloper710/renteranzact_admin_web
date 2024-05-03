import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify";

const AddSocialMediaLinks = () => {
  return (
    <div className="px-5">
      <Typography variant="h4">Add Social Media Links</Typography>
      <Grid container spacing={4} mt={2}>
        <Grid item md={6}>
          <TextField fullWidth label="Title" />
        </Grid>

        <Grid item md={6}>
          <TextField fullWidth label="Link" type="link" />
        </Grid>
        <Grid item md={6}>
          <Button
            component="label"
            role={undefined}
            fullWidth
            variant="outlined"
            tabIndex={-1}
            startIcon={<Iconify icon="ep:upload-filled" />}
          >
            Add Icon
            {/* <VisuallyHiddenInput type="file" /> */}
          </Button>
        </Grid>
      </Grid>
      <Button variant="contained" size="large" className="mt-3">
        Save
      </Button>
    </div>
  );
};

export default AddSocialMediaLinks;
