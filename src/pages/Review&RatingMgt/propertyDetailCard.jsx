import { Box, Grid, Rating } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
export default function PropertyDetailCard() {
  return (
    <Box sx={{ flexGrow: 1}} className="p-4 mt-4">
      <Grid container >
        <Grid xs={2}>
          <img src="./images/houseProperty.jpg" />
        </Grid>
        <Grid xs={2}>
          <Stack className="ps-2">
            <Typography variant="h6">
              3 BHK Flat, Fully Furnished Rent:NGN 5000/Month
            </Typography>
            <Typography>
              6th floor, Tower A Spaze iTeckPark, Sector 49 Lagos
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <Typography variant="h6">Star Ratings</Typography>
          <Stack className="mt-2">
            <Rating name="simple-controlled" value={2} />
            <Typography level="body-sm" className="mt-2">
              Property Owner a good and coperative Property is situated in a
              good place
            </Typography>
          </Stack>
        </Grid>
        <Grid xs={2}>
          <img src="./images/profile.png" alt="profileimage" />
        </Grid>
        <Grid xs={2}>
          <Typography variant="h6">
            David, Lagos <br /> 9718****69 <br /> david@gmail.com <br /> Rented
            on 07/11/2023
          </Typography>
        </Grid>
        <Grid xs={2}>
          <Stack>
            <button className="btn global-button">Approve</button>
          </Stack>
          <Stack className="mt-2">
            <button className="btn btn-danger">Rejected</button>
          </Stack>
          <Stack className="mt-2">
            <button className="btn global-button">Publish</button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
