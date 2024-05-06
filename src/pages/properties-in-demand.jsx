import { Stack, Typography } from "@mui/material";
import React from "react";
import OnboardedProperties from "./property-management/OnboardedProperties";
import { faker } from "@faker-js/faker";
import { tableColumns } from "./property-management";
const properties = Array(10).fill({
  id: faker.string.uuid(),
  image: faker.image.abstract(1234, 2345),
  landlord: faker.person.fullName(),
  city: faker.location.state(),
  date: faker.date.birthdate(),
  mobile: faker.phone.number(),
});
const PropertiesInDemand = () => {
  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography className="mt-2" variant="h4">
          Properties In Demand
        </Typography>
      </Stack>
      <div className="mt-2">
        <OnboardedProperties data={properties} tableColumns={tableColumns} />
      </div>
    </div>
  );
};

export default PropertiesInDemand;
