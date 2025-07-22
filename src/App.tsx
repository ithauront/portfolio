import { Route, Routes } from "react-router-dom";

import { MainLandingPage } from "./pages/MainLandingPage";
import { ProjectDetails } from "./pages/ProjectDetails";
import "./main-styles/styles.css";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLandingPage />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}
