import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
const AddUser = () => {
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        className="mt-2"
      >
        <Typography variant="h4">Add Users</Typography>
      </Stack>
      <Grid container spacing={6} className="mt-3">
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="name" label="Name" type={"text"} />
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="email" label="Email" type={"email"} />
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="mobile" label="Mobile" type={"text"} />
        </Grid>
        <Grid item xs={8} md={6}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"male"}
              label="Gender"
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} md={6}>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"landlord"}
            >
              <MenuItem value={"landlord"}>Landlord</MenuItem>
              <MenuItem value={"renter"}>Renter</MenuItem>
              <MenuItem value={"propertyManager"}>Property Manager</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField
            fullWidth
            name="password"
            label="Password"
            type={"password"}
          />
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type={"password"}
          />
        </Grid>
      </Grid>

      <Button
        style={{ marginTop: 20 }}
        size="medium"
        type="submit"
        variant="contained"
        color="inherit"
        className="global-button"
      >
        Save
      </Button>
    </div>
  );
};
export default AddUser;
