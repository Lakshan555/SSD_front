import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddStaff from "./components/Admin/AddStaff";
import ViewStaff from "./components/Admin/ViewStaff";
import Login from "./components/Authentication/Login";
import Dashboard from "./components/Manager/Dashboard";
import Navbar from "./components/NavBar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Private routes */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/viewStaff" element={<ViewStaff />} />
          <Route path="/addStaff" element={<AddStaff />} />
          <Route path="/mDashboard" element={<Dashboard />} />
        </Route>

        {/* Public routes */}
        <Route path="/" element={<PublicRoute />}>
          <Route index path="/login" element={<Login />} />
        </Route>
        <Route index path="/home" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
