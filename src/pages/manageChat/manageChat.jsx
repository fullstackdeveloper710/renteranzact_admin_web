import {
  Box,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import "./chat.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import ManageChatCard from "./manageChatCard";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import moment from "moment";

export default function ManageChat() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you?", sender: "sender", time: new Date() },
    {
      text: "Hi! I need assistance with my order.",
      sender: "user",
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      const newMessage = { text: input, sender: "user", time: new Date() };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <div className="px-5">
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h4" className="mt-2">
          Manage Chat
        </Typography>
        {/* <div className="d-flex">
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
        </div> */}
      </Stack>
      <Grid container className="mt-4">
        <Grid item md={4} sx={{ border: "1px solid grey", p: 2 }}>
          <div className="d-flex justify-content-between align-items-center">
            <Typography variant="h5">RECENT CHATS</Typography>
            <Button size="medium" className="global-button" variant="contained">
              New Chat
            </Button>
          </div>
          <div>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ background: "#13556d", mt: 2, cursor: "pointer" }}
              p={1}
              borderRadius={2}
            >
              <div className="d-flex justify-content-between align-items-center gap-3">
                <img
                  style={{ borderRadius: "50%", height: 30, width: 35 }}
                  src={"/images/profile.png"}
                />
                <div className="">
                  <Typography component={"b"} variant="h6" color={"white"}>
                    Hiragi Kangami
                  </Typography>
                  <Typography color={"white"} variant="body2">
                    HiragiKangami@gmail.com
                  </Typography>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center gap-2">
                <Typography color="white" variant="body2">
                  User
                </Typography>
                <Icon color="white" icon="material-symbols:delete" />
              </div>
            </Box>
          </div>
        </Grid>
        <Grid item md={8}>
          <div className="chat-container">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <Box key={index} className={`message ${message.sender}`}>
                  {message.text}
                  <div className="timestamp">
                    {moment(message.time).format("MM ddd DD HH:mm")}
                  </div>
                </Box>
              ))}
            </div>
            {/* <div className="chat-input"> */}
            <TextField
              fullWidth
              type="text"
              placeholder="Type your message..."
              value={input}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon
                      cursor={"pointer"}
                      fontSize={30}
                      color="#13556d"
                      icon="mingcute:send-line"
                    />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            {/* </div> */}
          </div>
        </Grid>
      </Grid>
      {/* <Stack>
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
        </div>
      </Stack> */}
      {/* {array.map(() => (
        <ManageChatCard />
      ))} */}
    </div>
  );
}
