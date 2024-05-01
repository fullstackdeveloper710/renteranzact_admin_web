import { Card, Typography } from "@mui/material";

const CountCard = ({ count, title }) => {
  return (
    <Card sx={{ backgroundColor: "#13556D", height: 150 }}>
      <div className="px-3 d-flex justify-content-center flex-column mt-3">
        <Typography sx={{ color: "white" }} className="mt-3" variant="h3">
          {count}
        </Typography>
        <Typography sx={{ color: "white" }} variant="h6">
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default CountCard;
