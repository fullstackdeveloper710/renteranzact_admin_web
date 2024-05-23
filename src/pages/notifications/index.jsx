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
            <div onClick={() => navigate("/notification-detail")}>
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            </div>
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
              <div onClick={() => navigate("/notification-detail")}>
                {" "}
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              </div>

              <div onClick={() => navigate("/notification-detail")}>
                {" "}
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              </div>
            </>
          ))}
        </List>
      </Scrollbar>

      <Divider sx={{ borderStyle: "dashed" }} />
    </div>
  );
};

export default Notifications;
