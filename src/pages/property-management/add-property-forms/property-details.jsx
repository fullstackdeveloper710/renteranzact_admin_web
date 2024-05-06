import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const PropertyDetails = () => {
  return (
    <div className="screen-transition">
      <Typography variant="h5"> Property Details</Typography>

      <Grid container spacing={4} className="mt-1">
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Property Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Property Category"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Property Type"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Furnishing Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Furnishing Type"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Rent Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Rent Type"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="City"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth label="Landmark" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth label="Address" />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">No. of floors</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="No. of floors"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth label="Super Area" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth label="Carpet Area" />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Availabilty"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Age of Construction
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age of Contruction"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Type of Community
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type of Community"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default PropertyDetails;
