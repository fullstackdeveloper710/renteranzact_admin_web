import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Icon } from "@iconify/react";
import Rating from "@mui/material/Rating";
import Iconify from "../../components/iconify";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
  const navigate=useNavigate()
  return (
    <div className="px-5">
    <div className="d-flex align-items-center gap-3">
      <Iconify onClick={() => navigate(-1)} icon="zondicons:arrow-left" />{" "}
      <Typography variant="h4" py={3}>
        Manage Users {">>"} David
      </Typography>
      </div>  
      <Card style={{ padding: 15 }}>
        <Typography variant="h6">Personal Details</Typography>
        <Grid container spacing={4} mt={1}>
          <Grid item md={4}>
            <TextField fullWidth label="Name" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Email" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Mobile" />
          </Grid>
          <Grid item md={4}>
            <TextField type="number" fullWidth label="No of Occupant" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Maritial Status" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Age" />
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth label="Permanent Address" />
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth label="Previous Address" />
          </Grid>
        </Grid>
        <Typography mt={2}>Previous Landlord Details</Typography>
        <Grid container spacing={4} mt={1}>
          <Grid item md={6}>
            <TextField fullWidth label="Name" />
          </Grid>
          <Grid item md={6}>
            <TextField fullWidth label="Address" />
          </Grid>
        </Grid>
      </Card>
      <Card style={{ marginTop: 20, padding: 15 }}>
        <Typography variant="h6">Employement Details</Typography>
        <Grid container spacing={4} mt={1}>
          <Grid item md={4}>
            <TextField fullWidth label="Employement Status" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Employer's Name" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Address" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Occupation" />
          </Grid>
        </Grid>
      </Card>
      <Card style={{ marginTop: 20, padding: 15 }}>
        <Typography>Kin Details</Typography>
        <Grid container spacing={4} mt={1}>
          <Grid item md={4}>
            <TextField fullWidth label="Name" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Phone Number" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Email" />
          </Grid>
          <Grid item md={4}>
            <TextField fullWidth label="Relationship with Kin" />
          </Grid>
          <Grid item md={2} boxShadow={"revert"}>
            <Card sx={{ minWidth: 50 }}>
              <CardContent
                className="d-flex justify-content-center align-items-center"
                style={{ background: "#00800040" }}
              >
                <Icon fontSize={40} icon="material-symbols:file-copy" />
              </CardContent>
              <CardActions className="d-flex justify-content-between align-items-center">
                <Typography>Gov.Id Proof</Typography>
                <Icon icon="material-symbols:download" />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6">Rented Property Details</Typography>
        <Grid container spacing={2} mt={3}>
          <Grid item md={6}>
            <Card sx={{ maxWidth: 400 }}>
              <CardHeader title="Rent Period - 01/01/2023 To Till Now" />
              <CardMedia
                component="img"
                height="100"
                image="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
                alt="Paella dish"
              />
              <div className="d-flex flex-row-reverse">
                <Rating name="read-only" value={3} readOnly />
              </div>
              <CardActions>
                <div
                  style={{ width: "100%" }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <Typography variant="body2">
                    3 BHK Flat, Fully Furnished
                    <div style={{ fontSize: 15 }}>
                      <Icon icon="material-symbols:location-on-rounded" /> th
                      floor, Tower A, Spaze iTechPark, Sector-49, Lagos
                    </div>
                  </Typography>
                  <Typography variant="body2">Rent: NGN 5000/ Month</Typography>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ maxWidth: 400 }}>
              <CardHeader title="Rent Period - 01/01/2023 To Till Now" />
              <CardMedia
                component="img"
                height="100"
                image="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
                alt="Paella dish"
              />
              <div className="d-flex flex-row-reverse">
                <Rating name="read-only" value={3} readOnly />
              </div>
              <CardActions>
                <div
                  style={{ width: "100%" }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <Typography variant="body2">
                    3 BHK Flat, Fully Furnished
                    <div style={{ fontSize: 15 }}>
                      {" "}
                      <Icon icon="material-symbols:location-on-rounded" /> th
                      floor, Tower A, Spaze iTechPark, Sector-49, Lagos
                    </div>
                  </Typography>
                  <Typography variant="body2">Rent: NGN 5000/ Month</Typography>
                </div>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ maxWidth: 400 }}>
              <CardHeader title="Rent Period - 01/01/2023 To Till Now" />
              <CardMedia
                component="img"
                height="100"
                image="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
                alt="Paella dish"
              />
              <div className="d-flex flex-row-reverse">
                <Rating name="read-only" value={3} readOnly />
              </div>
              <CardContent></CardContent>
              <CardActions>
                <div
                  style={{ width: "100%" }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <Typography variant="body2">
                    3 BHK Flat, Fully Furnished
                    <div style={{ fontSize: 15 }}>
                      {" "}
                      <Icon icon="material-symbols:location-on-rounded" /> th
                      floor, Tower A, Spaze iTechPark, Sector-49, Lagos
                    </div>
                  </Typography>
                  <Typography variant="body2">Rent: NGN 5000/ Month</Typography>
                </div>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Card>
      <div className="d-flex justify-content-center align-items-center mt-3">
        <Button
          size="medium"
          type="submit"
          variant="contained"
          className="global-button"
          color="inherit"
        >
          Blacklist
        </Button>
        &nbsp; &nbsp;
        <Button
          size="medium"
          type="submit"
          variant="contained"
          className="global-button"
          color="inherit"
        >
          Suspend
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
