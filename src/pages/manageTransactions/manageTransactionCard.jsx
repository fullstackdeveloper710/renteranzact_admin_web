import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

export default function ManageTransactionCard() {
  return (
    <Box sx={{ flexGrow: 1 }} className="p-4 mt-4">
      <Grid container className="align-items-center">
        <Grid item xs={12} md={2}>
        <Icon fontSize={100} size icon="mingcute:user-4-line" className="mt-2" />
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">
            David, Lagos <br /> 9718****69 <br /> LAndlord
          </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack className="ps-2">
            <Typography variant="subtitle1">Address</Typography>
            <Typography>
              6th floor, Tower A Spaze iTeckPark, Sector 49 Lagos
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack className="ps-2">
            <Typography variant="subtitle1">Rent Paid</Typography>
            <Typography>Property Name</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack className="ps-2">
            <Typography variant="subtitle1">Amount</Typography>
            <Typography>NGN 50000</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={2}>
          <Stack>
            <button className="btn  global-button">Download Invoice</button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
