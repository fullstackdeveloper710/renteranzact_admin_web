import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ManageBlogs = () => {
  const navigate = useNavigate();

  const Blog = () => (
    <Card
      sx={{ maxWidth: 450, cursor: "pointer" }}
      onClick={() => navigate("/blog-detail")}
    >
      <CardMedia
        sx={{ height: 200 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinGCfuvtIzNvb6AsRFE7LtRJrTEKDxVxe6g&s"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          color="rgb(148 161 165)"
        >
          24 Jan 2024
        </Typography>
        <Typography variant="body2" color="#13556D">
          <b>Housing Bubble 2024: Are housing{<br />} Market Crashing?</b>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate("/blog-detail")} size="small">
          Read more
        </Button>
      </CardActions>
    </Card>
  );
  return (
    <div className="px-5">
      <Stack
        mt={3}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Typography variant="h4">Blogs</Typography>
        <Button
          onClick={() => navigate("/add-blogs")}
          size="medium"
          variant="contained"
        >
          Add Blogs
        </Button>
      </Stack>
      <Grid
        container
        spacing={4}
        mt={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item md={4} xs={12} sm={6}>
          <Blog />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Blog />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Blog />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Blog />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Blog />
        </Grid>
        <Grid item md={4} xs={12} sm={6}>
          <Blog />
        </Grid>
      </Grid>
    </div>
  );
};
export default ManageBlogs;
