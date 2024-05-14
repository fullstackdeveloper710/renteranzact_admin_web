import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import moment from "moment";
import React from "react";
import { useLocation } from "react-router-dom";
import { listOfMonths, propertyType } from "../../sections/user/utils";

const UpdateProperty = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        marginTop={3}
      >
        <Typography variant="h4">Update Property</Typography>
      </Stack>

      {/* <Grid container spacing={4} mt={2}>
        <Grid item md={6}>
          <TextField
            value={location?.state?.landlord}
            fullWidth
            label="Landlord"
          />
        </Grid>
        <Grid item md={6}>
          <TextField value={location?.state?.mobile} fullWidth label="Mobile" />
        </Grid>
        <Grid item md={6}>
          <TextField value={location?.state?.city} fullWidth label="City" />
        </Grid>
        <Grid item md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          
              <DatePicker
               
                sx={{ width: "100%" }}
                label="Onboarding date"
                value={moment()}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
        
          </LocalizationProvider>
        </Grid>
        <Grid item md={6}>
            <label className="mb-2">Image</label>
            <img style={{height : 500 , width : "100%"}}  src={location?.state?.image}/>
        </Grid>
      </Grid> */}
      <label className="mt-4">
        <b>Property details</b>
      </label>
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
      <label className="mt-4">
        {" "}
        <b>Pricing</b>
      </label>
      <Grid container spacing={4} className="mt-1">
        <Grid item md={6} xs={12} sm={6}>
          <TextField label="Rent" fullWidth />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Monthly</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Monthly"
            >
              {listOfMonths.map((x, i) => (
                <MenuItem key={i} value={x}>
                  {x}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField label="Service Charges" fullWidth />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <TextField label="Caution Deposit" fullWidth />
        </Grid>
      </Grid>

      <label className="mt-4">
        {" "}
        <b>Amenities</b>
      </label>

      <Grid container spacing={1} className="mt-1">
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Power Backup</span>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Lift</span>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Security</span>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Reserved Parking</span>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Visitor Parking</span>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Rain Water harvesting</span>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Water Storage</span>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Water Storage</span>
        </Grid>
      </Grid>

      <label className="mt-4">
        <b>Property Images and videos</b>
      </label>
      <br />

      <div className="d-flex align-items-center gap-4 mt-4">
        <div style={{ position: "relative", height: "100px", width: "150px" }}>
          <Icon
            cursor={"pointer"}
            fontSize={25}
            style={{ position: "absolute", right: -4, top: -1 }}
            icon="openmoji:cross-mark"
          />
          <img
            src={"/images/houseProperty.jpg"}
            style={{ height: "100%", width: "100%", borderRadius: 20 }}
          />
        </div>
        <div style={{ position: "relative", height: "100px", width: "150px" }}>
          <Icon
            cursor={"pointer"}
            fontSize={25}
            style={{ position: "absolute", right: -4, top: -1 }}
            icon="openmoji:cross-mark"
          />
          <img
            src={"/images/houseProperty.jpg"}
            style={{ height: "100%", width: "100%", borderRadius: 20 }}
          />
        </div>
      </div>
      <Button className="global-button mt-3" size="large" variant="contained">
        Update
      </Button>
    </div>
  );
};

export default UpdateProperty;
