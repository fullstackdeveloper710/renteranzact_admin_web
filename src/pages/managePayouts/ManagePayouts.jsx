import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Iconify from "../../components/iconify";
import ManagePayoutCard from "./managePayoutCard";
import { Link } from "react-router-dom";

export default function ManagePayouts() {
  const managePayouyArray = [1, 2, 3, 4, 5];
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
       
      >
        <Typography variant="h4">Manage Payouts</Typography>
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
        <Grid container gap={2} className="mt-4" direction={"row"}
          alignItems={"center"}
          justify={"space-evenly"}>
          <Grid item xs={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Monthly</InputLabel>
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Monthly</InputLabel>
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
          <Grid item xs={2} mb={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="11/11/23" />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={2}>
            {/* <Button
              variant="contained"
              color="inherit"
              className="global-button"
              fullWidth
              size="large"
            >
              Filter
            </Button> */}
            <Link>Clear Filters</Link>
          </Grid>
          {/* <Grid item xs={1}></Grid> */}
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="inherit"
              className="global-button"
              startIcon={<Iconify icon="eva:download-fill" />}
             fullWidth
             size="large"
            >
              Download
            </Button>
          </Grid>
        </Grid>
      </Stack>
      {managePayouyArray.map(() => (
        <ManagePayoutCard />
      ))}
    </div>
  );
}
