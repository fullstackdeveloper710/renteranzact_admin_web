import { Button, Grid, TextField, Typography } from "@mui/material";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useState } from "react";

const AddBlogs = () => {
    const [textEditor, setTextEditor] = useState("");
  return (
    <div className="px-5">
      <div className="mt-3">
        <Typography variant="h4">Add Blogs</Typography>
        <Grid container spacing={4} mt={3}>
          <Grid item md={12}>
            <TextField label="Title" fullWidth />
          </Grid>
          <Grid item md={12}>
            <CKEditor
            
            
              editor={ClassicEditor}
              data={textEditor}
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
