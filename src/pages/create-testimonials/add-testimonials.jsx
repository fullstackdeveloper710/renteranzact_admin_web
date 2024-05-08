import {
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Iconify from "../../components/iconify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddTestimonials = () => {
  const [rating, setRating] = useState(0);
  const navigate =useNavigate()
  return (
    <div className="px-5">
       <div className="d-flex align-items-center gap-3 mt-3">
        <Iconify icon="zondicons:arrow-left" onClick={() => navigate(-1)} />
        <Typography variant="h4">Create Testimonials</Typography>
      </div>
      <Grid container spacing={4} mt={3}>
        <Grid item md={6}>
          <TextField label="Name" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Email" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Company" fullWidth />
        </Grid>
        <Grid item md={6}>
          <TextField label="Company Website" fullWidth />
        </Grid>
        <Grid item md={12}>
          <Typography variant="body2" className="mb-2">
            Description
          </Typography>
          <CKEditor
            editor={ClassicEditor}
            data={""}
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
            }}
            onChange={(event, editor) => {
              const data = editor.getData();

              // setTextEditor(data);
            }}
          />
        </Grid>
        <Grid item md={6}>
          <Button
            fullWidth
            component="label"
            role={undefined}
            // variant="outlined"
            className="global-button"
            tabIndex={-1}
            startIcon={<Iconify icon="ep:upload-filled" />}
          >
            Add Media
            <VisuallyHiddenInput type="file" />
          </Button>
        </Grid>
        <Grid item md={6}>
          <Typography variant="body2" className="mb-2">
            Rating
          </Typography>
          <Rating
            name="simple-controlled "
            value={rating}
            onChange={(event, newValue) => {
              console.log(newValue, "value");
              setRating(newValue);
            }}
          />
        </Grid>
      </Grid>

      <Button variant="contained" size="large" className="global-button mt-4">
        Save
      </Button>
    </div>
  );
};

export default AddTestimonials;
