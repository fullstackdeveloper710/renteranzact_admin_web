import {
  TextField,
  Typography,
  Grid,
  Checkbox,
  Card,
  CardContent,
  CardActions,
  Button
} from "@mui/material";
import Iconify from "../../components/iconify/iconify";

const PropertyDetails = () => {
  return (
    <div className="mt-2">
      <Typography>Landlord/PM Details</Typography>
      <Grid container spacing={3} mt={1}>
        <Grid item md={4}>
          <TextField fullWidth name="name" label="Name" type={"text"} />
        </Grid>
        <Grid item md={4}>
          <TextField fullWidth name="Email" label="Email" type={"text"} />
        </Grid>
        <Grid item md={4}>
          <TextField fullWidth name="Mobile" label="Mobile" type={"text"} />
        </Grid>
      </Grid>
      <Typography className="mt-2">Property Details</Typography>
      <Grid container spacing={3} mt={1}>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Property Program"
            label="Property Program"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Property Type"
            label="Property Type"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Furnishing"
            label="Furnishing"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="No of Rooms"
            label="No of Rooms"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Rent Type"
            label="Rent Type"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField fullWidth name="City" label="City" type={"text"} />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Society/Locality Name"
            label="Society/Locality Name"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField fullWidth name="Address" label="Address" type={"text"} />
        </Grid>
        <Grid item md={4}>
          <TextField fullWidth name="Room No." label="Room No." type={"text"} />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Super Area"
            label="Super Area"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Carpet Area"
            label="Carpet Area"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Age of Construction"
            label="Age of Construction"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Type Of Community"
            label="Type Of Community"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}></Grid>
        <Grid item md={4}></Grid>
      </Grid>

      <Typography className="mt-2">Pricing Details</Typography>
      <Grid container spacing={3} mt={1}>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Rent Amount (NGN)"
            label="Rent Amount (NGN)"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Service Charges (NGN)"
            label="Service Charges (NGN)"
            type={"text"}
          />
        </Grid>
        <Grid item md={4}>
          <TextField
            fullWidth
            name="Availability"
            label="Availability"
            type={"text"}
          />
        </Grid>
      </Grid>
      <Typography className="mt-2">Amenities</Typography>

      <Grid container spacing={3}>
        <Grid item md={2}>
          <div>
            <Checkbox defaultChecked />
            <span>Power Backup</span>
          </div>
        </Grid>
        <Grid item md={2}>
          <div>
            <Checkbox defaultChecked />
            <span>Lift</span>
          </div>
        </Grid>
        <Grid item md={2}>
          <div>
            <Checkbox defaultChecked />
            <span>Security</span>
          </div>
        </Grid>
        <Grid item md={2}>
          <div>
            <Checkbox defaultChecked />
            <span>Reserved Parking</span>
          </div>
        </Grid>
        <Grid item md={2}>
          <div>
            <Checkbox defaultChecked />
            <span>Visitor Parking</span>
          </div>
        </Grid>
        <Grid item md={2}>
          <div>
            <Checkbox defaultChecked />
            <span>Rain water harvesting</span>
          </div>
        </Grid>
        <Grid item md={2}>
          <div>
            <Checkbox defaultChecked />
            <span> Water storage</span>
          </div>
        </Grid>
      </Grid>
      <Typography className="mt-2">Images and Videos</Typography>
      <Grid container spacing={3} mt={1}>
        <Grid item md={2}>
          <img
            style={{ height: 200, width: "100%" }}
            src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
          />
        </Grid>
        <Grid item md={2}>
          <img
            style={{ height: 200, width: "100%" }}
            src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
          />
        </Grid>
        <Grid item md={2}>
          <img
            style={{ height: 200, width: "100%" }}
            src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
          />
        </Grid>
        <Grid item md={2}>
          <img
            style={{ height: 200, width: "100%" }}
            src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
          />
        </Grid>
        <Grid item md={2}>
          <img
            style={{ height: 200, width: "100%" }}
            src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
          />
        </Grid>
        <Grid item md={2}>
          <img
            style={{ height: 200, width: "100%" }}
            src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
          />
        </Grid>
      </Grid>

      <Typography className="mt-2">Documents</Typography>

      <Grid container spacing={3} mt={1}>
        <Grid item md={2}>
          <Card style={{ height: 200 }}>
            <CardContent
              className="d-flex justify-content-center align-items-center"
              style={{ background: "#00800040" }}
            >
              <Iconify fontSize={40} icon="material-symbols:file-copy" />
            </CardContent>
            <CardActions className="d-flex justify-content-between align-items-center">
              <Typography>Gov.Id Proof</Typography>
              <Iconify icon="material-symbols:download" />
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card style={{ height: 200 }}>
            <CardContent
              className="d-flex justify-content-center align-items-center"
              style={{ background: "#00800040" }}
            >
              <Iconify fontSize={40} icon="material-symbols:file-copy" />
            </CardContent>
            <CardActions className="d-flex justify-content-between align-items-center">
              <Typography>Gov.Id Proof</Typography>
              <Iconify icon="material-symbols:download" />
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card style={{ height: 200 }}>
            <CardContent
              className="d-flex justify-content-center align-items-center"
              style={{ background: "#00800040" }}
            >
              <Iconify fontSize={40} icon="material-symbols:file-copy" />
            </CardContent>
            <CardActions className="d-flex justify-content-between align-items-center">
              <Typography>Gov.Id Proof</Typography>
              <Iconify icon="material-symbols:download" />
            </CardActions>
          </Card>
        </Grid>
        <Grid item md={2}>
          <Card style={{ height: 200 }}>
            <CardContent
              className="d-flex justify-content-center align-items-center"
              style={{ background: "#00800040" }}
            >
              <Iconify fontSize={40} icon="material-symbols:file-copy" />
            </CardContent>
            <CardActions className="d-flex justify-content-between align-items-center">
              <Typography>Gov.Id Proof</Typography>
              <Iconify icon="material-symbols:download" />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Typography className="mt-2">Legal representative Detail</Typography>
      <textarea style={{width : '100%' , overflowY :"hidden"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </textarea>
      <div className="d-flex justify-content-center align-items-center">

        <Button variant="contained">Accept</Button>&nbsp;&nbsp;
        <Button
        color="error"
        variant="contained"
        > Reject</Button>
      </div>
    </div>
  );
};

export default PropertyDetails;
