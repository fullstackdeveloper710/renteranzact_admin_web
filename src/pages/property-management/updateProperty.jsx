import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import moment from "moment";
import React from "react";
import { useLocation } from "react-router-dom";

const UpdateProperty = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className="px-5">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Update Property</Typography>
      </Stack>

      <Grid container spacing={4} mt={2}>
        <Grid item md={6}>
          <TextField
            value={location?.state?.landlord}
            fullWidth
            label="Landlord"
          />
        </Grid>
        <Grid item md={6}>
          <TextField value={location?.state?.mobile} fullWidth label="Mobile" />
        </Grid>
        <Grid item md={6}>
          <TextField value={location?.state?.city} fullWidth label="City" />
        </Grid>
        <Grid item md={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DemoContainer components={["DatePicker"]}> */}
              <DatePicker
               
                sx={{ width: "100%" }}
                label="Onboarding date"
                value={moment()}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            {/* </DemoContainer> */}
          </LocalizationProvider>
        </Grid>
        <Grid item md={6}>
            <label className="mb-2">Image</label>
            <img style={{height : 500 , width : "100%"}}  src={location?.state?.image}/>
        </Grid>
      </Grid>
      <Button className="global-button mt-3" size="large" variant="contained">Update</Button>
    </div>
  );
};

export default UpdateProperty;
