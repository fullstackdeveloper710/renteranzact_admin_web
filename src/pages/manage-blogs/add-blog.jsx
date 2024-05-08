import { Button, Grid, TextField, Typography, styled } from "@mui/material";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import Iconify from "../../components/iconify";
import { useLocation, useNavigate } from "react-router-dom";
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
const AddBlogs = () => {
  const [textEditor, setTextEditor] = useState("");
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="mt-3">
        <div className="d-flex align-items-center gap-3">

        <Iconify icon="zondicons:arrow-left" onClick={() => navigate(-1)} />
        <Typography variant="h4">
          {state !== null ? "Edit Blogs" : "Add Blogs"}
        </Typography>

        </div>
        <Grid container spacing={4} mt={3}>
          <Grid item md={12}>
            <TextField value={state?.title} label="Title" fullWidth />
          </Grid>

          <Grid item md={12}>
            <Button
              component="label"
              role={undefined}
              className="global-button"
              variant="outlined"
              tabIndex={-1}
              startIcon={<Iconify icon="ep:upload-filled" />}
            >
              Add Media
              <VisuallyHiddenInput type="file" />
            </Button>
          </Grid>
          <Grid item md={12}>
            <CKEditor
              editor={ClassicEditor}
              data={textEditor || state?.description}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
              onChange={(event, editor) => {
                const data = editor.getData();

                setTextEditor(data);
              }}
            />
          </Grid>
        </Grid>
        <Button variant="contained" size="large" className="global-button mt-4">
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddBlogs;
