import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, TextField, Typography } from "@mui/material";

const ManageAboutUS = () => {
  return (
    <div className="px-5">
      <Typography variant="h4" className="mt-3">Manage About Us</Typography>
      <div className="mt-5">
        <TextField label="Title" fullWidth />
        <div className="mt-4">
          <CKEditor
            editor={ClassicEditor}
            data={""}
            onReady={(editor) => {
              editor.ui.view.editable.element.style.height = "300px";

              // You can store the "editor" and use when it is needed.
            }}
            onChange={(event, editor) => {
              const data = editor.getData();

              //   setTextEditor(data);
            }}
          />
        </div>

        <Button  className="global-button mt-4" variant="contained" size="large"  color="primary">
          Save
        </Button>
      </div>
    </div>
  );
};
export default ManageAboutUS;
