import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import DoctorDetails from './Pages/DoctorDetails/DoctorDetails';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import ManageAdmin from './Pages/Dashboard/MangeAdmin/MangeAdmin';
import AddService from './Pages/Dashboard/AddService/AddService';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import Login2 from './Pages/Login/Login/Login2';
import Register2 from './Pages/Login/Register/Register2';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import ScrollToTop from './Pages/Shared/ScrollToTop/ScrollToTop';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AllServices from './Pages/AllServices/AllServices';
import BookAppointment from './Pages/BookAppointment/BookAppointment';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import ManageAppointments from './Pages/Dashboard/ManageAppointments/ManageAppointments';
import MyAppointments from './Pages/Dashboard/MyAppointments/MyAppointments';

function App() {
  return (
    <div >
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/allServices" element={<AllServices />}>
            </Route>
            <Route path="/serviceDetails/:serviceId" element={<ServiceDetails />}>
            </Route>
            <Route path="/doctorDetails/:doctorId" element={<DoctorDetails />}>
            </Route>
            <Route path="/appointment/:serviceId" element={<BookAppointment />}>
            </Route>

            <Route path="/login2" element={<Login2 />}>
            </Route>

            <Route path="/register2" element={<Register2 />}>
            </Route>
            {/* Dashboard Nested Route start */}
            <Route path="/dashboard" element={<Dashboard />}>


              <Route path={`/dashboard`} element={
                <MyAppointments />}>
              </Route>

              <Route path={`/dashboard/manageAppointments`} element={
                <ManageAppointments />}>
              </Route>

              <Route path={`/dashboard/addService`} element={<AdminRoute>
                <AddService />
              </AdminRoute>}>
              </Route>

              <Route path={`/dashboard/addDoctor`} element={<AdminRoute>
                <AddDoctor />
              </AdminRoute>}>
              </Route>

              <Route path={`/dashboard/manageAdmin`} element={<AdminRoute>
                <ManageAdmin />
              </AdminRoute>}> </Route>

            </Route>
            {/* Dashboard Nested Route End */}

          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
