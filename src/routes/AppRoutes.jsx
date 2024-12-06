import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Regsiter";
import Dashboard from "../pages/Dashboard/Dashboard";
import Header from '../components/Header';

const AppRoutes = () => {
  return (
      <>
          
    <Router>
    <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={

            <Dashboard />

          }
        />
      </Routes>
    </Router>
      </>
  );
};

export default AppRoutes;
