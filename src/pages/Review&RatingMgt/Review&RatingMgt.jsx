import {
  Box,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Rating,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Iconify from "../../components/iconify";
import PropertyDetailCard from "./propertyDetailCard";
import React from "react";
import PaginationComponent from "../../components/Pagination";
export default function ReviewAndRatingMgt() {
  const [value, setValue] = React.useState(0);
  const propertyArray = [1, 2, 3, 4, 5, 6];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Review&Rating/Mgt</Typography>

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
        {/* <Button variant="contained" color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
      New User
    </Button> */}
      </Stack>
      <div className="d-flex justify-content-between align-items-center">
        {/*  */}
        <Tabs
          className="mt-4"
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          aria-label="basic tabs example"
        >
          <Tab sx={{ fontSize: 17 }} label="All" />
          <Tab sx={{ fontSize: 17 }} label="Published" />
          <Tab sx={{ fontSize: 17 }} label="Deleted" />
        </Tabs>
        <OutlinedInput
          size="medium"
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
      </div>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={5}
      >
        <Grid
          item
          xs={12}
          md={3}
          // justifyContent={"center"}
          gap={3}
        >
          <Typography textAlign={"center"} variant="subtitle1">
            Image
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography textAlign={"center"} variant="subtitle1">
            Descriptions
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
        >
          {" "}
          <Typography variant="subtitle1">Rating</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={3}
        >
          <Typography variant="subtitle1">Status</Typography>
        </Grid>
      </Grid>
      <Divider className="mt-3" component={'li'} style={{listStyleType : "none"}} />
      {value < 4 && propertyArray?.map(() => <PropertyDetailCard />)}

      <div className="p-3 d-flex justify-content-center align-items-center">
        <PaginationComponent />
      </div>
    </div>
  );
}
