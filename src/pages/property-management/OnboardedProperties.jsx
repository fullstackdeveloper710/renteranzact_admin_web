import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import moment from "moment";
import Iconify from "../../components/iconify";
import { useState } from "react";
import ViewProperty from "./ViewProperty";
import { useNavigate } from "react-router-dom";
const OnboardedProperties = ({ tableColumns, data, onClick }) => {
  const [isViewProperty, setIsViewProperty] = useState(false);
  const navigate = useNavigate();
  return !isViewProperty ? (
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
              <TableCell>
                <img src={x.image} style={{ height: 50, width: 50 }} />
              </TableCell>
              <TableCell>{x.landlord}</TableCell>
              <TableCell>{x.property}</TableCell>
              <TableCell>{x.city}</TableCell>
              <TableCell>{moment(x.date).format("YYYY/DD/MM")}</TableCell>
              <TableCell>{x.mobile}</TableCell>
              <TableCell>
                <Iconify
                  icon="solar:eye-linear"
                  onClick={() => setIsViewProperty(true)}
                />
                &nbsp;
                <Iconify onClick={onClick} icon="mingcute:delete-line" />
                &nbsp;
                <Iconify icon="bx:edit" />
               
              
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ) : (
    <ViewProperty />
  );
};

export default OnboardedProperties;
