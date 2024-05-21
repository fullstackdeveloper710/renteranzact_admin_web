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
import { cities, listOfMonths, propertyType } from "../../sections/user/utils";

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
        marginBottom={2}
      >
        <Typography variant="h4">Update Property</Typography>
      </Stack>

<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <label className="">
        <b>Property details</b>
      </label>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <Grid container spacing={3} className="mt-1">
      <Grid item md={6} xs={12} sm={6}>
          <TextField fullWidth label="Property Name" />
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Property Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Property Category"
              value={"Residential"}
            >
              <MenuItem value={"Residential"}>Residential</MenuItem>
              <MenuItem value={"Short-Stays"}>Short-Stays</MenuItem>
              <MenuItem value={"Commercial"}>Commercial</MenuItem>
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
              value={"Semi-detached Duplexes"}
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
              value={"Serviced"}
            >
              <MenuItem value={"Serviced"}>Serviced</MenuItem>
              <MenuItem value={"Furnished"}>Furnished</MenuItem>
              <MenuItem value={"Unfurnished"}>Unfurnished</MenuItem>
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
              value="Quarterly"
            >
              <MenuItem value={"Monthly"}>Monthly</MenuItem>
              <MenuItem value={"Quarterly"}>Quarterly </MenuItem>
              <MenuItem value={"Yearly"}>Yearly</MenuItem>
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
              value="Isuikwuato"
            >
              {cities.map((x, i) => (
                <MenuItem value={x}>{x}</MenuItem>
              ))}
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
              value={3}
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Bathroom</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="No. of floors"
              value={3}
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
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Bathroom</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="No. of floors"
              value={3}
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
              value={"Immediate"}
            >
              <MenuItem value={"Immediate"}>Immediate</MenuItem>
              <MenuItem value={" < 15 Days"}>{"<"} 15 Days</MenuItem>
              <MenuItem value={"< 30 Days"}>{"<"} 30 Days</MenuItem>
              <MenuItem value={"> 30 Days"}>{">"} 30 Days</MenuItem>
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
              value="Gated Community"
            >
              <MenuItem value={"Gated Community"}>Gated Community</MenuItem>
              <MenuItem value={"Open Community"}>Open Community</MenuItem>
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
              value="Brandy Rowe"
            >
              <MenuItem value={"Brandy Rowe"}>Brandy Rowe</MenuItem>
              <MenuItem value={"Catherine Jenkins"}>Catherine Jenkins</MenuItem>
              <MenuItem value={"Courtney Auer"}>Courtney Auer</MenuItem>
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
              value="Catherine Jenkins"
            >
              <MenuItem value={"Brandy Rowe"}>Brandy Rowe</MenuItem>
              <MenuItem value={"Catherine Jenkins"}>Catherine Jenkins</MenuItem>
              <MenuItem value={"Courtney Auer"}>Courtney Auer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <label className="">
        {" "}
        <b>Pricing</b>
      </label>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
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
              value="December"
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
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <label className="">
        {" "}
        <b>Amenities</b>
      </label>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
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
        {/* <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Water Storage</span>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <Checkbox />
          <span>Water Storage</span>
        </Grid> */}
      </Grid>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <label className="">
        <b>Property Images and videos</b>
      </label>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="d-flex align-items-center gap-4 mt-4">
        <div style={{ position: "relative", height: "100px", width: "150px" }}>
          <Icon
            cursor={"pointer"}
            fontSize={25}
            style={{ position: "absolute", right: -10, top: -10,border:"1px solid #f00",borderRadius:"50%",background:"#fff" }}
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
            style={{ position: "absolute", right: -10, top: -10,border:"1px solid #f00",borderRadius:"50%",background:"#fff" }}
            icon="openmoji:cross-mark"
          />
          <img
            src={"/images/houseProperty.jpg"}
            style={{ height: "100%", width: "100%", borderRadius: 20 }}
          />
        </div>
      </div>
      </div>
    </div>
  </div>

</div>


      <Button className="global-button mt-3" size="large" variant="contained">
        Update
      </Button>
    </div>
  );
};

export default UpdateProperty;
