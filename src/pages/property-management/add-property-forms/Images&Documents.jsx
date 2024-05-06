import { Checkbox, Typography } from "@mui/material";
import React from "react";
import Iconify from "../../../components/iconify";

const ImagesDocuments = () => {
  return (
    <div className="screen-transition">
      <Typography variant="h5">Property Images </Typography>

      <p className="mt-4">
        Tap to select and upload multiple images/vedios of the property
      </p>

      <div className="d-flex align-items-center gap-4">
        <img
          src={"/images/houseProperty.jpg"}
          style={{ height: 100, width: 150, borderRadius: 20 }}
        />
        <img
          src={"/images/houseProperty.jpg"}
          style={{ height: 100, width: 150, borderRadius: 20 }}
        />

        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: 100,
            width: 150,
            borderRadius: 20,
            background: "rgb(245 245 245)",
            opacity: 9.3,
          }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              background: "rgb(180 180 180)",
              height: 30,
              width: 30,
              borderRadius: "50%",
            }}
          >
            <Iconify sx={{ color: "white" }} icon="heroicons:plus-20-solid" />
          </div>
        </div>
      </div>
      <Typography variant="body2" className="mt-1" color="rgb(141 155 159)">
        Maximum file size up to 5MB
      </Typography>
      <Typography variant="body2" color="rgb(141 155 159)">
        Supported formats:JPG,PNG,JPEG,MP4,WEBP
      </Typography>
      <Typography variant="h5" className="mt-4">
        Property Documents{" "}
      </Typography>
      <p className="mt-4">Tap to upload property documents</p>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: 100,
          width: 150,
          borderRadius: 20,
          background: "rgb(245 245 245)",
          opacity: 9.3,
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            background: "rgb(180 180 180)",
            height: 30,
            width: 30,
            borderRadius: "50%",
          }}
        >
          <Iconify sx={{ color: "white" }} icon="heroicons:plus-20-solid" />
        </div>
      </div>
      <Typography variant="body2" className="mt-1" color="rgb(141 155 159)">
        Maximum file size up to 20MB
      </Typography>
      <Typography variant="body2" color="rgb(141 155 159)">
        Supported formats:PDF
      </Typography>
      <div className="mt-3 d-flex align-items-center">
        <Checkbox />
        <span>Rentranzact legal partner</span>
      </div>
    </div>
  );
};

export default ImagesDocuments;
