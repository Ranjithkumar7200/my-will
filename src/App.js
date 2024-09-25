import "./App.css";
import Beneficiaries from "./pages/Beneficiaries/Beneficiaries";
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
          <Route path="/beneficiaries" element={<Beneficiaries />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
