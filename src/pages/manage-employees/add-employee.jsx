import {
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const AddEmployee = () => {
  return (
    <div className="px-5">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Manage Employees{'>>'}Add Employee</Typography>
      </Stack>

      <Grid container spacing={6}>
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="name" label="Name" type={'text'} />
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="email" label="Email" type={'email'} />
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="mobile" label="Mobile" type={'text'} />
        </Grid>
        <Grid item xs={8} md={6}>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={'male'}
            label="Role"
          >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="password" label="Password" type={'text'} />
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField fullWidth name="confirmPassword" label="Confirm Password" type={'password'} />
        </Grid>
      </Grid>

      <div className="text-center mt-4">
        <Button
          sx={{ mt: 3, width: 400 }}
          size="large"
          type="submit"
          fullWidth
          variant="contained"
          color="inherit"
        >
          Save
        </Button>
      </div>
    </div>
  );
};
export default AddEmployee;
