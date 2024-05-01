import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function ManagePayoutCard() {
  return (
    <Box sx={{ flexGrow: 1 }} className="p-4 mt-4">
      <Grid container className="align-items-center">
        <Grid xs={3}>
          <img src="./images/profile.png" alt="profileimage" />
        </Grid>
        <Grid xs={3}>
          <Typography variant="h6">
            David, Lagos <br /> 9718****69 <br /> LAndlord
          </Typography>
        </Grid>
        <Grid xs={2}>
          <Stack className="ps-2">
            <Typography variant="h5">Address</Typography>
            <Typography>
              6th floor, Tower A Spaze iTeckPark, Sector 49 Lagos
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <Stack className="ps-2">
            <Typography variant="h5">Amount to Paid</Typography>
            <Typography>NGN 50000</Typography>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <Stack>
            <button className="btn  global-button">Payout</button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
