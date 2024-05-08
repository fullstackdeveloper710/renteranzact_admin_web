import PropTypes from "prop-types";

import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

import Iconify from "../../components/iconify";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

export default function UserTableToolbar({
  numSelected,
  filterName,
  onFilterName,
}) {
  const navigate = useNavigate();
  return (
    <Toolbar
      sx={{
        height: 96,
        display: "flex",
        justifyContent: "space-between",
        p: (theme) => theme.spacing(0, 1, 0, 3),
        ...(numSelected > 0 && {
          color: "primary.main",
          bgcolor: "primary.lighter",
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <>
        <div>
          <OutlinedInput

            value={filterName}
            onChange={onFilterName}
            placeholder="Search user..."
            startAdornment={
              <InputAdornment position="start">
                <Iconify
                  icon="eva:search-fill"
                  // sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />&nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl sx={{ width: 300 }}>
            <InputLabel id="demo-simple-select-label">Filter Users</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
            >
                <MenuItem value={10}>All</MenuItem>
              <MenuItem value={10}>Property Managers</MenuItem>
              <MenuItem value={20}>Landlords</MenuItem>
              <MenuItem value={30}>Renters</MenuItem>
            </Select>
          </FormControl>
        </div>
          {/* <Button
            className="global-button"
            variant="contained"
            color="inherit"
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => navigate("/manage-users/add-user")}
          >
            Add User
          </Button> */}
        </>
      )}

      {/* {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )} */}
    </Toolbar>
  );
}

UserTableToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};
