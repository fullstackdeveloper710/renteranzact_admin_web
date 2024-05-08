import { Card, Typography } from "@mui/material";

const CountCard = ({ count, title }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#c8d736",
        height: 150,
        "&:hover": {
          color: "#c8d736",
          backgroundColor: "#13556d",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <div className="px-3 d-flex justify-content-center flex-column mt-3">
        <Typography className="mt-3" variant="h3">
          {count}
        </Typography>
        <Typography variant="h6">{title}</Typography>
      </div>
    </Card>
  );
};

export default CountCard;
