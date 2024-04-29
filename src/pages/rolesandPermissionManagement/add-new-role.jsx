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
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Add New Role</Typography>
      </Stack>
      <Grid container spacing={6}>
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="role" label="role-name" type={"text"} />
        </Grid>
        <Grid item xs={8} md={6}>
          <Select
            labelId="multiple-select-label"
            id="multiple-select"
            fullWidth
            placeholder="Role And Permissions"
            label="Role Permissons"
            value={formData?.selectedPermission}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                selectedPermission: e.target.value,
              }))
            }
            multiple
            renderValue={(selected) => selected.join(", ")}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  value={formData?.selectedPermission?.includes(name)}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
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
