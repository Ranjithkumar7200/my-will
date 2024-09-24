import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import TopNavbar from "./pages/TopNavbar/TopNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
