import {
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Iconify from "../../components/iconify";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        gap={2}
        // justifyContent="center"
        className="mt-2"
      >
        <Iconify  onClick={() => navigate(-1)} icon="zondicons:arrow-left" />{" "}
      
        <Typography  variant="h4">Add Employee</Typography>
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
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"male"}
            label="Role"
          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={8} md={6}>
          <TextField fullWidth name="password" label="Password" type={"text"} />
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type={"password"}
          />
        </Grid>
        <Grid item xs={8} md={6}>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"reviewerAdmin"}
            label="Role"
          >
            <MenuItem value={"reviewerAdmin"}>Reviewer Admin</MenuItem>
            <MenuItem value={"financeAdmin"}>Finance Admin</MenuItem>
            <MenuItem value={"legalAdmin"}>Legal Admin</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <div className="text-center mt-4">
        <Button
          sx={{ mt: 3, width: 200 }}
          size="large"
          type="submit"
          fullWidth
          variant="contained"
          color="inherit"
          className="global-button"
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default AddEmployee;
