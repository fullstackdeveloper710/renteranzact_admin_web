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
import { cities, propertyType } from "../../../sections/user/utils";
import PaperForm from "../../../components/PaperForm";

const PropertyDetails = () => {
  return (
    <div className="screen-transition">
      <PaperForm title={'Property Details'}>
      <Grid container spacing={3} className="mt-1">
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Property Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Property Category"
            >
              <MenuItem value={10}>Residential</MenuItem>
              <MenuItem value={20}>Short-Stays</MenuItem>
              <MenuItem value={30}>Commercial</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Property Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Property Type"
            >
              {propertyType.map((x, i) => {
                return (
                  <MenuItem value={x.title} key={i}>
                    {x.title}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Furnishing Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Furnishing Type"
            >
              <MenuItem value={10}>Serviced</MenuItem>
              <MenuItem value={20}>Furnished</MenuItem>
              <MenuItem value={30}>Unfurnished</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Rent Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Rent Type"
            >
              <MenuItem value={10}>Monthly</MenuItem>
              <MenuItem value={20}>Quarterly </MenuItem>
              <MenuItem value={30}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="City"
            >
              {cities.map((x, i) => {
                return (
                  <MenuItem key={i} value={x}>
                    {x}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField fullWidth label="Landmark" />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField fullWidth label="Address" />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">No. of floors</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="No. of floors"
            >
              {[0, 1, 2, 3, 4, 5, 6].map((x, index) => (
                <MenuItem key={index} value={x}>
                  {x}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField fullWidth label="Super Area" />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField fullWidth label="Carpet Area" />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Availabilty"
            >
              <MenuItem value={10}>Immediate</MenuItem>
              <MenuItem value={20}>{"<"} 15 Days</MenuItem>
              <MenuItem value={30}>{"<"} 30 Days</MenuItem>
              <MenuItem value={30}>{">"} 30 Days</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* <Grid item md={6} xs={12} sm={6}>
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
        </Grid> */}
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Type of Community
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Type of Community"
            >
              <MenuItem value={10}>Gated Community</MenuItem>
              <MenuItem value={20}>Open Community</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Landlords</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Lanlords"
            >
              <MenuItem value={10}>Brandy Rowe</MenuItem>
              <MenuItem value={20}>Catherine Jenkins</MenuItem>
              <MenuItem value={30}>Courtney Auer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Property Manager
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Property Manager"
            >
              <MenuItem value={10}>Brandy Rowe</MenuItem>
              <MenuItem value={20}>Catherine Jenkins</MenuItem>
              <MenuItem value={30}>Courtney Auer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      </PaperForm>
    

     
    </div>
  );
};

export default PropertyDetails;
