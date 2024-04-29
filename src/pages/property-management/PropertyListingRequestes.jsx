import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import Icon from "../../components/iconify";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import PropertyDetails from "./PropertyDetails";
const tableColumns = [
  "Landlord/PM",
  "Property",
  "Located In (City)",
  "Status",
  "Request Date",
  "Action",
];
const PropertyListingRequest = () => {
  const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const data = Array(10).fill({
    landlord: faker.person.firstName(),
    property: faker.location.city(),
    location: faker.location.city(),
    status: "",
    date: faker.date.recent(),
  });
  return !showPropertyDetails ? (
    <Table sx={{ minWidth: 800 }} className="mt-3">
      <TableHead>
        <TableRow>
          {tableColumns.map((x, i) => {
            return <TableCell key={i}>{x}</TableCell>;
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((x, i) => {
          return (
            <TableRow key={i}>
              <TableCell>{x.landlord}</TableCell>
              <TableCell>{x.property}</TableCell>
              <TableCell>{x.location}</TableCell>
              <TableCell>{i === 0 % 2 ? "Pending" : "Complete"}</TableCell>
              <TableCell>{moment(x.date).format("YYYY/MM/DD")}</TableCell>
              <TableCell>
                <Icon
                  icon="solar:eye-linear"
                  onClick={() => setShowPropertyDetails(true)}
                />
                &nbsp;
                <Icon icon="fluent-mdl2:accept" />
                &nbsp;
                <Icon icon="basil:cross-outline" />
                &nbsp;
                <Icon icon="mdi:play" />
                &nbsp;
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ) : (
    <PropertyDetails />
  );
};

export default PropertyListingRequest;