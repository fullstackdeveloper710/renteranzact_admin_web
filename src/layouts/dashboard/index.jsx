import { useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import { AiChat } from "@nlux/react";
import { useChatAdapter } from "@nlux/langchain-react";

import Nav from "./nav";
import Main from "./main";
import Header from "./header";
import Iconify from "../../components/iconify";

// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const adapterOptions = {
    url: "https://pynlux.api.nlux.ai/pirate-speak",
  };
  const langServeAdapter = useChatAdapter(adapterOptions);
  const [openNav, setOpenNav] = useState(false);
  const [showAI, setShowAI] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />

      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
        {/* {showAI && (
          <div
            style={{
              position: "fixed",
              zIndex: 1000,
              bottom: 100,
              right: 20,
            }}
          >
            <AiChat
              layoutOptions={{ height: 400, width: 500 }}
              className="ai-chatbot-support"
              adapter={langServeAdapter}
              promptBoxOptions={{
                placeholder: "How can I help you today?",
              }}
            />
          </div>
        )} */}

        {/* <Box
          onClick={() => setShowAI(!showAI)}
          sx={{
            height: 50,
            width: 50,
            position: "fixed",
            fontSize: 24,
            bottom: 20,
            right: 20,
            width: 60,
            height: 60,
            alignItems: "center",
            backgroundColor: "#13556D",
            color: "#ffffff",
            borderRadius: "50%",
            textAlign: "center",
            lineHeight: 60 ,
            cursor: "pointer",
            zIndex: 1000 ,
          }}
        >
          <Iconify sx={{ color: "white" }} icon="healthicons:contact-support" />
        </Box> */}
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
