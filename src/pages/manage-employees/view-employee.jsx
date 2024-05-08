import {
    Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const ViewEmployee = () => {
  return (
    <div className="px-5">
      <Typography className="mt-3" variant="h5">
        Employee
      </Typography>

      <Grid container mt={3} spacing={2}>
        <Grid item md={4}>
          <TextField label="Name" fullWidth />
        </Grid>
        <Grid item md={4}>
          <TextField label="Email" fullWidth />
        </Grid>
        <Grid item md={4}>
          <TextField label="Mobile" fullWidth />
        </Grid>
        <Grid item md={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker sx={{ width: "100%" }} label="Joining Date" />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>

        <Grid item md={4}>
          <FormControl fullWidth className="mt-2">
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
            fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Role"
            >
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={10}>Property Managers</MenuItem>
              <MenuItem value={20}>Landlords</MenuItem>
              <MenuItem value={30}>Renters</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Button variant="contained" className="global-button mt-3">Save</Button>
    </div>
  );
};

export default ViewEmployee;
