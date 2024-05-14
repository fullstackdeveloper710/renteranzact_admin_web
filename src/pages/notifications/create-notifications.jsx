import {
  Grid,
  Card,
  Typography,
  Divider,
  TextField,
  Checkbox,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React from "react";

const CreateNotification = () => {
  return (
    <div className="px-5">
      <Grid container spacing={4} mt={3}>
        <Grid item md={3}>
          <img
            src={"/images/mobile.png"}
            style={{ width: "100%", height: 600 }}
          />
        </Grid>

        <Grid item md={6}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1">Create Notifications</Typography>
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

            <Typography variant="subtitle1" className="mt-2">
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
              </Grid>
            </Typography>
          </Card>
        </Grid>

        <Grid item md={3}>
          <Card sx={{ p: 2 }}>
            <Typography variant="subtitle1">Publish Details</Typography>
            <Grid container gap={2} mt={2}>
              <Grid item md={12}>
                
                <FormControl fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select label="Status">
                    <MenuItem value="Draft">Draft</MenuItem>
                    <MenuItem value={"Send for approval"}>
                      Send for approval
                    </MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Scheduled">Scheduled</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item md={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker sx={{ width: "100%" }} label="Publish on" />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
           
              <Button
                variant="contained"
                className="global-button mt-3"
                size="medium"
              >
                Submit
              </Button>
           
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateNotification;
