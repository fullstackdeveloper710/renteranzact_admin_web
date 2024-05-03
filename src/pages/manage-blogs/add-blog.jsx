import { Button, Grid, TextField, Typography, styled } from "@mui/material";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";
import Iconify from "../../components/iconify";
import { useLocation } from "react-router-dom";
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
  console.log(state, "state");
  return (
    <div className="px-5">
      <div className="mt-3">
        <Typography variant="h4">
          {state !== null ? "Edit Blogs" : "Add Blogs"}
        </Typography>
        <Grid container spacing={4} mt={3}>
          <Grid item md={12}>
            <TextField value={state?.title} label="Title" fullWidth />
          </Grid>

          <Grid item md={12}>
            <Button
              component="label"
              role={undefined}
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
        <Button variant="contained" size="large" className="mt-4">
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddBlogs;
