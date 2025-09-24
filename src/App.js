import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import PartnerAccount from "./pages/PartnerAccount";

import "./App.css";

function App() {
  useEffect(() => {
    document.title = "React Dashboard";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PartnerAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
