import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManageChatCard() {
    const navigate = useNavigate()
  return (
    <Box sx={{cursor : "pointer"}} onClick = {()=>navigate("/user-chat")}>
      <Grid container spacing={4} display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={3}>
        <Grid item xs={12} md={2}>
          <img src="./images/profile.png" alt="profileimage" />
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">
            David, Lagos <br />LAndlord
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
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
