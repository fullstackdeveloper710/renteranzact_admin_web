import { Box, Button, Chip, Grid, Rating } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
export default function PropertyDetailCard() {
  return (
    <>
      <Grid
        container
        spacing={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={1}
        gap={2}
        flexWrap={"nowrap"}
      >
        <Grid item xs={12} md={2}>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <img
              style={{ borderRadius: 13, width: 80 }}
              src="./images/houseProperty.jpg"
            />
            <div>
              <span>#C01234</span>
              <Typography variant="subtitle2">Robert Patlison</Typography>
              {/* <Typography sx={{ width: "100%" }} variant="body1" color="grey">
              Join on 26/04/2020, 12:42 AM
            </Typography> */}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">abce</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">Pearl J. Johnson</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          Property Owner a good and coperative Property is situated in a good
          place.
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap={3}
        >
          {/* <Chip size="medium" label="Excellent" color="info" /> */}
          <Rating size="large" value={5} />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
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
        </Grid>
      </Grid>
    </>
    // <Box sx={{ flexGrow: 1 }} className="p-4 mt-4">
    // </Box>
  );
}
