import {
  Card,
  InputAdornment,
  OutlinedInput,
  Stack,
  Tab,
  Table,
  Tabs,
  Typography,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Button,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Iconify from "../../components/iconify";
import React from "react";
import moment from "moment";
import Scrollbar from "../../components/scrollbar";
import { faker } from "@faker-js/faker";
import OnboardedProperties from "./OnboardedProperties";
import PropertyListingRequest from "./PropertyListingRequestes";
import { useNavigate } from "react-router-dom";
export const tableColumns = [
  "Image",
  "Landlord/PM",
  "Property",
  "Located In (City)",
  "Onboarding Date",
  "Mobile",
  "Action",
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

  const navigate = useNavigate();
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
        <div className="d-flex justify-content-between align-items-center">
          <OutlinedInput
            placeholder="Search user..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />

          {/* <Button
           className="global-button"
            variant="contained"
            size="large"
            onClick={() => navigate("/add-property")}
          >
            Add
          </Button> */}
        </div>
        <Tabs
          className="mt-3"
          variant="standard"
          onChange={handleChange}
          value={selectedTabs}
        >
          <Tab label="Onboarded Properties" />
          <Tab label="Property Listing Requestes" />
        </Tabs>

        {/* <Scrollbar> */}
        {/* <TableContainer sx={{ overflow: "unset", mt: 3 }}> */}
        {selectedTabs === 0 ? (
          <OnboardedProperties tableColumns={tableColumns} data={properties} />
        ) : (
          <PropertyListingRequest />
        )}
        {/* </TableContainer> */}
        {/* </Scrollbar> */}
      </Card>
    </div>
  );
};

export default PropertyManagement;
