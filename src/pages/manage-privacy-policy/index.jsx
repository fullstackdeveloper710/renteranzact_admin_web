import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button, Typography } from "@mui/material";

const ManagePrivacyPolicy = () => {
  return (
    <div className="px-5">
      <Typography className="mt-3" variant="h4">Manage Privacy Policy</Typography>
      <div className="mt-5">
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

        <Button
          variant="contained"
          size="large"
          className=" global-button mt-4"
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default ManagePrivacyPolicy;
