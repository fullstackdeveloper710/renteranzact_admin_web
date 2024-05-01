import { Dialog, DialogTitle, Button, DialogActions } from "@mui/material";
const ConfirmationDialog = ({ open, setDeleteDialog, title, yes }) => {
  const handleClose = () => setDeleteDialog(false);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>

      <DialogActions>
        <Button onClick={yes}>Yes</Button>
        <Button onClick={handleClose} color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
