import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateRoute from "./pages/CreateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-route" element={<CreateRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
