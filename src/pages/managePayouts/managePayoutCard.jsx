import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function ManagePayoutCard() {
  return (
    <Box sx={{ flexGrow: 1 }} className="p-4 mt-4">
      <Grid container spacing={2} className="align-items-center">
        <Grid item xs={3} md={2}>
          <Icon
            fontSize={100}
            
            icon="mingcute:user-4-line"
            className="mt-2"
          />
        </Grid>
        <Grid item xs={3} md={2}>
          <Typography variant="subtitle1">
            David, Lagos <br /> 9718****69 <br /> LAndlord
          </Typography>
        </Grid>
        <Grid item xs={2} md={4}>
          <Stack className="ps-2">
            <Typography variant="subtitle1">Address</Typography>
            <Typography>
              6th floor, Tower A Spaze iTeckPark, Sector 49 Lagos
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} md={2}>
          <Stack className="ps-2">
            <Typography variant="subtitle1">Amount to Paid</Typography>
            <Typography>NGN 50000</Typography>
          </Stack>
        </Grid>
        <Grid item xs={2} md={2}>
          <Stack>
            <button className="btn  global-button">Payout</button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
