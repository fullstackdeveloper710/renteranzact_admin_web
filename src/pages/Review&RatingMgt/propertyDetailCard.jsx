import { Box, Button, Chip, Grid, Rating } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
export default function PropertyDetailCard() {
  return (
    // <Box sx={{ flexGrow: 1 }} className="p-4 mt-4">
    <Grid
      container
      spacing={4}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      mt={2}
    >
      <Grid item xs={12} md={3}>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <img
            style={{ borderRadius: 13, width: 150 }}
            src="./images/houseProperty.jpg"
          />
          <div>
            <span>#C01234</span>
            <Typography variant="h5">Robert Patlison</Typography>
            <Typography sx={{ width: "100%" }} variant="body1" color="grey">
              Join on 26/04/2020, 12:42 AM
            </Typography>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={3}>
        Property Owner a good and coperative Property is situated in a good
        place.
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={3}
      >
        <Chip size="medium" label="Excellent" color="info" />
        <Rating size="large" value={5} />
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={3}
      >
        <Button size="large" variant="outlined" color="success">
          Approve
        </Button>

        <Button size="large" variant="outlined" color="error">
          Rejected
        </Button>

        <Button size="large" variant="outlined">
          Publish
        </Button>
      </Grid>
    </Grid>
    // </Box>
  );
}
