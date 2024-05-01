import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../components/iconify/iconify";
import { useNavigate } from "react-router-dom";

export default function ChatAsPerUser() {
  const naviagte = useNavigate();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="px-5">
      <div className="d-flex align-items-center mt-3">
        <Iconify
          icon="ion:arrow-back"
          sx={{ color: "text.disabled", width: 20, height: 20 }}
          onClick={() => naviagte(-1)}
        />
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
            <img
              src="./images/profile.png"
              style={{ height: "auto", width: "100px" }}
              alt="profileimage"
            />
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
            <img
              src="./images/profile.png"
              style={{ height: "auto", width: "100px" }}
              alt="profileimage"
            />
          </Grid>
        </>
      ))}
    </div>
  );
}
