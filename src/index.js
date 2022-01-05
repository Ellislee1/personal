import { render } from "react-dom";
import ScrollToTop from "./functions/ScrollToTop";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./components/App";
import Main from "./components/Main";
import DigitalCV from "./components/DigitalCV";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />} />
        <Route path="/cv" element={<DigitalCV />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);