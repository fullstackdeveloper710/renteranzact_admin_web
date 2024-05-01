import {
  Button,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React from "react";
import Iconify from "../../components/iconify/iconify";
import ManageChatCard from "./manageChatCard";
import { useNavigate } from "react-router-dom";

export default function ManageChat() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigate = useNavigate()
  return (
    <div className="px-5">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4">Manage Chat</Typography>
        <div className="d-flex">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="From Date" />
            </DemoContainer>
          </LocalizationProvider>
          &nbsp;&nbsp;
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker label="To Date" />
            </DemoContainer>
          </LocalizationProvider>
        </div>
      </Stack>
      <Stack>
        <div className="d-flex  align-items-center mt-3">
          <OutlinedInput
            placeholder="Search user..."
            startAdornment={
              <InputAdornment position="end">
                <Iconify
                  icon="eva:search-fill"
                  sx={{ color: "text.disabled", width: 20, height: 20 }}
                />
              </InputAdornment>
            }
          />
          {/* <Button className="btn global-button ml-3">Search</Button> */}
        </div>
      </Stack>
      {array.map(() => (
        <ManageChatCard />
      ))}
    </div>
  );
}
