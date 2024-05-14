import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListSubheader,
  Popover,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import NotificationsPopover, {
  NOTIFICATIONS,
  NotificationItem,
} from "../../layouts/dashboard/common/notifications-popover";
import Iconify from "../../components/iconify";
import Scrollbar from "../../components/scrollbar";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Typography variant="h4" className="mt-2">
          Notifications
        </Typography>
        <Button
          variant="contained"
          className="global-button"
          size="large"
          onClick={() => navigate("/create-notifications")}
        >
          Create
        </Button>
      </div>

      <Divider sx={{ borderStyle: "dashed" }} />

      <Scrollbar sx={{ height: { xs: 340, sm: "auto" } }}>
        <List
          disablePadding
          subheader={
            <ListSubheader
              disableSticky
              sx={{ py: 1, px: 2.5, typography: "overline" }}
            >
              New
            </ListSubheader>
          }
        >
          {NOTIFICATIONS.slice(0, 2).map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </List>

        <List
          disablePadding
          subheader={
            <ListSubheader
              disableSticky
              sx={{ py: 1, px: 2.5, typography: "overline" }}
            >
              Before that
            </ListSubheader>
          }
        >
          {NOTIFICATIONS.slice(2, 5).map((notification) => (
            <>
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            </>
          ))}
        </List>
      </Scrollbar>

      <Divider sx={{ borderStyle: "dashed" }} />

      {/* 
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
      </Grid> */}
    </div>
  );
};

export default Notifications;
