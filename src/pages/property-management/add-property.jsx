import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import * as React from "react";
import Pricing from "./add-property-forms/pricing";
import Amenities from "./add-property-forms/amenities";
import ImagesDocuments from "./add-property-forms/Images&Documents";
import PropertyDetails from "./add-property-forms/property-details";

const AddProperty = () => {
  const [isActive, setIsActive] = React.useState(0);
  const [steps, setSteps] = React.useState([
    {
      title: "Property Details",
      status: true,
    },
    {
      title: "Pricing",
      status: false,
    },
    {
      title: "Amenities",
      status: false,
    },
    {
      title: "Images & Documents",
      status: false,
    },
  ]);

  const renderConditionallyComponent = (activeIndex) => {
    switch (activeIndex) {
      case 0:
        return <PropertyDetails />;
      case 1:
        return <Pricing />;
      case 2:
        return <Amenities />;
      case 3:
        return <ImagesDocuments />;
    }
  };

  const handleNext = () => {
    if (isActive === 3) {
      // trigger popup here
    } else {
      setIsActive((count) => count + 1);
    }
  };

  const Step = ({ title, status }) => (
    <Box
      sx={{
        height: 100,
        p: 3,
        "@media (min-width:900px)": {
          width: "100%",
        },
      }}
      display={"flex"}
      gap={2}
    >
      <div
        style={
          !status
            ? { border: "5px solid #c7d536" }
            : { border: "5px solid rgb(0 153 161)" }
        }
        className="step-left-text d-flex justify-content-center align-items-center"
      >
        <b>12/12</b>
      </div>
      <div>
        <Typography
          sx={{
            fontSize: { md: "18px", sm: "14px", xs: "12px" },
            "@media (min-width:913px)": {
              fontSize: "14px",
            },
          }}
          color={"rgb(7 38 46)"}
        >
          <b>{title}</b>
        </Typography>
        <Typography
          sx={{ fontSize: { md: "14px", sm: "14px", xs: "12px" } }}
          color={status ? "rgb(58 168 175)" : "#8e9926"}
        >
          {status ? "Completed" : "Pending"}
        </Typography>
      </div>
    </Box>
  );
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" className="mt-3">
          Add Property
        </Typography>
      </Stack>
      <Grid
        container
        spacing={4}
        // display={"flex"}
        // justifyContent={"space-between"}
        // alignItems={"center"}
        sx={{ mt: 2 }}
      >
        {steps.map((x, i) => {
          return (
            <Grid item md={3} sm={6} xs={12}>
              <div
                onClick={() => setIsActive(i)}
                style={x.status ? { background: "#e6f5f6" } : {}}
                className={
                  i === isActive ? "box-stepper-scale" : "stepper-step"
                }
              >
                <Step title={x.title} key={i} status={x.status} />
              </div>
            </Grid>
          );
        })}
      </Grid>
      <div className="mt-3">{renderConditionallyComponent(isActive)}</div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Button
          className="global-button"
          size="large"
          variant="contained"
          onClick={handleNext}
        >
          {isActive > 2 ? "Post This Property" : "Next"}
        </Button>
      </div>
    </div>
  );
};
export default AddProperty;
