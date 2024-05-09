import { Icon } from "@iconify/react/dist/iconify.js";
import { Typography } from "@mui/material";
import React from "react";

const CollapseWithTitle = ({ title, open, setOpen }) => {
  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <Typography variant="body1">
        <b>{title}</b>
      </Typography>
      <div onClick={() => setOpen(!open)}>
        {open ? (
          <Icon
            fontSize={20}
            cursor={"pointer"}
            color="#008F97"
            icon="iconoir:nav-arrow-down"
          />
        ) : (
          <Icon
            fontSize={20}
            cursor={"pointer"}
            color="#008F97"
            icon="iconoir:nav-arrow-up"
          />
        )}
      </div>
    </div>
  );
};

export default CollapseWithTitle;
