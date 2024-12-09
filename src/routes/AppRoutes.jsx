import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import AddInstitute from "../pages/Institute/AddInstitute";
import InstituteList from "../pages/Institute/InstituteList";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <>

      <Router>
        <Toaster />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<h1>Unauthorized Access</h1>} />
          <Route path="/" element={<ProtectedRoute allowedRoles={['superadmin' , 'admin', 'teacher', 'account']} />}>
            <Route index element={<Dashboard />} />
            <Route path="/add-institute" element={<AddInstitute />} />
            <Route path="/institute-list" element={<InstituteList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </>
  );
};

export default AppRoutes;
