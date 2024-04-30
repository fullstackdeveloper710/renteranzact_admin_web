import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManageChatCard() {
    const navigate = useNavigate()
  return (
    <Box onClick = {()=>navigate("/user-chat")} sx={{ flexGrow: 1, border: "2px solid #C8D736",cursor:"pointer" }} className="p-2 mt-4">
      <Grid container className="align-items-center">
        <Grid xs={2}>
          <img src="./images/profile.png" alt="profileimage" />
        </Grid>
        <Grid xs={2}>
          <Typography variant="h6">
            David, Lagos <br />LAndlord
          </Typography>
        </Grid>
        <Grid xs={8}>
          <Stack className="ps-2 text-center">
            <Typography>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable Englis
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
