import {
    Box,
    Card,
    CardContent,
    Chip,
    Rating,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const Property = ({ title, location, rate, status, isFavourite, img ,price }) => {
    return (
      <Card elevation={0} sx={{ background: "transparent" }}>
        <Box
          sx={{
            backgroundImage: `url(/images/houseProperty.jpg)`,
            height: 284,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="d-flex justify-content-between align-items-center p-2">
            <Chip
              sx={{
                background: "white",
                color: "#009DA6",
                fontSize: 12,
                fontWeight: "bold",
              }}
              label={'Currently living'}
              size="small"
            />
          </div>
        </Box>
        <CardContent className="px-0">
          <div className="d-flex justify-content-between align-items-center">
            <Typography fontSize={18} color={"text.secondary"} fontWeight={500}>
              {'Bakare Estate'}
            </Typography>
            <div className="d-flex align-items-center gap-1">
              {/* <Rating
                precision={1}
                value={1}
                readOnly
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "#D3DF5E", // Change the color of the filled stars
                  },
                }}
                size="small"
              /> */}
              <Typography fontSize={14} color={"text.secondary"}>
                {'4.7'}
              </Typography>
            </div>
          </div>
          <Typography
              fontSize={18}
              color="#031013"
              fontWeight={900}
              className="mt-1"
            >
              {'₦ 7,923/ monthly'}
            </Typography>
        </CardContent>
      </Card>
    );
  };
  
  export default Property;
  