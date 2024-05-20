import { Button, Card, CardActions, Grid, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
export const Document = () => (
  <Card className="overflow-visible">
    <img src={"/images/pdf.png"} style={{ height: 130, width: "auto",margin:"10px auto",display:"block" }} />
    <p className="text-center">Delight Apartment.pdf</p>
    <Icon
            cursor={"pointer"}
            fontSize={25}
            style={{ position: "absolute", right: -10, top: -10,borderRadius:"50%",border:"1px solid #f00" }}
            icon="openmoji:cross-mark"
          />
    <CardActions className="justify-content-center">
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
const ManageAggrementsDocuments = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="d-flex align-items-center gap-3 mt-2">
        <Iconify onClick={() => navigate(-1)} icon="zondicons:arrow-left" />
        <Typography variant="h4">Verify Aggrements and Documents</Typography>
      </div>

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
        <Button className="global-button" size="medium" variant="contained">
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
