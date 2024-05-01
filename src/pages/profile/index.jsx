import { Avatar, Button, Card, Grid, IconButton, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <Typography className="mt-4" variant="h4">
        Profile
      </Typography>
      <Card className="p-4 mt-3" >


      <Grid container spacing={3} >
      

      <Grid item md={12} ml={-2}>
        <IconButton>
        <Avatar
          src="/assets/images/avatars/avatar_25.jpg"
          style={{

            width: "100px",
            height: "100px",
          }}
        />
      </IconButton>
        </Grid>
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
      <Typography className="mt-4" variant="h6" mb={1}>
        Change Password
      </Typography>
      <Grid container spacing={4} className="">
        <Grid item md={6}>
          <TextField fullWidth type="password" label="Old Password" />
        </Grid>
        <Grid item md={6}>
          <TextField fullWidth type="password" label="New Password" />
        </Grid>
      </Grid>
      <div className="d-flex mt-4 gap-2">
        <Button variant="contained">Save</Button>
      </div>
      </Card>

       
    </div>
  );
};

export default Profile;
