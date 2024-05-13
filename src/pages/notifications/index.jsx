import {
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Notifications = () => {
  return (
    <div className="px-5">
      <Typography variant="h4" className="mt-2">
        Notifications
      </Typography>

      <Grid container spacing={4} mt={3}>
        <Grid item md={3}>
          <img
            src={"/images/mobile.png"}
            style={{ width: "100%", height: 600 }}
          />
        </Grid>

        <Grid item md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="h6">Create Notifications</Typography>
            <Divider className="mt-2" component={"div"} />
            <Grid container spacing={2} mt={3}>
              <Grid item md={12}>
                <TextField label="Title" fullWidth />
              </Grid>
              <Grid item md={12}>
                <TextField multiline rows={5} label="Body" fullWidth />
              </Grid>
            </Grid>
            <Divider className="mt-4" component={"div"} />

            <Typography variant="h6" className="mt-2">
              Send Notification To:
              <Grid container gap={2} mt={2}>
                <Grid item md={5}>
                  <div className="d-flex align-items-center">
                    <Checkbox />
                    <Typography variant={"body2"}>Landlord</Typography>
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div className="d-flex align-items-center">
                    <Checkbox />
                    <Typography variant={"body2"}>Property Manager</Typography>
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div className="d-flex align-items-center">
                    <Checkbox />
                    <Typography variant={"body2"}>Renter</Typography>
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div className="d-flex align-items-center">
                    <Checkbox />
                    <Typography variant={"body2"}>Reviewer admin</Typography>
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div className="d-flex align-items-center">
                    <Checkbox />
                    <Typography variant={"body2"}>Finance admin</Typography>
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div className="d-flex align-items-center">
                    <Checkbox />
                    <Typography variant={"body2"}>
                      Legal Finance admin
                    </Typography>
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div className="d-flex align-items-center">
                    <Checkbox />
                    <Typography variant={"body2"}>Super admin</Typography>
                  </div>
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField fullWidth label="Locations" />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField fullWidth label="Industries" />
                </Grid>
              </Grid>
            </Typography>

            <Button variant="contained" className="global-button mt-2">
              Submit
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Notifications;
