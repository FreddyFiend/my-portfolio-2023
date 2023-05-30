import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectOne from "./pages/ProjectOne";
import Homepage from "./pages/Homepage";
import "react-tooltip/dist/react-tooltip.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/projectone" element={<ProjectOne />}></Route>
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
