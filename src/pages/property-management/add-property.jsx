import { Box, Button, Stack, Typography } from "@mui/material";
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
      status: "Completed",
    },
    {
      title: "Pricing",
      status: "Completed",
    },
    {
      title: "Amenities",
      status: "Completed",
    },
    {
      title: "Images & Documents",
      status: "Completed",
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
    <Box sx={{ width: 300, p: 3 }} display={"flex"} gap={2}>
      <div className="step-left-text d-flex justify-content-center align-items-center">
        <b>12/12</b>
      </div>
      <div>
        <Typography variant="h6" color={"rgb(7 38 46)"}>
          <b>{title}</b>
        </Typography>
        <Typography color="rgb(58 168 175)">{status}</Typography>
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
        <Typography variant="h4">Add Property</Typography>
      </Stack>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        sx={{ mt: 2 }}
      >
        {steps.map((x, i) => {
          return (
            <div
              onClick={() => setIsActive(i)}
              className={i === isActive ? "box-stepper-scale" : "stepper-step"}
            >
              <Step title={x.title} key={i} status={x.status} />
            </div>
          );
        })}
      </Box>
      <div className="mt-3">{renderConditionallyComponent(isActive)}</div>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Button size="large" variant="contained" onClick={handleNext}>
          {isActive > 2 ? "Post This Property" : "Next"}
        </Button>
      </div>
    </div>
  );
};
export default AddProperty;
