import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import VisualizationPage from "./pages/VisualizationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/visualization" element={<VisualizationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
