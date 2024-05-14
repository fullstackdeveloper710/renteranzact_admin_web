import { Paper, Typography } from "@mui/material";
import React from "react";

const PaperForm = ({ title, children }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mt: 3 , borderRadius : 2 }}>
      <Typography component="h5" variant="h5">
        {title}
      </Typography>
      {children}
    </Paper>
  );
};

export default PaperForm;
