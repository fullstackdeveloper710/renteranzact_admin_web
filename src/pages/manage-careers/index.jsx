import { useNavigate } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Iconify from "../../components/iconify";

const ManageCareers = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="d-flex justify-content-between align-items-center w-100 mt-3">
        <Typography variant="h4">Careers</Typography>
        <Button
          onClick={() => navigate("/add-careers")}
          size="large"
          variant="contained"
          className="global-button"
        >
          Add
        </Button>
      </div>

      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="mt-4">
        <TableHead>
          <TableRow>
            <TableCell align="left">Job Title</TableCell>
            <TableCell align="left">No. of Openings</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell align="left">{"John Doe"}</TableCell>
          <TableCell align="left">{"8"}</TableCell>
          <TableCell align="left">
            <Iconify icon="tabler:edit" />
            &nbsp;
            <Iconify icon="mingcute:delete-line" />
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageCareers;
