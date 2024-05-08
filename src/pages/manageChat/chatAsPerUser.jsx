import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify/iconify";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ChatAsPerUser() {
  const naviagte = useNavigate();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="px-5">
      <div className="d-flex align-items-center mt-3 gap-2">
        <Iconify icon="zondicons:arrow-left" onClick={() => naviagte(-1)} />
        <Typography variant="h4" className="ms-2">
          David Lagos
        </Typography>
      </div>
      {array.map(() => (
        <>
          <Grid container spacing={2} className="mt-2">
            <div className="ms-2 text-center" style={{ width: "100%" }}>
              <h4>08/11/23</h4>
            </div>
            <Icon fontSize={50} size icon="mingcute:user-4-line" className="mt-2" />
            <Grid
              item
              xs={8}
              sx={{
                border: "1px solid grey",
                borderRadius: 2,
                background: "#13556db5",
                color: "white",
              }}
            >
              <div className="d-flex align-items-center">
                <Typography variant="h7" className="ms-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} className="justify-content-end mt-4">
            <Grid
              item
              xs={8}
              sx={{
                border: "1px solid grey",
                borderRadius: 2,
                background: "#13556D",
                color: "white",
              }}
            >
              <div className="d-flex align-items-center">
                <Typography variant="h7" className="ms-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters
                </Typography>
              </div>
            </Grid>
            <Icon fontSize={50} size icon="mingcute:user-4-line" className="mt-2" />
          </Grid>
        </>
      ))}
    </div>
  );
}
