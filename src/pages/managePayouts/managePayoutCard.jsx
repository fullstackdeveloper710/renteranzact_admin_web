import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function ManagePayoutCard() {
  return (
    // <Box sx={{ flexGrow: 1 }} className="p-4 mt-4">
    <Grid container className="mt-4 d-flex align-items-center">
      <Grid item xs={3} md={2}>
        <Icon fontSize={100} icon="mingcute:user-4-line" className="mt-2" />
      </Grid>
      <Grid item xs={3} md={2}>
        <Typography variant="body2">
          David, Lagos <br /> 9718****69 <br /> LAndlord
        </Typography>
      </Grid>
      <Grid item xs={2} md={4}>
        {/* <Typography variant="subtitle1">Address</Typography> */}
        <Typography variant="body2">
          6th floor, Tower A Spaze iTeckPark, Sector 49 Lagos
        </Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        {/* <Typography variant="subtitle1">Amount to Paid</Typography> */}
        <Typography variant="body2">NGN 50000</Typography>
      </Grid>
      <Grid item xs={2} md={2}>
        <Button fullWidth size="large" className="global-button">
          Payout
        </Button>
      </Grid>
    </Grid>
    // </Box>
  );
}
