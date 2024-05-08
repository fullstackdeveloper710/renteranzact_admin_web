import {
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  ListItemText,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Iconify from "../../components/iconify";
const AddNewRole = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roleName: "",
    selectedPermission: [],
  });
  const names = [
    "User management (View/Add/Edit/Delete)",
    "Manage Employees (View/Add/Edit/Delete)",
    "Manage Property (View/Add/Edit/Delete)",
    "Manage Role & Permissions (View/Add/Edit/Delete)",
    "Review & Rating Management (View/Approve/Reject/Delete)",
    "FInance Performance (view/download)",
    "Manage Transaction (view/download)",
    "Activity Logs (view)",
  ];
  console.log("--formData", formData);

  return (
    <div className="px-5">
      <Stack
        direction="row"
        alignItems="center"
       gap={3}
      mt={3}
      >
         <Iconify onClick={() => navigate(-1)} icon="zondicons:arrow-left" />
        <Typography variant="h4">Add New Role</Typography>
      </Stack>
      <Grid container mt={2} >
        <Grid item xs={12} >
          <TextField style={{width:"55%"}} name="role" label="Name" type={"text"} />
        </Grid>
        <Grid item xs={12} className="mt-3">
          {names.map((name) => (
            <div className="d-flex align-items-center">
              <Checkbox value={formData?.selectedPermission?.includes(name)} />
              <ListItemText primary={name} />
            </div>
          ))}
        </Grid>
      </Grid>
      <Button
        style={{ marginTop: 20 }}
        size="medium"
        type="submit"
        variant="contained"
        color="inherit"
        className="global-button"
        onClick={() => {
          //   toast.success("New role added");
          navigate(-1);
        }}
      >
        Save
      </Button>
    </div>
  );
};
export default AddNewRole;
