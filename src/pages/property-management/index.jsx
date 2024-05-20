import {
  Card,
  InputAdornment,
  OutlinedInput,
  Stack,
  Tab,
  Tabs,
  Typography,
  Autocomplete,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Iconify from "../../components/iconify";
import React from "react";
import { faker } from "@faker-js/faker";
import OnboardedProperties from "./OnboardedProperties";
import PropertyListingRequest from "./PropertyListingRequestes";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../../components/Pagination";
export const tableColumns = [
  "Image",
  "Property Name",
  "Landlord/PM",
  "Property Type",
  "Located In (City)",
  "Onboarding Date",
  "Mobile Number",
  "Action",
];

let cities = [
  {
    label: "Aba South",
  },
  { label: "Arochukwu" },
  { label: "Bende" },
  { label: "Ikwuano" },
  { label: "Isiala Ngwa North" },
  { label: "Isiala Ngwa South" },
  { label: "Isuikwuato" },
  { label: "Obi Ngwa" },
  { label: "Ohafia" },
  { label: "Osisioma}" },
  { label: "Ugwunagbo" },
  { label: "Ukwa East" },
  { label: "Ukwa West" },
  { label: "Umuahia North" },
  { label: "Umuahia South" },
  { label: "Umu Nneochi" },
];
const PropertyManagement = () => {
  const [selectedTabs, setSelectedTabs] = React.useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTabs(newValue);
  };

  const properties = Array(10).fill({
    id: faker.string.uuid(),
    image: faker.image.abstract(1234, 2345),
    landlord: faker.person.fullName(),
    city: faker.location.state(),
    date: faker.date.birthdate(),
    mobile: faker.phone.number(),
  });
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Manage Properties</Typography>

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
      <Card className="p-4">
        <Grid container  spacing={3}>

          <Grid item md={3} sm={6} xs={12}>
            <OutlinedInput
            fullWidth
              placeholder="Search property..."
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
            />
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            {" "}
            <Autocomplete
              fullWidth
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: '100%' }}
              renderInput={(params) => (
                <TextField
                fullWidth
                  {...params}
                  label="Cities"
                  placeholder="Select Cities"
                />
              )}
            />
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            {" "}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Property</InputLabel>
              <Select
                sx={{ width: '100%' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"all"}
                label="Property"
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"vacant"}>Vacant</MenuItem>
                <MenuItem value={"rented"}>Rented</MenuItem>
              </Select>
            </FormControl>{" "}
          </Grid>

          <Grid item md={3} sm={6} xs={12}>
            {" "}
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Property Type
              </InputLabel>
              <Select
                sx={{ width: '100%' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Residential"}
                label="Property Type"
              >
                <MenuItem value={"Residential"}>Residential</MenuItem>
                <MenuItem value={"Commercial"}>Commercial </MenuItem>
                <MenuItem value={"Short-Stays"}>Short-Stays</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Tabs
          className="mt-3"
          variant="standard"
          onChange={handleChange}
          value={selectedTabs}
        >
          <Tab label="Onboarded Properties" />
          <Tab label="Property listings Requests" />
        </Tabs>

        {selectedTabs === 0 ? (
          <OnboardedProperties tableColumns={tableColumns} data={properties} />
        ) : (
          <PropertyListingRequest />
        )}

        <div className="p-3 d-flex justify-content-center align-items-center">
          <PaginationComponent />
        </div>
      </Card>
    </div>
  );
};

export default PropertyManagement;
