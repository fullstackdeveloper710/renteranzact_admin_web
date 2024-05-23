import { Card, Stack, Typography } from "@mui/material";
import React from "react";

const NotificationDetail = () => {
  return (
    <div className="px-5">
      <Typography variant="h4" className="mt-2">
        Notification Detail
      </Typography>

      <Card className="mt-5 p-4" sx={{ width: "100%" }}>
        <div className="d-flex justify-content-between align-items-center">
          <Typography fontSize={18} color="#13556D" fontWeight={"bold"}>
            Jason has sent the <b style={{ color: "#C8D736" }}>Rent</b> - 10,600
          </Typography>
          <Typography color="#596E73" fontSize={14}>
            12:20 AM
          </Typography>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <div>
            <Typography color="#13556d8a">From</Typography>
            <Typography fontSize={18} color="#13556D" fontWeight={"bold"}>
              Jason
            </Typography>
            <Typography color="#13556d8a">
              UPI ID: 7547354837558@bank
            </Typography>
            <Typography color="#13556d8a">
              State Bank of Knetaa - 2488
            </Typography>
          </div>
          <div>
            <Typography color="#13556d8a">To</Typography>
            <Typography fontSize={18} color="#13556D" fontWeight={"bold"}>
              John Katio
            </Typography>
            <Typography color="#13556d8a">Bank Name 5857</Typography>
            <Typography color="#13556d8a">UPI Ref no:28745674787775</Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotificationDetail;
