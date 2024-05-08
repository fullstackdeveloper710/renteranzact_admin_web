import {
  Button,
  Grid,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify";
import { Link, useNavigate } from "react-router-dom";

const ManageSocialMediaLinks = () => {
  const array = [
    {
      title: "Instagram",
      icon: <Iconify icon="skill-icons:instagram" />,
      link: "https://instagram.com",
    },
    {
      title: "Facebook",
      icon: <Iconify icon="logos:facebook" />,
      link: "https://facebook.com",
    },
    {
      title: "Twitter",
      icon: <Iconify icon="logos:twitter" />,
      link: "https://twitter.com",
    },
  ];
  const navigate = useNavigate()
  return (
    <div className="px-5">
      <div className="d-flex justify-content-between align-items-center w-100 mt-3">
        <Typography variant="h4">Social Media Links</Typography>
        <Button className="global-button" variant="contained" size="large" onClick={( )=>navigate('/add-social-media-links')}>
          Add
        </Button>
      </div>

      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="mt-4">
        <TableHead>
          <TableRow>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Icon</TableCell>
            <TableCell align="left">Link</TableCell>

            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((x, i) => {
            return (
              <TableRow key={i}>
                <TableCell align="left">{x.title}</TableCell>
                <TableCell align="left">{x.icon}</TableCell>
                <TableCell align="left">
                  <Link to="https://instgram.com">{x.link}</Link>
                </TableCell>
                <TableCell align="left">
                  <Iconify icon="tabler:edit" />
                  &nbsp;
                  <Iconify icon="mingcute:delete-line" />
                </TableCell>
              </TableRow>
            );
          })}

          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageSocialMediaLinks;
