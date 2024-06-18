import "./App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
