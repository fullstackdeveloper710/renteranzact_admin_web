

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useScrollToTop } from './hooks/use-scroll-to-top';

import Router from './routes/sections';
import ThemeProvider from './theme';


// ----------------------------------------------------------------------

export default function App() {


  useScrollToTop();
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
