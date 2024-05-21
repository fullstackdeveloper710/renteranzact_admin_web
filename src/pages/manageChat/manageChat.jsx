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
  const [recentUsers] = useState([
    {
      user: "Hiragi Kangami",
      email: "HiragiKangami@gmail.com",
    },
    {
      user: "Hiragi Kangami",
      email: "HiragiKangami@gmail.com",
    },
    {
      user: "Hiragi Kangami",
      email: "HiragiKangami@gmail.com",
    },
    {
      user: "Hiragi Kangami",
      email: "HiragiKangami@gmail.com",
    },
  ]);
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you?", sender: "sender", time: new Date() },
    {
      text: "Hi! I need assistance with my order.",
      sender: "user",
      time: new Date(),
    },
    { text: "Hello, how can I help you?", sender: "sender", time: new Date() },
    {
      text: "Hi! I need assistance with my order.",
      sender: "user",
      time: new Date(),
    },
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
      <Grid container className="mt-4 shadow-lg rounded">
        <Grid item md={4} className="border-end" sx={{  p: 2 }}>
          <div className="d-flex justify-content-between pb-4 align-items-center">
            <Typography variant="h5">RECENT CHATS</Typography>
            <Button size="medium" className="global-button" variant="contained">
              New Chat
            </Button>
          </div>
          <div>
            {recentUsers.map((x, i) => {
              return (
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
                      <Typography variant="subtitle1" color={"white"}>
                        {x.user}
                      </Typography>
                      <Typography color={"white"} variant="subtitle2">
                        {x.email}
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
              );
            })}
          </div>
        </Grid>
        <Grid item md={8}>
          <div className="chat-container">
            <div className="d-flex justify-content-center align-items-center">
              <div
                className="py-3"
                style={{
                  background: "#13556da8",
                  padding: 10,
                  textAlign: "center",
                  borderRadius: 10,
                  color: "white",
                  width: 200,
                }}
              >
                13/05/2024
              </div>
            </div>
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
                  <InputAdornment  position="end">
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
