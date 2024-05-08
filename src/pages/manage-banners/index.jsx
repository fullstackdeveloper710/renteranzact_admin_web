import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Iconify from "../../components/iconify";

const ManageBanners = () => {
  const array = [
    {
      title: "New Banner",
      des: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
    },
    {
      title: "New Banner",
      des: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
    },
    {
      title: "New Banner",
      des: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
    },
    {
      title: "New Banner",
      des: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
    },
    {
      title: "New Banner",
      des: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT900PQ-_XBfoadVMl5BFsEwTDOTQIofCKrPQ&s",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="d-flex justify-content-between align-items-center w-100 mt-4">
        <Typography variant="h4">Banners</Typography>
        <Button
          variant="contained"
          className="global-button"
          size="large"
          onClick={() => navigate("/add-banners")}
        >
          Add
        </Button>
      </div>

      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="mt-3">
        <TableHead>
          <TableRow>
            <TableCell align={"left"}>Title</TableCell>
            <TableCell align={"left"}>Description</TableCell>
            <TableCell align={"left"}>Image</TableCell>
            <TableCell align={"left"}>Link</TableCell>
            <TableCell align={"left"}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map((x, i) => {
            return (
              <TableRow key={i}>
                <TableCell align={"left"}>{x.title}</TableCell>
                <TableCell align={"left"}>
                  {x.des.substring(1, 20) + "...more"}
                </TableCell>
                <TableCell align={"left"}>
                  <img src={x.image} style={{ width: 300, height: 100 }} />
                </TableCell>
                <TableCell align={"left"}>
                  <Link to={x.link}>{x.link}</Link>
                </TableCell>
                <TableCell align="left">
                  <Iconify icon="tabler:edit" />
                  &nbsp;
                  <Iconify icon="mingcute:delete-line" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageBanners;
