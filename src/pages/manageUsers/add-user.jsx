import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PaperForm from "../../components/PaperForm";
const AddUser = () => {
  return (
    <div className="px-5">
      <PaperForm title={"Add Users"}>
        <Grid container spacing={3} className="mt-3">
          <Grid item xs={12} md={6} sm={6}>
            <TextField fullWidth name="name" label="Name" type={"text"} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField fullWidth name="email" label="Email" type={"email"} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField fullWidth name="mobile" label="Mobile" type={"text"} />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
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
          <Grid item xs={12} md={6} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select
                fullWidth
                label="Role"
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
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              fullWidth
              name="password"
              label="Password"
              type={"password"}
            />
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <TextField
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type={"password"}
            />
          </Grid>
        </Grid>

        <Button
          style={{ marginTop: 30 }}
          size="large"
          type="submit"
          variant="contained"
          color="inherit"
          className="global-button"
        >
          Save
        </Button>
      </PaperForm>
    </div>
  );
};
export default AddUser;
