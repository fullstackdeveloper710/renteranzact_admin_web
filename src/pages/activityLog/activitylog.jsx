import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React from "react";
import { Link } from "react-router-dom";
export default function Activitylog() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="px-5">
     
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Activity Log</Typography>
        <div className="d-flex">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="From Date" />
            </DemoContainer>
          </LocalizationProvider>
          &nbsp;&nbsp;
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="To Date" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </Stack>
      <Stack>
        {/* <Typography variant="h4">Collected Amount</Typography> */}
        <Grid container gap={2} className="mt-4" direction="row" alignItems="center" >
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select User</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={""}
                label="Age"
                // onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
          <Link>Clear Filters</Link>
          </Grid>
        </Grid>
      </Stack>
      <Box direction={"row"} sx={{ border: 1 }} className="mt-4">
        <Grid container className="m-4">
          <Grid xs={4}>
            <Typography variant="h4">When</Typography>
          </Grid>
          <Grid xs={8}>
            <Typography variant="h4">What Happened</Typography>
          </Grid>
        </Grid>
      </Box>
      {array.map(() => (
        <Box direction={"row"} sx={{ border: 1 }} className="mt-2">
          <Grid container className="m-3">
            <Grid xs={4}>
              <Typography variant="h7">24/09/2020 at 09:31am</Typography>
            </Grid>
            <Grid xs={8}>
              <Typography variant="h7">
                Jimmy approved property request shared by the david
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </div>
  );
}
