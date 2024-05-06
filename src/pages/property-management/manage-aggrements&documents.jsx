import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify";

const ManageAggrementsDocuments = () => {
  const Document = () => (
    <Card>
      <img src={"/images/pdf.png"} style={{ height: 200, width: "100%" }} />

      <CardActions>
        <Button size="small">
          <Iconify icon="icon-park-outline:preview-open" />
          &nbsp; Preview
        </Button>
        <Button size="small">
          <Iconify icon="material-symbols-light:download-sharp" />
          &nbsp; Download
        </Button>
      </CardActions>
    </Card>
  );
  return (
    <div className="px-5">
      <Typography variant="h4" className="mt-2">
        Verify Aggrements and Documents
      </Typography>

      <Typography className="mt-4" variant="h6">
        Aggrements
      </Typography>
      <Grid container spacing={4} mt={1}>
        <Grid item md={2}>
          <Document />
        </Grid>
        <Grid item md={2}>
          <Document />
        </Grid>
        <Grid item md={2}>
          <Document />
        </Grid>
      </Grid>
      <Typography className="mt-4" variant="h6">
        Documents
      </Typography>
      <Grid container spacing={4} mt={1}>
        <Grid item md={2}>
          <Document />
        </Grid>
        <Grid item md={2}>
          <Document />
        </Grid>
        <Grid item md={2}>
          <Document />
        </Grid>
      </Grid>
      <div className="d-flex justify-content-center align-items-center mt-5 gap-3">
        <Button size="medium" variant="contained">
          <Iconify icon="fluent-mdl2:check-mark" />
          &nbsp; Approve
        </Button>
        <Button size="medium" color="error" variant="contained">
          <Iconify icon="heroicons:x-mark" />
          &nbsp; Reject
        </Button>
      </div>
    </div>
  );
};

export default ManageAggrementsDocuments;
