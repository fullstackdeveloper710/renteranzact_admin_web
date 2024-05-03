import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@nlux/themes/nova.css";
import { useScrollToTop } from "./hooks/use-scroll-to-top";
import Router from "./routes/sections";
import ThemeProvider from "./theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ----------------------------------------------------------------------
export default function App() {

  useScrollToTop();
  return (
    <ThemeProvider>
      <Router />
      <ToastContainer />
     
    </ThemeProvider>
  );
}
