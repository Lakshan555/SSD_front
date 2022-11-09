import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStaff from "./components/Admin/AddStaff";
import ViewStaff from "./components/Admin/ViewStaff";
import Login from "./components/Authentication/Login";
import Dashboard from "./components/Manager/Dashboard";
import Navbar from "./components/NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Login />} />

        {/* Admin */}
        <Route path="/viewStaff" element={<ViewStaff />} />
        <Route path="/addStaff" element={<AddStaff />} />
        <Route path="/mDashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
