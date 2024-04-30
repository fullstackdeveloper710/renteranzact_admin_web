import { Button, Grid, TextField, Typography } from "@mui/material";

const Profile = () => {
  return (
    <div className="px-5">
      <Typography className="mt-4" variant="h4">
        Profile
      </Typography>
      <Grid container spacing={4} className="mt-2">
        <Grid item md={6}>
          <TextField
            fullWidth
            type="text"
            value="David"
            label="Name"
            disabled
          />
        </Grid>
        <Grid item md={6}>
          <TextField
            fullWidth
            type="email"
            value="Superadmin@gmail.com"
            label="Email"
            disabled
          />
        </Grid>
      </Grid>
      <div className="d-flex mt-4 gap-2">
        <Button   variant="contained">Save</Button>
        <Button  color="error" variant="outlined">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
