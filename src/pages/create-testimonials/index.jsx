import {
  Button,
  Grid,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Iconify from "../../components/iconify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab } from "bootstrap";
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

const Testimonials = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="px-5">
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Typography variant="h4">Testimonials</Typography>
        <Button
          onClick={() => navigate("/add-testimonials")}
          size="large"
          className="global-button"
          variant="contained"
        >
          Add
        </Button>
      </div>

      <Table sx={{ minWidth: 650 }} aria-label="simple table" className="mt-4">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Company Website</TableCell>

            <TableCell align="left">Rating</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell align="left">{"John Doe"}</TableCell>
          <TableCell align="left">{"Amazon"}</TableCell>
          <TableCell align="left">{"https://amazon.in"}</TableCell>
          <TableCell align="left">{"https://amazon.in"}</TableCell>

          <TableCell align="left">
            <Rating value={3} />
          </TableCell>
          <TableCell align="left">
            <Iconify icon="tabler:edit" />
            &nbsp;
            <Iconify icon="mingcute:delete-line" />
          </TableCell>
          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
};

export default Testimonials;
